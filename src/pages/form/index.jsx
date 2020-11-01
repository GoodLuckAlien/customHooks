import React ,{ useState }from 'react'
import { View, Picker } from '@tarojs/components'
import { AtInput, AtButton, AtRadio, AtList, AtListItem } from 'taro-ui'

import "taro-ui/dist/style/components/input.scss"
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/button.scss"
import "taro-ui/dist/style/components/radio.scss"
import "taro-ui/dist/style/components/list.scss";

import useFormChange from '../../hooks/useFormChange'
import './index.less'

const selector = ['嘿嘿', '哈哈', '嘻嘻']
function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData, reset] = useFormChange()
    const {
        name,
        options,
        select
    } = formData
    return <View className='formbox' >
        <View className='des' >文本框</View>
        <AtInput
          name='value1'
          title='名称'
          type='text'
          placeholder='请输入名称'
          value={name}
          onChange={(value) => setFormData('name', value)}
        />
        <View className='des' >单选</View>
        <AtRadio
          options={[
                { label: '单选项一', value: 'option1' },
                { label: '单选项二', value: 'option2' },
            ]}
          value={options}
          onClick={(value) => setFormData('options', value)}
        />
        <View className='des' >下拉框</View>
        <Picker mode='selector' range={selector} onChange={(e) => setFormData('select',selector[e.detail.value])} >
            <AtList>
                <AtListItem
                  title='当前选择'
                  extraText={select}
                />
            </AtList>
        </Picker>
        <View className='btns' >
            <AtButton type='primary' onClick={() => console.log(formData)} >提交</AtButton>
            <AtButton className='reset' onClick={reset} >重置</AtButton>
        </View>
    </View>
}

export default index