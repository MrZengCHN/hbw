import config from './config'
export default function(url,data,method="GET"){
  let token = wx.getStorageSync('token')
  if(token){
    token = JSON.parse(token)
  }else{
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      
      url: config.host + url,
      data,
      method,
      success:function(res){
        resolve(res.data)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}