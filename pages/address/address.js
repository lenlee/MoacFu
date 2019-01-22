//address.js
Page({
    data: {
        privatekey: '私钥内容私钥内容私钥内容私钥内容123',   //私钥内容
    },

    onLoad: function () {

    },

    exportpwd: function () {
        let that = this;
        wx.showModal({
            title: '您的私钥',
            content: that.data.privatekey,
            confirmText: '复制私钥',
            cancelText: '关闭',
            success(res) {
                if (res.confirm) {
                    wx.setClipboardData({
                        data: that.data.privatekey,
                        success(res) {
                            wx.getClipboardData({
                                success(res) {  }
                            })
                        }
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

})