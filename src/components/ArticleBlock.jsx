import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './ArticleBlock.css'

export default function ArticleBlock({ id, title, date, content }) {
  return (
    <article className="article" id={`post-${id}`}>
      <h2 className="title-bar article__title">{title}</h2>
      <div className="article__body panel">
        <p className="article__date">{date}</p>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
