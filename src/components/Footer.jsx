import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© {year} CHO小站</p>
        <p className="footer__sub">这里以后有备案信息</p>
      </div>
    </footer>
  )
}
