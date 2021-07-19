// pages/https/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
        title: '网络请求'
      })    
      wx.request({
        url: 'https://www.tianqiapi.com/api/?version=v6',
        success: function(res) {
          //成功
          if(res.statusCode == 200) {
            //服务器回包内容
            console.log("--result--:" + JSON.stringify(res.data))
          }
        },
        fail: function(res) {
          //失败
          wx.showToast({
            title: '系统错误'
          })
        },
        complete: function(res) {
          //完成
          wx.hideLoading();
          console.log("--complete--:" + JSON.stringify(res.data));
        }
      })
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