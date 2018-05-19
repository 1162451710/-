Page({

  /**
   * 页面的初始数据
   */
  data: {
    newid : '',
    newcontent : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  Submit:function(e){
   console.log(e.detail.value.newcontent)
   this.setData({
     day: wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {}
   })
  //  var day = wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {};
   this.data.day.post[this.data.newid].content = e.detail.value.newcontent;
  //  wx.setStorageSync("day", day);
   this.setData({
     day: this.data.day
   })
    wx.setStorageSync('day', JSON.stringify(this.data.day))
  },
  onLoad: function (options) {
     let id=options.id;
     this.data.newid=id;
     console.log(this.data.newid)
     console.log(id);
     var day=wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {};
    var detail=day.post[id];
    console.log(detail.content);
   
        //关于动态改变与读取数组的两种方法

      // var detail=day.post[id];
      // var detail1=[detail];
      // var detail2=detail;
      // console.log(detail1+"   "+detail2);


    // var detail;
    // day.post.map(
    //   (i,j) => {j==id && (detail = i.content)
    //   }
    // )
   
    
    this.setData({
      detail : detail
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