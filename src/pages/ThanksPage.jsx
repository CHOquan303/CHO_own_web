import { Link } from 'react-router-dom'
import './ThanksPage.css'

/* 温馨插图：一封印着爱心火漆的信 + 小花 + 太阳 */
function ThanksIllustration() {
  return (
    <svg viewBox="0 0 240 130" className="thanks-illustration" role="img" aria-label="感谢插图">
      {/* 太阳 */}
      <circle cx="205" cy="26" r="14" fill="#e6c36a" />
      {/* 信封 */}
      <rect x="55" y="40" width="110" height="72" rx="3" fill="#fbfdf7" stroke="#5b8c5a" strokeWidth="2.5" />
      <path d="M55 47 L110 85 L165 47" fill="none" stroke="#5b8c5a" strokeWidth="2.5" />
      {/* 爱心火漆封口 */}
      <path
        d="M110 93 C105 87 102.5 83 105.5 79.5 C108 76.5 110 79 110 79 C110 79 112 76.5 114.5 79.5 C117.5 83 115 87 110 93 Z"
        fill="#c0453a"
      />
      {/* 左侧小花 */}
      <line x1="45" y1="94" x2="45" y2="110" stroke="#5b8c5a" strokeWidth="2" />
      <circle cx="45" cy="92" r="3.2" fill="#e6c36a" />
      <circle cx="45" cy="87" r="3" fill="#f2b7c3" />
      <circle cx="45" cy="97" r="3" fill="#f2b7c3" />
      <circle cx="40" cy="92" r="3" fill="#f2b7c3" />
      <circle cx="50" cy="92" r="3" fill="#f2b7c3" />
      {/* 右侧小花 */}
      <line x1="185" y1="104" x2="185" y2="118" stroke="#5b8c5a" strokeWidth="2" />
      <circle cx="185" cy="102" r="3" fill="#e6c36a" />
      <circle cx="185" cy="97.5" r="2.7" fill="#f2b7c3" />
      <circle cx="185" cy="106.5" r="2.7" fill="#f2b7c3" />
      <circle cx="180.5" cy="102" r="2.7" fill="#f2b7c3" />
      <circle cx="189.5" cy="102" r="2.7" fill="#f2b7c3" />
      {/* 飘落的小叶子 */}
      <path d="M28 30 Q33 26 38 30 Q33 34 28 30 Z" fill="#7aa878" />
      <path d="M160 16 Q164 13 168 16 Q164 19 160 16 Z" fill="#a9c69a" />
    </svg>
  )
}

export default function ThanksPage() {
  return (
    <div className="thanks">
      <h2 className="title-bar">Thanks</h2>
      <div className="thanks__body panel">
        <ThanksIllustration />
        <p className="thanks__msg">感谢您的来信，我会尽快回复！</p>
        <p className="thanks__sub">信已平安送达。愿你今天也有一个温柔的午后。</p>
        <p className="thanks__back">
          <Link to="/">← 返回首页</Link>
        </p>
      </div>
    </div>
  )
}
