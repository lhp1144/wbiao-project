<template>
    <div class="setting">
        <header class="W_title">
            <div class="left_icon" @click="toUser"></div>
            <div class="shezhi">设置</div>
        </header>
        <div class="set_pwd">设置密码</div>
        <div class="about">关于万表</div>
        <div class="esc_login" @click="esc_login">退出登录</div>
    </div>
</template>
<script>
export default {
    name: 'Setting',
    methods: {
        toUser() {
            this.$router.push({path: '/User'});
        },
        getCookie(name) {
            let arrs = document.cookie.split('; ');
            for (let arr of arrs) {
                if (name === arr.split('=')[0]) {
                    return true
                }
                return false;
            }
        },
        // 删除cookie，退出登录
        esc_login() {
            console.log(1);
            var exp = new Date();
			exp.setTime (exp.getTime() - 1);
			var cval = this.getCookie('token');
            document.cookie = 'token=' + cval + "; expires="+ exp.toGMTString();
            alert('退出成功');
            this.$router.push({path: '/User'});
        }
    },
}
</script>
<style scoped>
    .setting{
        width: 100%;
        height: 100%;
        background: #f1f1f1;
    }
    .W_title{
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.02rem solid #ddd;
        background: #fff;
    }
    .left_icon{
        width: .45rem;
        height: .45rem;
        background: url(/img/icon.f3f32698.png) no-repeat -127px -621px;
        margin-left: .2rem;
        z-index: 999
    }
    .shezhi{
        font-size: .32rem;
        color: #444;
        position: absolute;
        top: .24rem;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
    .set_pwd{
        margin-bottom: .18rem;
        background: #fff;
        height: .88rem;
        line-height: .88rem;
        font-size: .28rem;
        color: #333;
        padding-left: .24rem;
    }
    .about{
        background: #fff;
        height: .88rem;
        line-height: .88rem;
        font-size: .28rem;
        color: #333;
        padding-left: .24rem;
    }
    .esc_login{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #bbb;
        color: #fff;
        font-size: .32rem;
        text-align: center;
        position: fixed;
        bottom: 1rem;
    }
</style>
