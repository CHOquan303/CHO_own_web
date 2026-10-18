import yaml from 'js-yaml'

/** 把 frontmatter 的 date 规范化成 'YYYY-MM-DD' 字符串（js-yaml 可能把它解析成 Date 对象） */
function toDateString(value) {
  if (!value) return ''
  if (typeof value === 'string') return value
  if (value instanceof Date) {
    const y = value.getUTCFullYear()
    const m = String(value.getUTCMonth() + 1).padStart(2, '0')
    const d = String(value.getUTCDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return String(value)
}

/** 解析 markdown 顶部的 YAML frontmatter（--- 包裹），返回 { data, content } */
function parseFrontmatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!m) return { data: {}, content: raw }
  const data = yaml.load(m[1]) || {}
  return { data, content: m[2] }
}

/**
 * 加载全部文章：先读 index.json 拿文件名列表，再逐篇 fetch 正文，
 * 解析 frontmatter，按 date 倒序返回。
 * 无后端，纯运行时读取 public/content/ 下的 Markdown 文件。
 */
export async function loadPosts() {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}content/index.json`)
    if (!res.ok) throw new Error(`index.json 加载失败：${res.status}`)
    const files = await res.json()

    const posts = await Promise.all(
      files.map(async (file) => {
        const r = await fetch(`${import.meta.env.BASE_URL}content/${file}`)
        if (!r.ok) throw new Error(`文章加载失败：${file}`)
        const raw = await r.text()
        const { data, content } = parseFrontmatter(raw)
        return {
          id: file.replace(/\.md$/, ''),
          title: data.title || file.replace(/\.md$/, ''),
          date: toDateString(data.date),
          category: data.category || '',
          content,
        }
      })
    )

    posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    return posts
  } catch (err) {
    console.error('加载文章失败：', err)
    return []
  }
}
