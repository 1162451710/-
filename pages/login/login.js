Page({

  /**
   * 页面的初始数据
   */
  data: {
    newpassword : "",
  },
  formSubmit: function (e) {
    let password = wx.getStorageSync('password') 
    console.log(password);
    if(this.data.newpassword == password){
      console.log("welcome");
      wx.switchTab({
        url: '../task/task',
      })
    }
  },
  inputpassword:function(e){
      this.setData({  
       newpassword : e.detail.value
      })
  },
  config:function(e){
    
    console.log(this.data.newpassword);
    // wx.getStorageInfo({
    //   key:"password",
    //   fail: function(res) {
       
    //   },
    //   success:function(res){
       
    //   }
    // })
    if (wx.getStorageSync("password")=="asdfghjkl;oiuytrexdfgh"){
      wx.setStorageSync("password", this.data.newpassword);
    }else{
      wx.showToast({
        title: '已注册请登录',
      })
    }
    
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("password", "asdfghjkl;oiuytrexdfgh")
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