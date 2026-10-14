import ArticleBlock from '../components/ArticleBlock.jsx'
import Sidebar from '../components/Sidebar.jsx'
import './TopPage.css'

/* 占位文章数据：按时间倒序（最新在前） */
const POSTS = [
  {
    id: 1,
    title: '初秋的山间散步',
    date: '2026.10.12',
    image: true,
    paragraphs: (
      <>
        <p>九月的风开始变凉了。趁着周末，背起相机去后山走了走。山道上铺满了落叶，踩上去沙沙作响，像翻开一本旧书。</p>
        <p>路边的野栗子落了一地，捡了几颗放进衣兜。山顶的茶屋里要了一壶焙茶，看雾气从山谷里慢慢升起来。</p>
        <p>下山时天色已近黄昏，回头望了一眼，整座山都浸在柔和的橙色里。这样的散步，还想再来一次。</p>
      </>
    ),
  },
  {
    id: 2,
    title: '手作陶器的一天',
    date: '2026.10.05',
    image: false,
    paragraphs: (
      <>
        <p>去了朋友介绍的陶艺工作室，从揉泥开始，做了一只歪歪扭扭的杯子。老师说，手作的东西不完美才可爱。</p>
        <p>拉坯的时候总是控制不好力道，杯壁忽厚忽薄。但等它烧好、上了釉，就会变成独一无二的器皿。</p>
        <p>期待一个月后开窑的日子。到时候用它泡一杯茶，应该会很有成就感吧。</p>
      </>
    ),
  },
  {
    id: 3,
    title: '最近在读的书',
    date: '2026.09.28',
    image: false,
    paragraphs: (
      <>
        <p>最近在读一本关于山居生活的随笔集，作者住在山脚下，每天记录窗外的四季变化。</p>
        <p>书里有一句话很喜欢：「慢下来，才能听见树叶翻动的声音。」生活太匆忙的时候，就翻两页。</p>
        <p>如果你也有喜欢的书，欢迎写信告诉我，见 <a href="/mail">Mail 页</a>。</p>
      </>
    ),
  },
  {
    id: 4,
    title: '关于这个站',
    date: '2026.09.20',
    image: false,
    paragraphs: (
      <>
        <p>欢迎来到 CHO小站。这里是一处记录日常的小小角落，写些散步、手作、读书和喝茶的琐事。</p>
        <p>站点还在慢慢搭建中，<a href="/about">关于我</a>和<a href="/project">手作项目</a>会陆续更新。</p>
        <p>愿你能在这里，度过一段安静而清新的时光。</p>
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
