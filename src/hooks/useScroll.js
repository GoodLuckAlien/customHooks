/* eslint-disable react-hooks/rules-of-hooks */
import {
  useState,
  useMemo,
  useEffect,
  useRef
} from 'react'


/* 控制滚动条滚动*/
export default function useScroll() {
  const dom = useRef(null)
  const [scrollOptions, setScrollOptions] = useState({
    top: 0,
    suctionTop: false,
    opacity: 1
  })

  useEffect(() => {
    const box = (dom.current)
    const offsetHeight = box.offsetHeight
    const radio = box.offsetHeight / 500 * 20
    const handerScroll = () => {
      const scrollY = window.scrollY
      /* 控制透明度 */
      const computerOpacty = 1 - scrollY / 160
      /* 控制吸顶效果 */
      const offsetTop = offsetHeight - scrollY - offsetHeight / 500 * 84
      const top = 0 - scrollY / 5
      setScrollOptions({
        opacity: computerOpacty <= 0 ? 0 : computerOpacty,
        top,
        suctionTop: offsetTop < radio
      })
    }
    document.addEventListener('scroll', handerScroll)
    return function () {
      document.removeEventListener('scroll', handerScroll)
    }
  }, [])
  return [scrollOptions, dom]
}
