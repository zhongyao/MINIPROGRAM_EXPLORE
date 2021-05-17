// index.js
// 获取应用实例
console.log('pages/index/index')
const app = getApp()

Page({
  //data参数是页面第一次渲染时从逻辑层传递到渲染层的数据。
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log("index--->onLoad")
    if (wx.getUserProfile) {
      //setData其一般调用格式是 setData(data, callback)，其中data是由多个key: value构成的Object对象。
      this.setData({
        canIUseGetUserProfile: true
      }, function(){
        //在这次setData对界面渲染完毕后触发
      })
    }
  },

  onUnload() {
    console.log("index--->onUnload")
  },

  onShow() {
    console.log("index--->onShow")
  },

  onHide() {
    console.log("index--->onHide")
  },
  
  onPageScroll(options) {
    console.log(JSON.stringify(options))
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
