<template>
    <div class="profile">
        <p class="no-complete" v-if="cookie">完善资料可获得2500积分哦~ 
            <a href="#">马上完善&gt;</a>
        </p>
        <p class="no-login" v-else>登录后将显示您的详细资料~ 
            <a href="#">马上登录&gt;</a>
        </p>
        
    </div>
</template>
<script>
export default {
    name: 'Profile',
    data() {
        return {
            cookie: existCookie('token')
        }
    },
}
function existCookie(name) {
    let arrCookies = document.cookie.split('; ');
    for (let arrCookie of arrCookies) {
        if (name === arrCookie.split('=')[0]) {
            return true;
        }
        return false;
    }
    return token;
}
</script>
<style scoped>
    .profile{
        width: 91.47%;
        margin: 0 auto;
        padding: .36rem 0 .2rem;
        
    }
    .hide{
        display: none;
    }
    /* 未登录状态 */
    .profile .no-login {
        height: .56rem;
        line-height: .56rem;
        font-size: .24rem;
        text-align: center;
    }
    .profile p.no-login {
        background: #cc3d3d;
        color: #fff;    
    }
    .profile p a {
        text-decoration: underline;
        padding-bottom: .04rem;
        color: #fff;  
    }
    /* 已登录状态 */
    .profile p.no-complete {
        background: #f2d7ad;
        color: #666;
        height: .56rem;
        line-height: .56rem;
        font-size: .24rem;
        text-align: center;
    }
    .profile p a {
        text-decoration: underline;
        padding-bottom: .04rem;
        color: #666; 
    }
   
</style>
