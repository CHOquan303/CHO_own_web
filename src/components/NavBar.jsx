import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

/* 简笔画（线条）风格图标，颜色随文字 currentColor */
function IconPerson() {
  return (
    <svg viewBox="0 0 16 16" className="nav-icon" aria-hidden="true">
      <circle cx="8" cy="4.5" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 14 C3 10.5 5.2 9 8 9 C10.8 9 13 10.5 13 14" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg viewBox="0 0 16 16" className="nav-icon" aria-hidden="true">
      <path d="M2.5 7.5 L8 2.5 L13.5 7.5 L13.5 13.5 L2.5 13.5 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6.5 13.5 L6.5 9.5 L9.5 9.5 L9.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconFolder() {
  return (
    <svg viewBox="0 0 16 16" className="nav-icon" aria-hidden="true">
      <path d="M1.5 4 L6 4 L7.5 5.5 L14.5 5.5 L14.5 13 L1.5 13 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 16 16" className="nav-icon" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.5 4.5 L8 8.5 L14.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg viewBox="0 0 16 16" className="nav-icon" aria-hidden="true">
      <path d="M8 13 C3 9 2 6 4 4 C6 2.5 8 4.5 8 6 C8 4.5 10 2.5 12 4 C14 6 13 9 8 13 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

const NAV_ITEMS = [
  { key: 'about', label: 'About', path: '/about', Icon: IconPerson },
  { key: 'top', label: 'Top', path: '/top', Icon: IconHome },
  { key: 'project', label: 'Project', path: '/project', Icon: IconFolder },
  { key: 'mail', label: 'Mail', path: '/mail', Icon: IconMail },
  { key: 'thanks', label: 'Thanks', path: '/thanks', Icon: IconHeart },
]

export default function NavBar() {
  const { pathname } = useLocation()
  const count = '000000' // 访问计数：0 占位，待接第三方统计

  const isActive = (item) =>
    item.key === 'top' ? pathname === '/' || pathname === '/top' : pathname === item.path

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="logo">
          <span className="logo__text">CHO小站</span>
          <span className="logo__seal">印</span>
        </Link>

        <nav className="nav">
          {NAV_ITEMS.map(({ key, label, path, Icon }) => (
            <Link
              key={key}
              to={path}
              className={`nav__item${isActive({ key, path }) ? ' nav__item--active' : ''}`}
            >
              <Icon />
              <span className="nav__label">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="counter">
          <span className="counter__label">来客</span>
          <div className="counter__digits">
            {count.split('').map((d, i) => (
              <span key={i} className="counter__digit">{d}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
