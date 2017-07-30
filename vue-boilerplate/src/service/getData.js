import axios from 'axios'
import '../config/http'
// import md5 from 'js-md5'
import {baseUrl,imgSrc} from '../config/env'
function changePara(obj) {
  // let newObj = {};
  // if(Object.keys(obj).length){
  //   newObj = JSON.parse(JSON.stringify(obj));
  // }else{
  //   newObj = {}
  // }

  // newObj.TS = new Date().getTime();
  // let arr = [];
  // let str = '';
  // for(var key in newObj){
  //   arr.push(key);
  // }
  // if(arr.length){
  //   arr.sort().forEach( function(element, index) {
  //     str += element+"="+newObj[element]+'&'
  //   });
  // }
  // let newSign = md5(str + '')
  // newObj.Sign = newSign;
  return newObj
}

// 获得用户信息
export const getUser = (token) => axios.post(baseUrl+'app/GetUserInfo', changePara({Token:token}))
