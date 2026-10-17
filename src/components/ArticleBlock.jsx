import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './ArticleBlock.css'

// md 里的相对图片路径补全到 content 目录（图片和 md 放一起）
function resolveImgSrc(src) {
  if (!src || /^(https?:|\/|data:|#)/.test(src)) return src
  return `${import.meta.env.BASE_URL}content/${src}`
}

export default function ArticleBlock({ id, title, date, content }) {
  return (
    <article className="article" id={`post-${id}`}>
      <h2 className="title-bar article__title">{title}</h2>
      <div className="article__body panel">
        <p className="article__date">{date}</p>
        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt, ...props }) => (
                <img src={resolveImgSrc(src)} alt={alt || ''} {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
