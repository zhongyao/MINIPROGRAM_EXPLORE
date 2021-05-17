// pages/js/index.js
console.log('pages/js/index')
var multiplyBy2 = require('./moduleA');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  navigateBackPage: function() {
    //退出当前页面栈的最顶上页面
    wx.navigateBack()
  },

  redirectToPage: function() {
    //替换当前页面为...
    wx.redirectTo({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("js--->onLoad")
    var result = multiplyBy2(4);
    console.log("result:" + result)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("js--->onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("js--->onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("js--->onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("js--->onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/index/index'
    }
  }
})