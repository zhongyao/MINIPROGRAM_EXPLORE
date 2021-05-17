// 小程序中可以将任何一个JavaScript 文件作为一个模块，通过module.exports 或者 exports 对外暴露接口
module.exports = function(value) {
  return value * 2;
}