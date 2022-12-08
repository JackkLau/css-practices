import React from "react";
import './index.scss'

export default function Index() {
  return <div className="square">
    <div className="inner">浮动大法好</div>
    <div className="inner right">浮动大法好</div>
      line-height属性比较特殊，它的值既可以有单位也可以无单位。
    <div className="inner">浮动大法好</div>
    通常我们应该使用无单位的数值，因为它们继承的方式不一样。我们在网页中加上一些文字，看看无单位的行高会如何影响样式。将代码清单2-20添加到网页中。
    <div className="inner">浮动大法好</div>
      line-height属性比较特殊，它的值既可以有单位也可以无单位。通常我们应该使用无单位的数值，因为它们继承的方式不一样。我们在网页中加上一些文字，看看无单位的行高会如何影响样式。将代码清单2-20添加到网页中。

  </div>
}