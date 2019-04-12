var dtime = '_deadtime';
/**
   * 设置缓存数据
   * @k 缓存数据的参数名称
   * @v 需要存储的数据
   * @t 设置的过期时间，单位秒
   */
function put(k, v, t) {
  wx.setStorageSync(k, v)
  var seconds = parseInt(t);
  if (seconds > 0) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000 + seconds;
    wx.setStorageSync(k + dtime, timestamp + "")
  } else {
    wx.removeStorageSync(k + dtime)
  }
}
//获取缓存数据
function get(k, def) {
  var deadtime = parseInt(wx.getStorageSync(k + dtime))
  if (deadtime) {
    if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
      if (def) { return def; } else { return; }
    }
  }
  var res = wx.getStorageSync(k);
  if (res) {
    return res;
  } else {
    return def;
  }
}
// 删除单个缓存目标
function remove(k) {
  wx.removeStorageSync(k);
  wx.removeStorageSync(k + dtime);
}
//一键删除所有缓存
function clear() {
  wx.clearStorageSync();
}

module.exports = {
  put: put,
  get: get,
  remove: remove,
  clear: clear,
}