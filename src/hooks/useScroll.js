/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useMemo, useEffect ,useRef } from 'react'


/* 控制滚动条滚动*/
export default function useScroll() {
    const dom = useRef(null)
    const cachePostionInfo = useRef({})
    const [scrollOptions, setScrollOptions] = useState({
        top: 0,
        suctionTop: false,
        opacity: 1
    })
    const handerScroll = useMemo(() => {
        return function () {  
            const scrollY = window.scrollY
            /* 控制透明度 */
            const computerOpacty = 1 - scrollY / 160
            /* 控制吸顶效果 */
            const { offsetHeight ,radio } = cachePostionInfo.current
            const offsetTop = offsetHeight - scrollY - offsetHeight / 500 * 84
            const top = 0 - scrollY / 5
            setScrollOptions({
                opacity: computerOpacty <= 0 ? 0 : computerOpacty,
                top,
                suctionTop: offsetTop < radio
            }) 
        }
    }, [])
    useEffect(()=>{ 
        const box= (cachePostionInfo.current)
        const offsetHeight = box.offsetHeight
        const radio = box.offsetHeight / 500 * 20
        cachePostionInfo.current = {
            offsetHeight,
            radio
        }
        document.addEventListener('scroll', handerScroll)
        return function () {
             document.removeEventListener('scroll', handerScroll)
        }
    },[handerScroll])
    return [scrollOptions,dom]
}