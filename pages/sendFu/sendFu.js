const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentData: 0,
        specialMoney: '',   //拼手气红包金额
        specialNumber: '',  //拼手气红包数量
        specialText: '',    //拼手气红包祝福语
        normalMoney: '',    //普通红包金额
        normalNumber: '',   //普通红包数量
        normalText: '',     //普通红包祝福语
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    //获取当前滑块的index
    bindchange: function (e) {
      const that = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
      const that = this;

      if (that.data.currentData === e.target.dataset.current) {
        return false;
      } else {

        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },

    //绑定拼手气红包金额
    bindSpeMoney: function (e) {
        let that = this;
        that.setData({
            specialMoney: e.detail.value
        })
    },

    //绑定拼手气红包数量
    bindSpeNumber: function (e) {
        let that = this;
        that.setData({
            specialNumber: e.detail.value
        })
    },

    //绑定拼手气红包祝福语
    bindSpaText: function (e) {
        let that = this;
        that.setData({
            specialText: e.detail.value
        })
    },

    //绑定普通红包金额
    bindNorMoney: function (e) {
        let that = this;
        that.setData({
            normalMoney: e.detail.value
        })
    },

    //绑定普通红包数量
    bindNorNumber: function (e) {
        let that = this;
        that.setData({
            normalNumber: e.detail.value
        })
    },

    //绑定普通红包祝福语
    bindNorText: function (e) {
        let that = this;
        that.setData({
            normalText: e.detail.value
        })
    },

    //拼手气红包点击发送
    sendspecial: function () {
      let that = this;
      if( that.data.specialMoney == '' || that.data.specialMoney == null){
          app.utils.showToast('请输入红包金额')
          return;
      }
      if( that.data.specialNumber == '' || that.data.specialNumber == null){
          app.utils.showToast('请输入红包数量')
          return;
      }
      if( that.data.specialText == '' || that.data.specialText == null){
          app.utils.showToast('请输入红包祝福语')
          return;
      }else{
          wx.showToast({
              title: '发送成功',
              icon: 'success',
              duration: 2000
          });
      }

  },

    //普通红包点击发送
    sendnormal: function () {
        let that = this;
        if( that.data.normalMoney == '' || that.data.normalMoney == null){
            app.utils.showToast('请输入红包金额')
            return;
        }
        if( that.data.normalNumber == '' || that.data.normalNumber == null){
            app.utils.showToast('请输入红包数量')
            return;
        }
        if( that.data.normalText == '' || that.data.normalText == null){
            app.utils.showToast('请输入红包祝福语')
            return;
        }else{
            wx.showToast({
                title: '发送成功',
                icon: 'success',
                duration: 2000
            });
        }

    }
})