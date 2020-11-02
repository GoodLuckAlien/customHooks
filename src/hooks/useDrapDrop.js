/* eslint-disable react-hooks/exhaustive-deps */
import {
  useRef,
  useState,
  useMemo,
  useLayoutEffect
} from 'react'

/* 移动端 -> 拖拽自定义效果(不使用定位) */
function useDrapDrop() {
  /* 保存上次移动位置 */  
  const lastOffset = useRef({
      x:0, /* 当前x 值 */
      y:0, /* 当前y 值 */
      X:0, /* 上一次保存X值 */
      Y:0, /* 上一次保存Y值 */
  })  
  /* 获取当前的元素实例 */
  const currentDom = useRef(null)
  /* 改变位置 */
  const [, foceUpdate] = useState({})
  /* 监听开始/移动事件 */
  const [ ontouchstart ,ontouchmove ,ontouchend ] = useMemo(()=>{
      /* 保存left right信息 */
      const currentOffset = {} 
      /* 开始滑动 */
      const touchstart = function (e) {   
        const targetTouche = e.targetTouches[0]
        currentOffset.X = targetTouche.clientX
        currentOffset.Y = targetTouche.clientY
      }
      /* 滑动中 */
      const touchmove = function (e){
        const targetT = e.targetTouches[0]
        let x =lastOffset.current.X  + targetT.clientX - currentOffset.X
        let y =lastOffset.current.Y  + targetT.clientY - currentOffset.Y 	
        lastOffset.current.x = x
        lastOffset.current.y = y
        foceUpdate({
           x,y
        })
      }
      /* 监听滑动停止事件 */
      const touchend =  () => {
        lastOffset.current.X = lastOffset.current.x
        lastOffset.current.Y = lastOffset.current.y
      }
      return [ touchstart , touchmove ,touchend]
  },[])
  useLayoutEffect(()=>{
    const dom = currentDom.current
    dom.ontouchstart = ontouchstart
    dom.ontouchmove = ontouchmove
    dom.ontouchend = ontouchend
  },[])
  return [ { x:lastOffset.current.x,y:lastOffset.current.y } , currentDom]
}

export default useDrapDrop
