import  React,{ Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './app.less'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
  return <View>
        {this.props.children}
        <View  className='back' onClick={()=> Taro.navigateTo({ url:'/pages/index/index' })} >返回</View>
      </View>
  }
}

export default App
