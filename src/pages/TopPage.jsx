import { useEffect, useState } from 'react'
import ArticleBlock from '../components/ArticleBlock.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { loadPosts } from '../lib/posts.js'
import './TopPage.css'

export default function TopPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="top-layout">
      <div className="top-main">
        {loading ? (
          <p style={{ textAlign: 'center', color: '#6f8a6a', padding: '24px 0' }}>加载中……</p>
        ) : (
          posts.map((post) => <ArticleBlock key={post.id} {...post} />)
        )}
      </div>
      <Sidebar posts={posts} />
    </div>
  )
}
