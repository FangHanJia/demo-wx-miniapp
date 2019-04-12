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
      wx.request({
        method:'GET',
        url: url,
        data: _params || {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // 成功的回调函数
          resolve(res);
        },
        fail(error){
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
      wx.request({
        method: 'POST',
        url: url,
        data: _params || {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // 成功的回调函数
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      })
    })
  }
}