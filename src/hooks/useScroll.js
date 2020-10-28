/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useMemo, useEffect } from 'react'


/* 控制滚动条滚动*/
export default function useScroll(cachePostionInfo,isListen) {
    const defaultOptions = {
        top: 0,
        suctionTop: false,
        opacity: 1
    }
    if(!isListen) return defaultOptions
    const [scrollOptions, setScrollOptions] = useState(defaultOptions)
    const handerScroll = useMemo(() => {
        return function () {  
            const scrollY = window.scrollY
            /* 控制透明度 */
            const computerOpacty = 1 - scrollY / 160
            /* 控制吸顶效果 */
            const box= (cachePostionInfo.current)
            const offsetHeight = box.offsetHeight
            const radio = box.offsetHeight / 500 * 20
            const offsetTop = offsetHeight - scrollY - offsetHeight / 500 * 84
            const top = 0 - scrollY / 5
            setScrollOptions({
                opacity: computerOpacty <= 0 ? 0 : computerOpacty,
                top,
                suctionTop: offsetTop < radio
            }) 
        }
    }, [cachePostionInfo])
    useEffect(()=>{ 
        document.addEventListener('scroll', handerScroll)
        return function () {
             document.removeEventListener('scroll', handerScroll)
        }
    },[handerScroll])
    return scrollOptions
}