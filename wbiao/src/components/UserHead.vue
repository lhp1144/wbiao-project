<template>
    <header>
        <div class="warp">
            <div class="shezhi" @click="setOResc"></div>
        </div>
        <div class="header">
            <div>
                <div class="h_warp">
                    <div class="login_head" v-if="isLogin"></div>
                    <div class="unlogin_head" v-else></div>
                        <div class="login_txt" v-if="isLogin" @click="existLogin">
                            <p class="p1" ref="userNum">{{showName}}</p>
                            <p class="p2">👑普卡会员</p>
                        </div>
                        <div class="login_txt" v-else @click="existLogin">
                            <p class="p1">登录/注册</p>
                            <p class="p2">登录享优惠</p>
                        </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="userInfo">
                <i class="user_icon"></i>
                <span>个人资料</span>
            </div>
            <div class="user_address" @click="loginORAddress">
                <i class="address_icon"></i>
                <span>收货地址</span>
            </div>
            <div class="user_shou">
                <i class="shou_icon"></i>
                <span>我的收藏</span>
            </div>
        </div>
        
    </header>
</template>
<script>
 // 获取cookie
    function existCookie(name) {
        let parts = document.cookie.split('; ');
        for (let part of parts) {
            if (name === part.split('=')[0]) {
                return true
            }
            return false;
        }
    }

export default {
    name: 'UserHead',
    data() {
        return {
            isLogin: existCookie('token'),
            msg: undefined
        }
    },
    computed: {
        showName() {
            return this.msg = JSON.parse(localStorage.getItem('username')) || JSON.parse(localStorage.getItem('user_phone'));
        }
    },
    methods: {
        // 依据是否存在token来进行跳转
        setOResc(){
            if (this.isLogin) {
                this.$router.push({path: '/Setting'});
            }else{
                this.$router.push({path: '/Login'});
            }
        },
        // 依据是否存在token来进行跳转
        loginORAddress(){
            if (this.isLogin) {
                this.$router.push({path: '/Address'});
            }else{
                this.$router.push({path: '/Login'});
            }
        },
        // 如果已经登录就不必跳转
        existLogin() {
            if (this.isLogin) {
                return null
            }else{
                this.$router.push({path: '/Login'});
            }
        }
    },
}


</script>

<style scoped>
    header{
        background: url(../../public/images/user/ia_900000002.png) no-repeat;
        width: 100%;
        height: 4.12rem;
    }
     .user .warp{
        width: 100%;
        height: .88rem;
    }
    .shezhi{
        width: .54rem;
        height: .6rem;
        background: url('../../public/images/user/icon.png') no-repeat -766px -71px;
        float: right;
        margin: .1rem .2rem 0 0;
    }
    .h_warp{
        display: flex;
        margin: 0 0 0 .4rem;
    }
    /* 未登录状态 */
    .unlogin_head{
        width: 1.28rem;
        height: 1.28rem;
        background: url('../../public/images/user/icon.png') no-repeat 0px -355px;
        margin-right: .24rem;
    }
    /* 已登录状态 */
    .login_head{
        width: 1.28rem;
        height: 1.28rem;
        background: url('../../public/images/user/icon.png') no-repeat -140px -355px;
        margin-right: .24rem;
    }
    .login_txt{
       color: rgb(255, 255, 255);
       margin-top: .3rem;
    }
    .p1{
        font-size: .32rem;
    }
    .p2{
        font-size: .24rem;
    }

    .nav{
        width: 100%;
        height: 1.04rem;
        background: rgba(0,0,0,.4);
        position: absolute;
        bottom: 0;
        color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
        text-align: center;
        font-size: .24rem;
    }
    .userInfo{
        width: 33%;
        border-right: .008rem solid rgb(255, 255, 255);
    }
    .user_address{

        width: 33%;
        border-right: .008rem solid rgb(255, 255, 255);
    }
    .user_shou{
        width: 33%;
    }
    .user_icon{
        display: block;
        width: .40rem;
        height: .40rem;
        margin-left: 1rem;
        background: url('../../public/images/user/icon.png') no-repeat -735px -780px;
    }
    .address_icon{
        display: block;
        width: .40rem;
        height: .40rem;
        margin-left: 1rem;
        background: url('../../public/images/user/icon.png') no-repeat -394px -730px;
    }
    .shou_icon{
        display: block;
        width: .40rem;
        height: .40rem;
        margin-left: 1.1rem;
        background: url('../../public/images/user/icon.png') no-repeat -84px -830px ;
    }

</style>
