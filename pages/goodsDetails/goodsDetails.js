// pages/goodsDetails/goodsDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    console.log(_options.itemid);
    this.setData({
      options:_options.itemid
    });
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

  },

  /**
   * 支付测试
   */
  requestPayment: function () {
    const self = this;
    self.setData({
      loading: true
    });

    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: 'https://14592619.qcloud.la/payment',
          data: {
            openid
          },
          method: 'POST',
          success(res) {
            self.setData({
              loading: false
            })
            console.log( res)
            var payargs = res.data.payargs
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })
  }
})