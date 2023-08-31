// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    visible:true,
    content:'一条重要的通知',
    marquee2: {
      speed: 60,
      loop: -1,
      delay: 0,
    },
  },
  toProductDetails(){
    wx.navigateTo({
      url: '/pages/productDetails/productDetails',
    })
  }
})
