//modifyPwd.js
import * as utils from '../../utils/util.js';

//获取应用实例
const app = getApp();

Page({
    data: {
        pwd: '',
        pwdtwo: ''
    },

    onLoad: function () {

    },

    //绑定修改密码
    bindpwd: function (e) {
        let that = this;
        that.setData({
            pwd: e.detail.value
        })
    },

    //绑定确认密码
    bindpwdtwo: function (e) {
        let that = this;
        that.setData({
            pwdtwo: e.detail.value
        })
    },

    //确认修改密码按钮
    savepwd: function () {
        let that = this;
        console.log(that.data.pwd.length)

        if( that.data.pwd == '' || that.data.pwd == null){
            app.utils.showToast('请输入红包密码')
            return;
        }
        if( that.data.pwdtwo == '' || that.data.pwdtwo == null){
            app.utils.showToast('请输入确认密码')
            return;
        }
        if( that.data.pwd.length < 6 || that.data.pwdtwo.length < 6){
            app.utils.showToast('密码长度必须为6位数字')
            return;
        }
        if( that.data.pwd != that.data.pwdtwo){
            app.utils.showToast('两次输入密码须一致')
            return;
        }
        else{
            wx.showToast({
                title: '设置成功',
                icon: 'success',
                duration: 2000
            });
        }
    }

})