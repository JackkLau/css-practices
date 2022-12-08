import React from 'react';
import './index.scss'

/**
 * 使用弹性盒布局实现两列等高布局
 */
function Index() {
  return (
    <div className="body-box">
      <header>
        <h1>元素宽度的问题</h1>
      </header>
      {/*<div>1</div>*/}
      <div className="container">
        <main className="main">
          <h2>两列布局的HTML</h2>
          <p>
            新建一个网页和一个空的样式表，将其链接到一起。将代码清单3-1中的标记加入到新网页中。该网页有一个头部、一个主元素和一个侧边栏，它们构成了网页的两列，并由一个容器元素包了起来。
            新建一个网页和一个空的样式表，将其链接到一起。将代码清单3-1中的标记加入到新网页中。该网页有一个头部、一个主元素和一个侧边栏，它们构成了网页的两列，并由一个容器元素包了起来。
            新建一个网页和一个空的样式表，将其链接到一起。将代码清单3-1中的标记加入到新网页中。该网页有一个头部、一个主元素和一个侧边栏，它们构成了网页的两列，并由一个容器元素包了起来。
            新建一个网页和一个空的样式表，将其链接到一起。将代码清单3-1中的标记加入到新网页中。该网页有一个头部、一个主元素和一个侧边栏，它们构成了网页的两列，并由一个容器元素包了起来。
            新建一个网页和一个空的样式表，将其链接到一起。将代码清单3-1中的标记加入到新网页中。该网页有一个头部、一个主元素和一个侧边栏，它们构成了网页的两列，并由一个容器元素包了起来。
          </p>
        </main>
        <aside className="sidebar">
          <a href="https://www.baidu.com" className="button-link">baidu</a>
          <a href="https://www.taobao.com" className="button-link">taobao</a>
          <a href="https://www.jd.com" className="operation-link">sponsor-link</a>
        </aside>
      </div>

    </div>
  );
}

export default Index;