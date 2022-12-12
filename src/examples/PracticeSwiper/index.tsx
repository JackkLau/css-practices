import React, {ReactNode, useState} from "react";
import './index.scss'
import {useSwipeable} from 'react-swipeable';
import Wrapper from "./Wraper";

export default function Index() {
  const [current, setCurrent] = useState(0)
  const handler = useSwipeable({
    onSwipeStart: (eventData => {
      console.log('eventData: >>', eventData)
      if (eventData.dir === "Right") {
        setCurrent(pre =>
          pre > 4 ? 0 : pre + 1
        )
      } else if (eventData.dir === 'Left') {
        setCurrent(pre => pre === 0 ? 4 : pre - 1)
      }
    })
  })

  function processImg() {
    const elList: ReactNode[] = Array(5)
    const len = elList.length;
    const mLen = Math.floor(len / 2)
    let curImg: ReactNode;
    let img1: ReactNode;
    let img2: ReactNode;
    for (let i = 0; i < mLen; i++) {
      // 当前播放图片索引值
      let rimg = current + 1 + i
      let limg = len + current - 1 - i
      if (rimg >= len) {
        rimg -= len
      }
      if (limg >= len) {
        limg -= len
      }
      console.log('rimg: >>', rimg, "limg", limg)
      img1 = <img style={{transform: `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`}} src={'https://unsplash.it/475/20'} alt=""/>
      img2 = <img style={{transform: `translateX(${-150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`}} src={'https://unsplash.it/475/20'} alt=""/>
      elList[rimg] = img1
      elList[limg] = img2
    }
    curImg = <img style={{transform: `translateZ(300px)`}} src={'https://unsplash.it/475/20'} alt=""/>
    elList[current] = curImg
    console.log('elList: >>', elList)
    return elList.filter(v => v)
  }

  return <div {...handler}>
    <Wrapper>
      {processImg().map((imgEl: any, index: number) => imgEl)}
    </Wrapper>

  </div>
}