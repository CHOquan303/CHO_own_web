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

        <h3 className="title-bar title-bar--small about__subtitle">只能模仿</h3>
        <ul className="about__list">
          上面两个网址分别是上海爱丽丝幻乐团的官网和帽子世界作者的博客。
不知噶仁焖点进去开了没有。看过后你应该发现了“唉，你网页怎么和RPG探险队的页面那么像啊”没错，我就是模仿えぬ大大的网站做的。
        </ul>

        <hr className="dotted-sep about__sep" />

        <h3 className="title-bar title-bar--small about__subtitle">现在状况</h3>
        <ul className="about__list">
          <li></li>
          <li>仓库里放着别人的stg项目，自己改都没动力改</li>
          <li>下了戈多引擎，官方文档看一半也没精力看了</li>
          <li>音乐制作软件下了，依旧没精力看</li>
          <li>总之，除了就业和包烟，什么都不剩了，什么都抛之脑后了（悲）</li>
          <li>多的懒得写了，不想整的那么忧伤，看了上面几条你懂我意思（笑）</li>
        </ul>

        <hr className="dotted-sep about__sep" />

        <p>
          如果你有什么想说的，到 <></><a href="">*/Mail 页</a>给我写信吧。（页面没做完，写了我也看不见，
          quancho1995@163.com这是我的163邮箱真想发发这吧，当然QQ，微信联系也可）
          
        </p>
      </div>
    </div>
  )
}
