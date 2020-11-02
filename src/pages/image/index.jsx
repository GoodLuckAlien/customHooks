import React , { useState , useRef } from 'react'
import { View , Image , Button } from '@tarojs/components'

import './index.less'

function index(){
    const number = useRef(0)
    const [  , forceUpdate ] = useState(0)
    const changeState = ()=>{
        number.current++
        forceUpdate(number.current)
        console.log(number.current) //打印值为1，组件更新，值改变
    }
   return <View>
       <Button onClick={changeState} >点击改变state</Button>
   </View>
}
export default index