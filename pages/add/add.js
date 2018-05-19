var util = require('../../utils/util.js')

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

    let comment = util.getDefaultComment();
    let _day = wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {}
  

    this.setData({
      'day.comment': comment,
      'day.post': _day.post || [],
    
    })

   
  },

  selectHandle(e) {
    let state = e.currentTarget.id
    this.setData({
      isSelected: state
    })
  },

  formSubmit(e) {
    'use strict';
    let state = this.data.isSelected
    let content = e.detail.value.content
    var time = util.formatTime(new Date())

    console.log('form发生了submit事件，携带数据为：', content);
    console.log(time);

    this.data.day.post.push({
      state: state,
      content: content,
      complete: false,
      input_time:time,
    })

    this.setData({
      'day.post': this.data.day.post
    })
  
    wx.setStorageSync('day', JSON.stringify(this.data.day))
    
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      
      duration: 3000,
      
      success: function(res) {
        console.log('调用成功')
      },
    })

    wx.navigateBack({
      delta  : 1
      
    })
    console.log("gg");
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