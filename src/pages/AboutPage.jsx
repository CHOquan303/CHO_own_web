import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about">
      <h2 className="title-bar">About</h2>
      <div className="about__body panel prose">
        <p className="about__lead">
        我是CHO，欢迎来到我的博客。
如你所见博客样式好像跟一些巨佬的博客不一样，一方面是写提示词燃尽了，另一方面这是一个关于坦坦荡荡见自己的故事。
        </p>

        <hr className="dotted-sep about__sep" />

        <h3 className="title-bar title-bar--small about__subtitle">曾经理想</h3>
        <p>
          https://rpgex.sakura.ne.jp/home/about/ 
        </p>
        <p>
         https://www16.big.or.jp/~zun/top.html
        </p>

        <hr className="dotted-sep about__sep" />

        <h3 className="title-bar title-bar--small about__subtitle">现在的模样</h3>
        <ul className="about__list">
          <li>在山里散步，收集好看的落叶</li>
          <li>陶艺：做歪歪扭扭但可爱的杯子</li>
          <li>读书：随笔与山居生活相关的书</li>
          <li>喝茶：焙茶、玄米茶、绿茶</li>
        </ul>

        <hr className="dotted-sep about__sep" />

        <h3 className="title-bar title-bar--small about__subtitle">技能</h3>
        <ul className="about__list">
          <li>前端开发：HTML / CSS / JavaScript / React</li>
          <li>手作：陶艺、简单的木工</li>
          <li>摄影：胶片与数码</li>
        </ul>

        <hr className="dotted-sep about__sep" />

        <p>
          如果你有什么想说的，到 <a href="/mail">Mail 页</a>给我写信吧。（页面没做完，写了我也看不见，
          quancho1995@163.com这是我的163邮箱真想发发这吧，当然QQ，微信联系也可）
          
        </p>
      </div>
    </div>
  )
}
