import './ArticleBlock.css'

/* 占位插图：日式小山 / 太阳 / 树木的简笔装饰 */
function Illustration() {
  return (
    <svg viewBox="0 0 220 110" className="article-illustration" role="img" aria-label="插图">
      <circle cx="178" cy="24" r="13" fill="#e6c36a" />
      <path d="M0 72 L48 34 L88 72 Z" fill="#a9c69a" />
      <path d="M52 72 L100 26 L150 72 Z" fill="#8fb483" />
      <path d="M0 82 Q110 66 220 82 L220 110 L0 110 Z" fill="#7aa878" />
      <line x1="34" y1="88" x2="34" y2="60" stroke="#6b4f3a" strokeWidth="3" />
      <circle cx="34" cy="55" r="11" fill="#5b8c5a" />
      <line x1="196" y1="88" x2="196" y2="70" stroke="#6b4f3a" strokeWidth="3" />
      <circle cx="196" cy="66" r="9" fill="#6f9c6e" />
      <path d="M150 88 Q156 78 162 88" fill="none" stroke="#5b8c5a" strokeWidth="2" />
      <path d="M164 88 Q170 82 176 88" fill="none" stroke="#5b8c5a" strokeWidth="2" />
    </svg>
  )
}

export default function ArticleBlock({ id, title, date, paragraphs, image = false }) {
  return (
    <article className="article" id={`post-${id}`}>
      <h2 className="title-bar article__title">{title}</h2>
      <div className="article__body panel">
        <p className="article__date">{date}</p>
        <div className="prose">{paragraphs}</div>
        {image && (
          <figure className="article__fig">
            <Illustration />
            <figcaption className="article__fig-cap">· 手绘小景 ·</figcaption>
          </figure>
        )}
      </div>
    </article>
  )
}
