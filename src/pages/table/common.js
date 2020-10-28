/* eslint-disable import/no-commonjs */
const react  = require('../../assets/icon/react.png')
const webpack = require('../../assets/icon/webpack.png')
const qianduan = require('../../assets/icon/qianduankaifa.png')
const xiaochengxu = require('../../assets/icon/xiaochengxu.png')
const js = require('../../assets/icon/js.png')
const java = require('../../assets/icon/java.png')
const shujuku = require('../../assets/icon/shujuku.png')
const vue = require('../../assets/icon/Vue.png')
const ksh = require('../../assets/icon/ksh.png')


export const Icons = {
    vue,
    react,
    webpack,
    qianduan,
    xiaochengxu,
    js,
    java,
    shujuku,
    ksh
}

export  const formateQuery = (param)=>{ 
   let p = ''
   const keys = Object.keys(param)
   keys.forEach((item,i)=>{
       if(keys.length-1 === i){
          p += item +'='+ param[item] 
       }else{
          p += item +'='+ param[item] + '&'
       }
   })
   return p
}