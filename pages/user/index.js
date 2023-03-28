// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{},
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  toLogin(){
    if(wx.getStorageSync('token')){
      wx.navigateTo({
        url: '/pages/user/userInfo',
      })
    }else{
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
  },
  onLoad(options) {
    let token = wx.getStorageSync('token')
    if(token){
      this.setData({
        userInfo:JSON.parse(wx.getStorageSync('userInfo'))
      })
    }else{
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})