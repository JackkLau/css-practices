import React, {useState} from "react";
import './index.scss'

export default function Index() {
  const [isShow, setIsShow] = useState(false)
  return <div className="container">
    <header className="top-banner">
      <div className="top-banner-inner">
        <p>
          通常情况下，模态框用于要求用户阅读一些内容或者在下一步操作之前输入一些内容。比如，图7-1的模态框展示了一个表单，用户可以注册一个时事通讯。初始状态下用display:
          none隐藏弹窗，然后用JavaScript将display改成block以显示弹窗。创建一个新的页面，将代码清单7-1加到元素中。这段代码将所有内容放在两个容器元素中，同时用一个签放置JavaScript代码提供基础功能。
          <button onClick={() => setIsShow(true)}>open</button>
        </p>
      </div>
    </header>
    <nav>
      <div className="dropdown">
        <div className="dropdown-label">Main Menu</div>
        <div className="dropdown-menu">
          <ul className="submenu">
            <li><a href="">Home</a></li>
            <li><a href="">Coffees</a></li>
            <li><a href="">Brewers</a></li>
            <li><a href="">Specials</a></li>
            <li><a href="">About us</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div style={{"display": isShow ? 'block' : 'none'}} className="modal">
      <div className="modal-backdrop"/>
      <div className="modal-body">
        <button className="modal-close" onClick={() => setIsShow(false)}>close</button>
        <h2>Wombat Newsletter</h2>
        <p>代码清单7-1里的第一个元素是顶部条。它包含了触发模态框的按钮。第二个元素是模态框。它包括一个空的modal-backdrop，用来遮住页面剩余部分，将用户的注意力集中到弹窗的内容。弹窗内容在modal-body里。</p>
        <form>
          <p>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email"/>
          </p>
          <p>
            <button type={'submit'}>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
}