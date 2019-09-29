<template>
    <div class="address">
        <header class="W_title">
            <div class="left_icon" @click="toUser"></div>
            <div class="shoppingAddress">收货地址</div>
        </header>
        <div class="address_list" v-if="AddressList.length > 0 && AddressList">
            <div class="address_content" v-for="(address, index) in AddressList" :key="index">
                <h5>{{address.name}} {{address.phone}}</h5>
                <p>{{address.address}} {{address.detailAddress}}</p>
                <div class="caozuo">
                    <a href="#" @click="edit(address)">编辑</a><a href="#" @click="del(address)">删除</a>
                </div>
            </div>
        </div>
        <div class="nullAddress" v-else>
            <i class="address_icon"></i>
            <p>您还有没收货地址</p>
        </div>
        
        <div class="bottom_add" @click="toAdd">
            <a href="#">添加收货地址</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Address',
    data() {
        return {
            AddressList: [
                    
            ]
        }
    },
    mounted() {
        this.$eventBus.$emit('showHideNav',false);
        this.showAddress();
    },
    methods: {
        toUser() {
            this.$router.push({path: '/User'});
        },
        toAdd() {
            this.$router.push({path: '/Add'});
        },
        // 显示地址
        showAddress() {
            let getAddr = JSON.parse(localStorage.getItem('userList')) || [];
            this.AddressList = getAddr;
            console.log(getAddr);
        },
        // 删除地址
        del(address){
            alert('确定要删除吗？')
            let position = this.AddressList.indexOf(address);
            this.AddressList.splice(position, 1);
            localStorage.setItem('userList',JSON.stringify(this.AddressList));
        },
        // 编辑地址
        edit(address) {
            address
            this.$router.push({path: '/EditAddress'});
        }
    },
    
}
</script>

<style scoped>
    .hide{
        display: none;
    }
     .address{
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
    .shoppingAddress{
        font-size: .32rem;
        color: #444;
        position: absolute;
        top: .24rem;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
    /* 空地址 */
    .nullAddress{
        width: 100%;
        height: 2.44rem;
        text-align: center;
        margin-top: 1.56rem;
    }
    .address_icon{
        display: inline-block;
        width: 1.68rem;
        height: 1.68rem;
        background: url('../../public/images/user/icon.png') no-repeat 0px 0px;
        margin-bottom: .32rem;
    }
    .nullAddress p{
        color: #666;
    }
    /* 地址列表 */
    .address_list{
        background: #fff;
        margin-top: .24rem;
        width: 100%;
    }
    .address_content{
        width: 100%;
        height: 2rem;
        padding: .24rem .8rem;
        box-sizing: border-box;
        border-bottom: .02rem solid #ddd;
    }
    .address_content h5{
        font-size: .32rem;
        color: #333;
        padding-bottom: .06rem;
        font-weight: bolder;
    }
    .address_content p{
        color: #999;
        font-size: .24rem;
    }
    .address_content .caozuo{
        position: absolute;
        bottom: .3rem;
        left: 3.3rem;    
    }
    .address_content .caozuo a{
        color: #477db3;
        border: none;
        background: #fff;
        font-size: .24rem;
    }
    .address_content .caozuo a:nth-child(1){
        margin-right: 2rem;
    }
    .bottom_add{
        height: .80rem;
        width: 94%;
        position: fixed;
        bottom: .24rem;
        left: .22rem;
        background: #cda97b;
        border-radius: .06rem;
    }
    .bottom_add a{
        height: .80rem;
        width: 94%;
        display: inline-block;
        text-align: center;
        color: #fff;
        left: .22rem;
        line-height: .8rem;

    }

</style>
