// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: ["../../img/library-one.jpg", "../../img/library-two.jpg", "../../img/library-three.jpg","../../img/library.jpg"],
    state:'choose',
    xindex: 0,
    tab:0,
    item:0,
  },
  changeTab:function(e){
    this.setData(
      {
        tab:e.detail.current,
      }
    )
  },
  suo: function (e) {
    wx.navigateTo({
     url: '../search/search',
    })
    },
  booksTap(){
      wx.navigateTo({
        url: '../bookDetailt/bookDetailt',
       })
  },
  book:function(e){
    this.setData({
      state:'choose',
      item:e.target.dataset.item,
      tab:e.target.dataset.item,
    }),
      console.log(e.target.dataset.item)
  },
  my :function(e){//点击主页icon变换
    this.setData({
      state:'no',
      item:e.target.dataset.item,
      tab:e.target.dataset.item,
    }),
    console.log(e.target.dataset.item)
  },

      //banner切换时候替换角标
  onChange: function (e) {
    this.setData({
      xindex: e.detail.current
    });
  },
  //我要找书
  tapLandBook(){
    wx.navigateTo({
      url: '../otherpages/tapLandBook/index',
     })
  },
  tapLandRead(){
     wx.navigateTo({
      url: '../otherpages/tapLandRead/tapLandRead',
     })
  },
  tapMore(){
    wx.navigateTo({
      url: '../otherpages/tapMore/tapMore',
    })
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