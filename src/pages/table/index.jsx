/* eslint-disable react-hooks/rules-of-hooks */
import React , { useState  } from 'react'
import { View ,Image } from '@tarojs/components'
import { AtPagination } from 'taro-ui'

import "taro-ui/dist/style/components/pagination.scss"
import "taro-ui/dist/style/components/button.scss"
import "taro-ui/dist/style/components/icon.scss"

import useTableRequest from '../../hooks/useTableRequest'
import { Icons ,formateQuery } from './common'
import './index.less'

function getList(payload){
  const query = formateQuery(payload)
  return fetch('http://127.0.0.1:7001/page/tag/list?'+ query ).then(res => res.json())
}
export default function index(){
    /* 控制表格查询条件 */
    const [ query , setQuery ] = useState({})
    const [tableData, handerChange] = useTableRequest(query,getList)
    const { page ,pageSize,totalCount ,list } = tableData
    return <View className='index' >
        <View className='table' >
            <View className='table_head' >
                <View className='col' >技术名称</View>
                <View className='col' >icon</View>
                <View className='col' >创建时间</View>
            </View>
            <View className='table_body' >
               {
                   list.map(item=><View className='table_row' key={item.id}  >
                        <View className='col' >{ item.name }</View>
                        <View className='col' > <Image className='col col_image'  src={Icons[item.icon].default} /></View>
                        <View className='col' >{ item.createdAt.slice(0,10) }</View>
                   </View>)
               }
            </View>
        </View>
        <AtPagination 
          total={Number(totalCount)} 
          icon
          pageSize={Number(pageSize)}
          onPageChange={(mes)=>handerChange({ page:mes.current })}
          current={Number(page)}
        ></AtPagination>
    </View>
}