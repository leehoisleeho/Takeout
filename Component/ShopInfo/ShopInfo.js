// Component/ShopInfo/ShopInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
    isdisabled:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(){
      this.setData({
        show:!this.data.show
      })
    },
    toShoppingCart(){
      wx.switchTab({
        url: '/pages/shoppingCart/shoppingCart',
      })
    }
  }
})
