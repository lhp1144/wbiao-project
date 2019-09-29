<template>
    <div class="login">
        <header class="W_title">
            <div class="left_icon" @click="back"></div>
            <div class="zhuce" @click="goToRegister">注册</div>
        </header>
        <div class="tab_nav">
            <!-- <p class="phone_login">手机登录</p>
            <p class="user_login">账号登录</p> -->
            <p :key="index" v-for="(tabLogin,index) in tabLogins" class="user_login" :class="{active: tabLogin.isActive}" @click="tabSwith(index)">
                {{ tabLogin.name }}
            </p>
        </div>
        <div class="content">
            <!-- 手机号登录 -->
            <div class="loginByPhone ">
                <div class="box">
                    <p class="phone"><input type="text" placeholder='手机号' ref="phoneNum"></p>
                    <!-- <p class="code">
                        <input maxlength="4" type="text" placeholder="图形验证码">
                        <canvas id="canvas" width="180" height="80" ref="canvas"></canvas>
                    </p> -->
                    <p class="note"> 
                        <input maxlength="6"  type="tel" placeholder="短信验证码" class="note_code" ref="code"> 
                         <a href="#" @click="getCode">获取验证码</a>
                    </p>
                </div>
                <button class="login" @click="loginByCode">登录</button>
            </div>
            <!-- 账号登录 -->
            <div class="loginByPhone hide">
                <div class="box">
                    <p class="phone">
                        <input type="text" placeholder="手机号/会员名/邮箱" ref="username">
                    </p>
                    <p class="code">
                        <input type="password" placeholder="请输入密码" ref="password">
                    </p>
                </div>
                <button class="login" @click="loginByName">登录</button>
                <a href="#" class="forget_pass ">忘记密码?</a>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
           tabLogins: [
               {name: '手机登录', isActive: true},
               {name: '账号登录', isActive: false},
           ]
        }
    },
    mounted() {
        this.$eventBus.$emit('showHideNav',true);
    },
    methods: {
        // 路由后退
        back() {
            this.$router.back();
        },
        // 跳转到注册
        goToRegister() {
            this.$router.push({path: '/Register'});
        },
        // 切换手机登录和账号登录
        tabSwith(index) {
            let logDiv = document.querySelectorAll('.loginByPhone');
            let len = logDiv.length;
            for (let index = 0; index < len; index++) {
                logDiv[index].style.display = 'none';
                this.tabLogins[index].isActive = false;
            }
            this.tabLogins[index].isActive = true;
            logDiv[index].style.display = 'block';
        },
        // 获取验证码
        getCode() {
            let regPhone = /^[1]([3-9])[0-9]{9}$/;
            let phone = this.$refs.phoneNum.value;
            if (regPhone.test(phone)) {
                axios.post('/user/sendCode', {
                    phone: phone
                }).then((result) =>{
                    console.log(result.data.code);
                    alert('发送成功');
                }).catch((err) =>{
                    console.log(err);
                });
            } else {
                alert('该手机号格式不正确');
            }
             
        },
        // 根据code登录
        loginByCode() {
            let regPhone = /^[1]([3-9])[0-9]{9}$/;
            let phone = this.$refs.phoneNum.value;
            let code = this.$refs.code.value;
            if (regPhone.test(phone)) {
                axios.post('/user/loginByCode',{
                    phone: phone,
                    code: code
                }).then((result) =>{
                    if(result.data === false) {
                        alert('用户不存在，请先注册');
                        this.$router.push({path: '/Register'});
                    }else{
                        if (result.data.ok === false) {
                            alert('验证码不正确');
                        }else{
                            console.log(result.data);
                            localStorage.setItem('user_phone', JSON.stringify(result.data.login_name));
                            this.$router.push({path: '/User'});
                            // 是code登录的就清除user登录的本地存储
                            localStorage.removeItem('username')
                        }
                        
                    }
                }).catch((err) =>{
                    console.log(err);
                })
            } else {
                 alert('该手机号格式不正确');
            }
        },
        // 根据用户名登录
        loginByName() {
            let user_name = this.$refs.username.value;
            let password = this.$refs.password.value;
            axios.post('/user/loginByName',{
                user_name: user_name,
                password: password
            }).then((result) =>{
                console.log(result.data);
                // 返回的用户名保存到本地存储中
                localStorage.setItem('username',JSON.stringify(result.data.user_name));
                if (result.data.ok === false) {
                    alert('用户名或密码错误');
                } else {
                    this.$router.push({path: '/User'});
                     // 是用户名登录的就清除user_phone的本地存储
                    localStorage.removeItem('user_phone')
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
    
<style scoped>
    
    .W_title{
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left_icon{
        width: .45rem;
        height: .45rem;
        background: url(/img/icon.f3f32698.png) no-repeat -127px -621px;
        margin-left: .2rem;
    }
    .zhuce{
        margin-right: .2rem;
        font-size: .30rem;
        color: #999;
    }
    .tab_nav{
        margin: 1.6rem 0 1rem;
    }
    .tab_nav p {
        overflow: hidden;
        display: inline-block;
        width: 50%;
        font-size: .48rem;
        color: #ccc;
        box-sizing: border-box;
    }
    .tab_nav .phone_login{
        text-align: right;
        padding-right: .6rem;
        letter-spacing: 0.04rem;
    }
    .active {
        color: #666 !important;
        font-weight: 700;
    }

    .tab_nav .user_login::before {
        content: '';
        position: absolute;
        left: 0;
        top: .14rem;
        width: 0.02rem;
        height: .4rem;
        background: #d8d8d8;
    }
    .tab_nav p.user_login {
        position: relative;
        text-align: left;
        padding-left: .6rem;
        letter-spacing:  0.04rem;
    }
    .content{
        padding: 0 7.5%;
    }
    .content .box {
        margin-top: .6rem;
        background: #fff;
    }
    .content .box p {
        height: .88rem;
        border-bottom: .02rem solid #ededed;
        position: relative;
        margin-bottom: .5rem;
    }
    .content .box p input {
        font-size: .28rem;
        height: .88rem;
        border: none;
    }
    .content .box .note a{
        font-size: .28rem;
        color: #999;
        float: right;
        margin-top: 0.20rem;
    }
    .content .login {
        width: 100%;
        margin: .90rem auto 0;
        line-height: .88rem;
        background: #aaa;
        font-size: .32rem;
        text-align: center;
        display: block;
        height: .88rem;
        color: #ccaa7a;
        background-image: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
    }
   
    .forget_pass {
        display: block;
        margin-top: .5rem;
        text-align: center;
        font-size: .24rem;
        color: #999;
    }
    .hide{
        display: none;
    }
    /* 图形验证码 */
    #canvas {
        float: right;
        display: inline-block;
        border: .01rem solid #ccc;
        border-radius: .1rem;
        cursor: pointer;
    }
</style>
