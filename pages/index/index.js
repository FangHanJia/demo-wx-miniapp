//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    // 商品数据
    goodsData:[
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName:'大师一号',
        goodsImg:'../../assets/image/index/f_goods_img.png',
        goodsText:'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice:'99.00',
        commissionPrice:'0.99',itemId:0
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:1
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:2
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:3
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:4
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:5
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:6
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:7
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:8
      },
      {
        userImg: '../../assets/image/index/f_header_img.png',
        nickName: '大师一号',
        goodsImg: '../../assets/image/index/f_goods_img.png',
        goodsText: 'Making arocket【工装靴】17年秋冬新品街 头手工缝制马丁靴短靴女',
        collagePrice: '99.00',
        commissionPrice: '0.99',
        itemId:9
      },
    ],
    // 是否显示加载
    isHideLoadMore:true,
    // tab切换
    tabNumber:0
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showLoading({
      title: '加载中',
    })
    app.wxHttp.post('http://taokeapp-test.mastersheng.com/api/interest/getIncomeData', {}).then(res=>{
      wx.hideLoading();
    }).catch(error=>{
      wx.hideLoading()
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var self = this;
    console.log(55)
    self.setData({
      isHideLoadMore:false
    });
    setTimeout(function(){
      self.setData({
        isHideLoadMore: true
      });
    },1000);
  },
  /**
   * tab切换
   */
  tabSwitch : function(e){
    var item = e.target.dataset.item;
    this.setData({
      tabNumber:item
    });
  },
  /**
   * 跳转商品详情页
   */
  toGoodsDetails : function(e){
    wx.navigateTo({
      url: "../goodsDetails/goodsDetails?itemid=" + e.currentTarget.dataset.itemid
    })
    console.log(e.currentTarget.dataset.itemid);
  }
})
