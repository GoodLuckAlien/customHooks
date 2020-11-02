/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { View } from '@tarojs/components'

import useDrapDrop from '../../hooks/useDrapDrop'

import './index.less'

export default function index (){
   const [ style1 , dropRef ]= useDrapDrop()
   const [style2,dropRef2] = useDrapDrop()
   return <View className='index'>
      <View 
        className='drop1' 
        ref={dropRef}
        style={{transform:`translate(${style1.x}px, ${style1.y}px)`}} 
      >drop1</View>
      <View 
        className='drop2'   
        ref={dropRef2}
        style={{transform:`translate(${style2.x}px, ${style2.y}px)`}} 
      >drop2</View>
      <View 
        className='drop3'
      >drop3</View>
   </View>
}