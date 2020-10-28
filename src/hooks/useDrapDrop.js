/* eslint-disable react-hooks/exhaustive-deps */
import {
  useRef,
  useState,
  useMemo,
  useEffect
} from 'react'

/* 移动端 -> 拖拽自定义效果(不使用定位) */
function useDrapDrop() {
  /* 保存上次移动位置 */  
  const lastOffset = useRef({
      X:0,
      Y:0
  })  
  /* 保存left right信息 */
  const currentOffset = useRef({})
  /* 获取当前的元素实例 */
  const currentDom = useRef(null)
  const [style, setStyle] = useState({})
  /* 监听开始/移动事件 */
  const [ ontouchstart ,ontouchmove ] = useMemo(()=>{
      const touchstart = function (e) {
        const targetTouche = e.targetTouches[0]
        currentOffset.current.X = targetTouche.clientX
        currentOffset.current.Y = targetTouche.clientY
      }
      const touchmove = function (e){
        const targetT = e.targetTouches[0]
        let x =lastOffset.current.X  + targetT.clientX - currentOffset.current.X
        let y =lastOffset.current.Y  + targetT.clientY - currentOffset.current.Y 	
        setStyle({
           x,y
        })
      }
      return [ touchstart , touchmove ]
  },[])
  /* 监听滑动停止事件 */
  const ontouchend = useMemo( () => () => {
        lastOffset.current.X = style.x
        lastOffset.current.Y = style.y
  },[style.x, style.y])
  useEffect(()=>{
     const dom = currentDom.current
     if(dom){
         dom.ontouchstart = ontouchstart
         dom.ontouchmove = ontouchmove
     }
  },[])
  useEffect(()=>{
    const dom = currentDom.current
    if(dom){
       dom.ontouchend = ontouchend
    }
  },[ontouchend])
  return [ style,currentDom ]
}

export default useDrapDrop
