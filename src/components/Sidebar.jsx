import './Sidebar.css'

export default function Sidebar({ posts }) {
  return (
    <aside className="sidebar">
      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">最新日志</h3>
        <ul className="sidebar__list">
          {posts.map((p) => (
            <li key={p.id} className="sidebar__item">
              <a href={`#post-${p.id}`} className="sidebar__link">{p.title}</a>
              <span className="sidebar__date">{p.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">归档</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item"><a href="#post-1" className="sidebar__link">2026年10月</a></li>
          <li className="sidebar__item"><a href="#post-1" className="sidebar__link">2026年9月</a></li>
          <li className="sidebar__item"><a href="#post-1" className="sidebar__link">2026年8月</a></li>
        </ul>
      </section>

      <section className="sidebar__block">
        <h3 className="title-bar title-bar--small">gitHub链接</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item"><a href="#post-1" className="sidebar__link">https://github.com/CHOquan303</a></li>
        </ul>
      </section>
    </aside>
  )
}
