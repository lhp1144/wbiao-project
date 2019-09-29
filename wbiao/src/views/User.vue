<template>
    <div class="user">
        <!-- 我的--头部 -->
        <UserHead></UserHead>
        <!-- 中部 -->
        <Profile></Profile>
        <!-- 我的订单,我的服务 -->
        <My_Order></My_Order>
    </div>
</template>
<script>
import UserHead from '@/components/UserHead.vue'
import Profile from '@/components/Profile.vue'
import My_Order from '@/components/My_Order.vue'
export default {
    name: 'User',
    comments: {
    },
    components:{
        UserHead,
        Profile,
        My_Order,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
   .user{
        min-height: 14.44rem;
    }

</style>

