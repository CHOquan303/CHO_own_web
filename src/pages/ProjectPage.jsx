import './ProjectPage.css'

/* 项目图标（简笔线条风） */
function IconScreen() {
  return (
    <svg viewBox="0 0 24 24" className="project-icon" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function IconCup() {
  return (
    <svg viewBox="0 0 24 24" className="project-icon" aria-hidden="true">
      <path d="M5 9 h10 v5 a4 4 0 0 1 -4 4 h-2 a4 4 0 0 1 -4 -4 z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 11 h2 a3 3 0 0 1 0 6 h-1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6.5" y1="13" x2="9.5" y2="13" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function IconMountain() {
  return (
    <svg viewBox="0 0 24 24" className="project-icon" aria-hidden="true">
      <circle cx="18" cy="5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 19 L8 9 L13 14 L17 7 L22 19 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" className="project-icon" aria-hidden="true">
      <path d="M12 6 C10.5 4.8 7.5 4.8 4 5.8 V19 C7.5 18 10.5 18 12 19 C13.5 18 16.5 18 20 19 V5.8 C16.5 4.8 13.5 4.8 12 6 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="12" y1="6" x2="12" y2="19" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/* 占位项目数据 */
const PROJECTS = [
  {
    id: 1,
    name: 'CHO小站',
    desc: '这个博客网站本身，用 React 搭建，承载我所有的散步、手作与读书记录。',
    link: '#',
    Icon: IconScreen,
  },
  {
    id: 2,
    name: '手作陶器图鉴',
    desc: '记录我做过的每一件陶器，从歪歪扭扭的杯子，到勉强成型的碗。',
    link: '#',
    Icon: IconCup,
  },
  {
    id: 3,
    name: '山野散步地图',
    desc: '收集我走过的散步路线，标注沿途的茶屋、野栗子树和好看的落叶。',
    link: '#',
    Icon: IconMountain,
  },
  {
    id: 4,
    name: '旧书交换角',
    desc: '把读过的书放进来，和同好交换，让旧书去遇见新的读者。',
    link: '#',
    Icon: IconBook,
  },
]

export default function ProjectPage() {
  return (
    <div className="project">
      <h2 className="title-bar">Project</h2>
      <div className="project__list">
        {PROJECTS.map(({ id, name, desc, link, Icon }) => (
          <section className="project__item" key={id}>
            <figure className="project__fig">
              <Icon />
            </figure>
            <div className="project__info">
              <h3 className="project__name">{name}</h3>
              <p className="project__desc">{desc}</p>
              <p className="project__link">
                <a href={link}>查看详情 →</a>
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
