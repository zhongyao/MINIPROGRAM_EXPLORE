// pages/event/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleTap1: function(event) {
    console.log("handleTap1")
  },

  handleTap2: function(event) {
    console.log("handleTap2")
  },

  handleTap3: function(event) {
    console.log("handleTap3")
  },

  handleTap4: function(event) {
    console.log("handleTap4")
  },

  // 需要注意target与currentTarget的区别，currentTarget为当前事件所绑定的组件，而target则是触发事件的源头组件。
  handletap: function(event) {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.type)
    console.log(event.timeStamp)
    console.log(event.touches)
    console.log(event.changedTouches)
  },

  tapName: function(event) {
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})