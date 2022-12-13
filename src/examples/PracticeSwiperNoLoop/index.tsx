import React, {ReactNode, useState} from "react";
import './index.scss'
import {useSwipeable} from 'react-swipeable';
import Wrapper from "./Wraper";

const len = 5
export default function Index() {
  const [current, setCurrent] = useState(0)
  const handler = useSwipeable({
    onSwipeStart: (eventData => {
      console.log('eventData: >>', eventData)
      if (eventData.dir === "Right") {
        setCurrent(pre =>
          pre >= len - 1 ? len - 1 : pre + 1
        )
      } else if (eventData.dir === 'Left') {
        setCurrent(pre => pre <= 0 ? 0 : pre - 1)
      }
    }),
  })

  function processImg() {
    const elList: ReactNode[] = Array(len)
    let curImg: ReactNode;
    let img: ReactNode;
    for (let i = 0; i < len; i++) {
      // 当前播放图片索引值
      img = <img data-order={i}
                 style={{transform: `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`}}
                 src={'https://unsplash.it/475/20'} alt=""/>
      elList[i] = img

      if (i < current) {
        // 当前播放图片索引值
        img = <img data-order={i}
                   style={{transform: `translateX(${-150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`}}
                   src={'https://unsplash.it/475/20'} alt=""/>
        elList[i] = img
      }
    }

    curImg =
      <img data-order={current} style={{transform: `translateZ(300px)`}} src={'https://unsplash.it/475/20'} alt=""/>
    elList[current] = curImg
    console.log('current: >>', current)
    return elList.filter(v => v)
  }

  return <div {...handler}>
    <Wrapper>
      {/*{processImg().map((imgEl: any, index: number) => imgEl)}*/}
      {Array(len).fill('').map((_: any, i: number) => {
        console.log('i: >>', i, current)
        const diffVal = i - current;
        if (i !== current) {
          // 当前播放图片索引值
          return <img key={i} data-order={i}
                      width={100}
                      style={{transform: `translateX(${150 * diffVal}px) translateZ(${300 - Math.abs(diffVal) * 100}px) rotateY(${diffVal < 0 ? '' : '-'}30deg)`}}
                      src={`https://unsplash.it/47${i}/20`} alt=""/>
        } else {
          return <img width={100} key={i} data-order={current} style={{transform: `translateZ(300px)`}}
                      src={`https://unsplash.it/47${i}/20`} alt=""/>
        }
      })}
      {/*{Array(len).fill('').map((_: any, i: number) => {*/}
      {/*  console.log('i: >>', i, current)*/}
      {/*  if (i < current) {*/}
      {/*    // 当前播放图片索引值*/}
      {/*    return <img key={i} data-order={i}*/}
      {/*                width={100}*/}
      {/*                style={{transform: `translateX(${ -150 * ( i + 1)}px) translateZ(${200 -  i * 100}px) rotateY(30deg)`}}*/}
      {/*                src={`https://unsplash.it/47${i}/20`} alt=""/>*/}
      {/*  } else if (i > current) {*/}
      {/*    // 当前播放图片索引值*/}
      {/*    return <img key={i} data-order={i}*/}
      {/*                width={100}*/}
      {/*                style={{transform: `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`}}*/}
      {/*                src={`https://unsplash.it/47${i}/20`} alt=""/>*/}
      {/*  } else {*/}
      {/*    return <img width={100} key={i} data-order={current} style={{transform: `translateZ(300px)`}}*/}
      {/*                src={`https://unsplash.it/47${i}/20`} alt=""/>*/}
      {/*  }*/}
      {/*})}*/}
    </Wrapper>

  </div>
}