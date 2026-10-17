import './Sidebar.css'

function formatMonth(ym) {
  const [y, m] = ym.split('-')
  return `${y}年${Number(m)}月`
}

// HashRouter 下 # 被路由占用，锚点改用 JS 滚动
function scrollToPost(id) {
  document.getElementById(`post-${id}`)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Sidebar({ posts }) {
  // 从文章日期提取年月（去重、倒序）
  const months = [...new Set(posts.filter((p) => p.date).map((p) => p.date.slice(0, 7)))]
    .sort()
    .reverse()

  return (
    <aside className="sidebar">
      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">最新日志</h3>
        <ul className="sidebar__list">
          {posts.map((p) => (
            <li key={p.id} className="sidebar__item">
              <a
                href={`#post-${p.id}`}
                className="sidebar__link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToPost(p.id)
                }}
              >
                {p.title}
              </a>
              <span className="sidebar__date">{p.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">归档</h3>
        <ul className="sidebar__list">
          {months.map((ym) => {
            const first = posts.find((p) => p.date.startsWith(ym))
            return (
              <li key={ym} className="sidebar__item">
                <a
                  href={`#post-${first.id}`}
                  className="sidebar__link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToPost(first.id)
                  }}
                >
                  {formatMonth(ym)}
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">gitHub链接</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a href="https://github.com/CHOquan303" className="sidebar__link" target="_blank" rel="noreferrer">
              https://github.com/CHOquan303
            </a>
          </li>
        </ul>
      </section>
    </aside>
  )
}
