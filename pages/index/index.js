//index.js
//获取应用实例
const app = getApp()
var start_time;
var end_time;

Page({
  data: {
    result: "拇指放在圆圈上\nReady？Go！"
  },
  //事件处理函数
  push_start: function (event) {
    start_time = new Date().getTime();
  },
  push_end: function (event) {
    end_time = new Date().getTime();
    var diff_time_in_secode = (end_time - start_time) / 1000.0;
    var diff_time = Math.abs(diff_time_in_secode - 1);
    var diff_ratio = new Number(diff_time * 100).toFixed(2);
    var wording;
    if (0 <= diff_time && 0.05 > diff_time) {
      wording = '太准时了，简直是天才！';
    } else if (0.05 <= diff_time && 0.1 > diff_time) {
      wording = '时间感不错，接近天才了！';
    } else if (0.01 <= diff_time && 0.3 > diff_time) {
      wording = '水平不错，不过可以再精确些！';
    } else if (0.3 <= diff_time && 0.5 > diff_time) {
      wording = '差强人意，继续努力吗！';
    } else if (0.5 <= diff_time && 1 > diff_time) {
      wording = 'You are lower！居然差这么多！';
    } else {
      wording = '你是认真的吗?重来！';
    }
    var diff_time_second = parseFloat(diff_time_in_secode);
    var wording_html = '你按出了' + diff_time_second + '秒，误差是' + diff_ratio + '%\n' + wording;
    //result值=显示文案内容
    this.setData({ result: wording_html });
  }
})
