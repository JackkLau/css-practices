import React from "react";
import './index.scss'

export default function Index() {
  return <div className="container">
    <header>
      <h1>示例的HTML</h1>
    </header>
    <main className="main clearfix">
      <h2> 示例的HTML</h2>

      <div className="row">
        <div className="column-6">
          <div className="media">
            <img className="media-image" width="100" src={require("../../assets/sunflower.jpg")} alt=""/>
            <div className="media-body">
              <h4>Strength</h4>
              <p>
                在本章的例子里，你需要用浮动来定位四个灰色的盒子，并且在盒子里面将图片浮动到文字的一侧。现在创建一个空白的页面，并给它链接一个新的样式表，然后将代码清单4-1添加到页面中。
              </p>
            </div>
          </div>
        </div>
        <div className="column-6">
          <div className="media">
            <img width="100" src={require("../../assets/sunflower.jpg")} alt="" className="media-image"/>
            <div className="media-body">
              <h4>Strength</h4>
              <p>
                在本章的例子里，你需要用浮动来定位四个灰色的盒子，并且在盒子里面将图片浮动到文字的一侧。现在创建一个空白的页面，并给它链接一个新的样式表，然后将代码清单4-1添加到页面中。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column-6">
          <div className="media">
            <img width="100" src={require("../../assets/sunflower.jpg")} alt="" className="media-image"/>
            <div className="media-body">
              <h4>Strength</h4>
              <p>
                在本章的例子里，你需要用浮动来定位四个灰色的盒子，并且在盒子里面将图片浮动到文字的一侧。现在创建一个空白的页面，并给它链接一个新的样式表，然后将代码清单4-1添加到页面中。
              </p>
            </div>
          </div>
        </div>
        <div className="column-6">
          <div className="media">
            <img width="100" src={require("../../assets/sunflower.jpg")} alt="" className="media-image"/>
            <div className="media-body">
              <h4>Strength</h4>
              <p>
                在本章的例子里，你需要用浮动来定位四个灰色的盒子，并且在盒子里面将图片浮动到文字的一侧。现在创建一个空白的页面，并给它链接一个新的样式表，然后将代码清单4-1添加到页面中。
              </p>
            </div>
          </div>
        </div>
      </div>


    </main>
  </div>
}