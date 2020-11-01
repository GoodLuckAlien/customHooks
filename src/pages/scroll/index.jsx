import React from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'

import useScroll from '../../hooks/useScroll'

import './index.less'

export default function Index() { 
    const [scrollOptions,domRef] = useScroll()
    const { opacity, top, suctionTop } = scrollOptions
    return <View style={{ position: 'static', height: '2000px' }} >
        <View className='white' />
        <View ref={domRef} className='box' style={{ opacity, transform: `translateY(${top}px)` }} >
            <Swiper
              className='swiper'
            >
                <SwiperItem className='SwiperItem' >
                    <View className='imgae' />
                </SwiperItem>
            </Swiper>
        </View>
        <View className={suctionTop ? 'box_card suctionTop' : 'box_card'}>
            <View
              style={{
                    background: 'red',
                    boxShadow: '0px 15px 10px -16px #F02F0F'
                }}
              className='reultCard'
            >
            </View>
        </View>
    </View>
}