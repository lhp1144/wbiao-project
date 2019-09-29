<template>
    <div class="register">
         <header class="W_title">
            <div class="left_icon" @click="back"></div>
        </header>
        <div class="contens">
            <div class="register_title">
                <h2>注册万表会员</h2>
                <router-link to="/Login">
                    <p>有账号? 
                        <a href="#">去登录</a>
                    </p>
                </router-link>
            </div>
            <p class="phone">
                <input placeholder="手机号" ref="phoneNum"  @blur="yanPhone">
                <span class="showError" ref="showRedPhone">手机号不能为空</span>
            </p>
            <p class="phone none">
                <input placeholder="如有推荐人，请写推荐人手机号" ref="refPhoneNum">
            </p>
            <!-- <p class="code">
                <input maxlength="4" type="text" placeholder="图形验证码">
            </p> -->
            <p class="note"> 
                <input maxlength="6"  type="tel" placeholder="短信验证码" class="note_code" ref="code"> 
                <a href="#" @click="sendCode">发送验证码</a>
            </p>
            <p class="code">
                <input type="password" placeholder="请输入密码" ref="password" @blur="yanPwd">
                <span class="showError" ref="showRedPwd">密码不足6-20</span>
            </p>
            <button class="reg" @click="registerUser">注册</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            
        }
    },
    mounted() {
        this.$eventBus.$emit('showHideNav',false);
    },
    methods: {
        back() {
            // 路由后退
            this.$router.back();
        },
        // 验证手机号不能为空
        yanPhone() {
            if (!this.$refs.phoneNum.value) {
                this.$refs.showRedPhone.style.opacity = 1;
            }else{
                 this.$refs.showRedPhone.style.opacity = 0;
            }
            
        },
        // 验证密码格式
        yanPwd() {
            let regPwd = /^[a-zA-Z][A-Za-z0-9_]{5,19}$/;
            let pwd = this.$refs.password.value;
            if (regPwd.test(pwd)) {
                this.$refs.showRedPwd.style.opacity = 0;
            } else {
                this.$refs.showRedPwd.style.opacity = 1;
            }
        },
        // 发送验证码
        sendCode() {
            let regPhone = /^[1]([3-9])[0-9]{9}$/;
            let phone = this.$refs.phoneNum.value;
            if (regPhone.test(phone)) {
                axios.post('/user/sendCode',{
                    phone: phone
                }).then((result) =>{
                    console.log(result.data.code);
                    alert('发送成功');
                }).catch((err) =>{
                    console.log(err);
                })
            } else {
                alert('改手机号格式不正确');
            }
            
        },
        // 注册用户
        registerUser() {
           let userObj = {
               login_name: this.$refs.phoneNum.value,
               referrer: this.$refs.refPhoneNum.value,
               password: this.$refs.password.value,
           }
           axios.post('/user/createUser',userObj).then((result) =>{
               console.log(result.data);
               alert('注册成功');
               this.$router.push({path: '/Login'});
           }).catch((err) =>{
               console.log(err);
           });
        }
    },
}
</script>

<style scoped>
     .W_title{
        width: 100%;
        height: .88rem;
        display: flex;
        align-items: center;
    }
    .left_icon{
        width: .45rem;
        height: .45rem;
        background: url(/img/icon.f3f32698.png) no-repeat -127px -621px;
        margin-left: .22rem;
    }
    .contens{
        padding: 0 7.5%
    }
    .register_title{
        text-align: center;
    }
    .register_title h2 {
        margin: .5rem 0 0;
        font-size: .48rem;
        color: #666;
        font-weight: bolder;
    }
    .contens p {
        margin-top: .44rem;
        height: .88rem;
        background: #fff;
        border-bottom: 0.02rem solid #ededed;
        margin-bottom: .4rem;
        font-size: .28rem;
        color: #ccc;
    }
    .showError{
        color: red;
        line-height: .88rem;
        font-size: .24rem;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
    }
    .contens p input {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 2.6%;
        outline: 0;
        font-size: .28rem;
    }
    .register_title>p {
        border-bottom: 0 !important;
    }
    .register_title p a {
        color: #999;
        text-decoration: underline;
    }
    .contens p.note a {
        line-height: .88rem;
        font-size: .24rem;
        color: #999;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
    }
    .contens .reg {
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
   
</style>
