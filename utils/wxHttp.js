// http请求配置文件
// 测试服
var testUrl = '';
// 正式服
var officiaUrl = '';
// 请求地址
var baseUrl = '';
// 站点地址
var originUrl = '';

// switch (originUrl) {
//   case '':
//     baseUrl = testUrl;
//     break;
//   case '':
//     baseUrl = testUrl;
//     break;
//   default:
//     baseUrl = officiaUrl;
//     break;
// }
// get方式请求
export default{
  // get方式请求
  get(_url,_params){
    // url过滤
    var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;

    return new Promise((resolve,reject)=>{
      // 显示loading
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        method:'GET',
        url: url,
        data: _params || {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // 隐藏loading
          wx.hideLoading();
          if (res.data.code == 400) {
            wx.showToast({
              title: res.data.msg || '用户未登录',
              icon: 'none'
            });
          } else if (res.data.code != 200) {
            wx.showToast({
              title: res.data.msg || '操作失败',
              icon: 'none'
            });
          }
          // 成功的回调函数
          resolve(res);
        },
        fail(error){
          // 隐藏loading
          wx.hideLoading();
          reject(error);
        }
      })
    })
  },
  // post方式请求
  post(_url, _params) {
    // url过滤
    var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;

    return new Promise((resolve, reject) => {
      // 显示loading
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        method: 'POST',
        url: url,
        data: _params || {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // 隐藏loading
          wx.hideLoading();
          if (res.data.code == 400) {
            wx.showToast({
              title: res.data.msg || '用户未登录',
              icon: 'none'
            });
          } else if (res.data.code != 200) {
            wx.showToast({
              title: res.data.msg || '操作失败',
              icon: 'none'
            });
          }
          // 成功的回调函数
          resolve(res);
        },
        fail(error) {
          // 隐藏loading
          wx.hideLoading();
          reject(error);
        }
      })
    })
  }
}