import React from 'react';
import './index.scss'

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
            当明确设置一个元素的高度时，内容可能会溢出容器。当内容在限定区域放不下，渲染到父元素外面时，就会发生这种现象。图3-8展示了这一现象。文档流不考虑溢出的情况，其容器下方的任何内容都会渲染到溢出内容的上面。
          </p>
        </main>
        <aside className="sidebar">
          <div className="widget"></div>
          <div className="widget"></div>
        </aside>
      </div>

    </div>
  );
}

export default Index;