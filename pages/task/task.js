import util from '../../utils/util.js'

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
    var time = util.formatTime(new Date());
    wx.setStorageSync("TIME", time);
    console.log(time);
    this.setData({
      day: wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {},
    })

  },

  toAdd:function(event){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  
  checkHandle(e) {
    let index = e.currentTarget.id
    console.log(index)
    // if (this.data.day.post[index].complete==false){
    //   this.data.day.post[index].complete==true
    //   // this.data.day.post.splice(index,1);
    // }

    // this.data.day.post.map(
    //   (i, j) => 
    //   {j == index && (i.complete = true)
    //   return i}
    // )
    this.data.day.post[index].complete = !this.data.day.post[index].complete

   
    this.setData({
      day: this.data.day
    })
    
    wx.setStorageSync('day', JSON.stringify(this.data.day))
    // wx.clearStorageSync() 


    
    

  },

  


  onShow(){
    var newdate = util.getToday();
    
    this.setData({
      day: wx.getStorageSync('day') ? JSON.parse(wx.getStorageSync('day')) : {},
      time : newdate,
    })

    var index = 0;
    var tag = 0;
    var comment;
    for (var len = this.data.day.post.length; index < len; index++) {
      if (this.data.day.post[index].complete == false) {
        tag++;
      }
    }
    console.log(tag);

    if (tag == 0) {
       comment = util.setGoodComment();
    } else if (tag >= 3) {
      comment = util.setBadComment();
    } else{
      comment = util.getDefaultComment();
    };

    this.setData({
      'day.comment': comment,
    });//为什么数据没有同步更新？



  },

 
//设置下拉刷新
  onPullDownRefresh: function () {
    

  },
  //删除的事件
  delete:function(event){
    
    var index=0;
    for(var len=this.data.day.post.length; index<len;index++){

      // var item='this.data.day.post['+index+'].complete'
      var newindex;
      if (this.data.day.post[index].complete != false) {
        console.log(this.data.day);
        console.log("will delete"+index);
        console.log("complete状态为" + this.data.day.post[index].complete);
         this.data.day.post.splice(index, 1);
         index=index-1;
         
      }
    }
    this.setData({
      day: this.data.day
    })
    wx.setStorageSync('day', JSON.stringify(this.data.day))
  },

  detail:function(e){

    var postid = e.currentTarget.id
    wx.navigateTo({
      url: '../detail/detail?id='+postid,
    })
  }


  

})