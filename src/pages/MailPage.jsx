import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MailPage.css'

export default function MailPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [fileName, setFileName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // 纯前端演示：无后端，提交后跳转 Thanks 页
    navigate('/thanks')
  }

  return (
    <div className="mail">
      <h2 className="title-bar">Mail</h2>
      <form className="mail__body panel" onSubmit={handleSubmit}>
        <div className="mail__field">
          <label className="mail__label" htmlFor="mail-name">姓名</label>
          <input
            id="mail-name"
            type="text"
            className="mail__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="你的名字"
            required
          />
        </div>

        <div className="mail__field">
          <label className="mail__label" htmlFor="mail-email">邮箱</label>
          <input
            id="mail-email"
            type="email"
            className="mail__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="mail__field">
          <label className="mail__label" htmlFor="mail-message">正文</label>
          <textarea
            id="mail-message"
            className="mail__textarea"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="想说的话……"
            required
          />
        </div>

        <div className="mail__field">
          <label className="mail__label" htmlFor="mail-file">附件</label>
          <input
            id="mail-file"
            type="file"
            className="mail__file-input"
            onChange={(e) => setFileName(e.target.files[0]?.name || '')}
          />
          <label className="mail__file-btn" htmlFor="mail-file">
            {fileName || '选择文件'}
          </label>
        </div>

        <div className="mail__actions">
          <button type="submit" className="mail__submit">送信</button>
        </div>
      </form>
    </div>
  )
}
