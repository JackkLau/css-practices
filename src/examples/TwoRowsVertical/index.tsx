import React from 'react';
import './index.scss'

/**
 * 垂直居中问题
 */
function Index() {
  return (
    <div className="body-box">
      <header>
        <h1>元素宽度的问题</h1>
      </header>
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
          <div className="widget">
            说好的幸
            {/*<img src={require('../../assets/bg.jpg')} alt=""/>*/}
          </div>
          <div className="widget"></div>
        </aside>
      </div>

    </div>
  );
}

export default Index;