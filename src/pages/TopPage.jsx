import ArticleBlock from '../components/ArticleBlock.jsx'
import Sidebar from '../components/Sidebar.jsx'
import './TopPage.css'

/* 占位文章数据：按时间倒序（最新在前） */
const POSTS = [
  {
    id: 1,
    title: '占位文章',
    date: '',
    image: false,
    paragraphs: (
      <>
        <p>占位符</p>
      </>
    ),
  },
  {
    id: 2,
    title: '占位文章',
    date: '',
    image: false,
    paragraphs: (
      <>
        <p>占位符</p>
      </>
    ),
  },
  {
    id: 3,
    title: '占位文章',
    date: '2026.09.28',
    image: false,
    paragraphs: (
      <>
        <p>之后这个项目改成markdown存仓库的静态站点后，这好像都要删吧</p>
        
      </>
    ),
  },
  {
    id: 4,
    title: '占位文章',
    date: '占位符',
    image: false,
    paragraphs: (
      <>
        <p>占位符</p>
      </>
    ),
  },
]

export default function TopPage() {
  return (
    <div className="top-layout">
      <div className="top-main">
        {POSTS.map((post) => (
          <ArticleBlock key={post.id} {...post} />
        ))}
      </div>
      <Sidebar posts={POSTS} />
    </div>
  )
}
