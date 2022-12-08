import React from 'react';
import './index.scss'

function Index() {
  return (
    <div>
      <div className="panel">
        <h2>Single-origin</h2>
        <div className="body">
          这个面板跟之前的面板（如图2-7所示）类似。它的HTML标记如代码清单2-27所示。代码里的面板有两个实例：一个面板在body里，还有一个面板在深色的区域中。按照代码清单2-27更新HTML。
        </div>
      </div>
      <aside className="dark">
        <div className="panel">
          <h2>Single-origin</h2>
          <div className="body">
            这个面板跟之前的面板（如图2-7所示）类似。它的HTML标记如代码清单2-27所示。代码里的面板有两个实例：一个面板在body里，还有一个面板在深色的区域中。按照代码清单2-27更新HTML。
          </div>
        </div>
      </aside>

    </div>
  );
}

export default Index;