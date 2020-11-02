import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"

import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";

import './index.less'

const menuList = [
  {
    note: 'useScroll',
    title: '控制滚动条-吸顶效果，渐变效果',
    path: '/pages/scroll/index'
  },
  {
    note:'useFormQueryChange',
    title:'控制表单',
    path:'/pages/form/index'
  },
  {
    note:'useTableRequest',
    title:'控制表格/列表',
    path:'/pages/table/index'
  },
  {
    note:'useDragDrop',
    title:'拖拽效果(移动端)',
    path:'/pages/drop/index'
  },
  {
    note:'useImageLoading',
    title:'图片加载/加载失败',
    path:'/pages/image/index'
  }
]

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  routerGo = (url) => Taro.navigateTo({  url })

  render() {
    return (
      <View className='index'>
        <View className='demo' >demo展示</View>
        <AtList>
          {
            menuList.map((item,index) => (
            <AtListItem
              arrow='right'
              key={index}
              note={item.note}
              title={item.title}
              onClick={() => this.routerGo(item.path)}
            />))
          }
        </AtList>
      </View>
    )
  }
}
