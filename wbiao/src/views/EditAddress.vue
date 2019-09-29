<template>
    <div class="EditAddress">
        <header class="W_title">
            <div class="left_icon" @click="toAddress"></div>
            <div class="add_Address">编辑收货地址</div>
        </header>
        <div class="address_warp">
            <div class="msg">
                <span>收货人：</span>
                <input type="text" placeholder="必填" ref="consignee">
            </div>
            <div class="msg">
                <span>手机号：</span>
                <input type="text" placeholder="必填" ref="phone">
            </div>
            <div class="msg">
                <span>所在地区：</span>
                <input type="text" placeholder="请选择" v-model="userlist.address"  @click="showAddressChuang" ref="location">
            </div>
            <div class="msg">
                <span>详细地址：</span>
                <input type="text" placeholder="必填" ref="detailAddress">
            </div>
        </div>
           <!-- 省市区选择弹窗 -->
            <van-popup v-model="showAddress" position="bottom" :style="{ height: '30%' } ">
                <div class="choiceAddr">
                    <select v-model="userAddress.selectAddrs.p" @change="getProvince($event)" ref="province"> 
                        <option v-for="p in addrs" :key="p.province" :value="p">{{p.province}}</option>
                    </select>
                    <select v-model="userAddress.selectAddrs.c" @change="getCity($event)">
                        <option v-for="c in userAddress.selectAddrs.p.cities" :key="c.city" :value="c">{{c.city}}</option>
                    </select>
                    <select v-model="userAddress.selectAddrs.a" @change="getAreas($event)">
                        <option v-for="a in userAddress.selectAddrs.c.areas" :key="a.areas" :value="a">{{a}}</option>
                    </select>
                </div>
            </van-popup>
        <div class="bottom_add" @click="saveAddress">
            <a href="#">保存</a>
        </div>
        <!-- 正则校验提示框 -->
        <div class="regWarp">
            <div class="reg" ref="reg"> 
                收货人不能为空
            </div>
        </div>

    </div>
</template>
<script>
import {Popup,Field,Toast} from "vant";
import addressList from '../addressList.js'

export default {
    name: 'EditAddress',
    // 注册vant组件
    components: {
        "van-popup": Popup,
        "van-field": Field,
    },
    data() {
        return {

            addrs: addressList,
            showAddress: false,
             userlist: {
                //收货人
                username: "",
                //手机号
                phone: "",
                // 省市区
                address: '',
                // 详细地址
                detailAddress: ""
            },
            // 存放userlist对象
            userArr: [],
            // 省市区
            userAddress:{
                selectAddrs: {
                    p: "",
                    c: "",
                    a: ''
                }
            },    
        }
    },
    mounted() {
        this.$eventBus.$emit('showHideNav',false);
    },
    methods: {
        toAddress() {
            this.$router.push({path: '/Address'});
        },
        // 控制地址弹出
        showAddressChuang() {
            this.showAddress = true;
        },
        // 获取省
        getProvince(event) {
            this.userlist.address = this.userAddress.selectAddrs.p.province
            // console.log(this.userAddress.selectAddrs.p.province);
            // console.log(this.userAddress.selectAddrs.p.cities[0].city);
            // console.log(this.userAddress.selectAddrs.p.cities[0].areas[0]);
        },
        // 获取城市
        getCity(event){
            console.log(event);
            console.log(this.userAddress.selectAddrs.p.cities);
            let cities = this.userAddress.selectAddrs.p.cities;
            cities.forEach((item, index) => {
                if (event.target.selectedIndex === index) {
                    this.userlist.address +=  " " + item.city;
                }
                
            });
        },
        // 获取地区
        getAreas(event) {
            console.log(this.userAddress.selectAddrs.c.areas);
            let areasList = this.userAddress.selectAddrs.c.areas
            areasList.forEach((area, index) =>{
                if (event.target.selectedIndex === index) {
                    this.userlist.address += " " + area;
                }
            });
        },
        // 保存地址
        saveAddress() {
            let phoneReg = /^[1]([3-9])[0-9]{9}$/;
            this.userlist.username = this.$refs.consignee.value;
            this.userlist.phone = this.$refs.phone.value;
            this.userlist.address = this.$refs.location.value;
            this.userlist.detailAddress = this.$refs.detailAddress.value;
            
            
            // 正则校验
            if (!this.userlist.username) {
                this.$refs.reg.style.display = 'block';
                this.$refs.reg.innerText = '收货人不能为空'
                 setTimeout(() => {
                    this.$refs.reg.style.display = 'none';
                    
                 }, 1500);
            }else if(!this.userlist.phone) {
                this.$refs.reg.style.display = 'block';
                this.$refs.reg.innerText = '手机号不能为空';
                setTimeout(() => {
                    this.$refs.reg.style.display = 'none';
                    
                }, 1500);
            }else if(!phoneReg.test(this.userlist.phone)) {
                this.$refs.reg.style.display = 'block';
                this.$refs.reg.innerText = '手机号格式不正确';
                setTimeout(() => {
                    this.$refs.reg.style.display = 'none';
                    
                }, 1500);
            }else if(!this.userlist.address){
                this.$refs.reg.style.display = 'block';
                this.$refs.reg.innerText = '所在地区不能为空';
                setTimeout(() => {
                    this.$refs.reg.style.display = 'none';
                    
                }, 1500);
            }else if(!this.userlist.detailAddress) {
                this.$refs.reg.style.display = 'block';
                this.$refs.reg.innerText = '详细地址不能为空';
                setTimeout(() => {
                    this.$refs.reg.style.display = 'none';
                    
                }, 1500);
            }

            let userObj = {
                name: this.userlist.username,
                phone: this.userlist.phone,
                address: this.userlist.address,
                detailAddress: this.userlist.detailAddress
            }
            
            // 取出本地存储的数据
            let addressForStorage = JSON.parse(localStorage.getItem('userList')) || [];
            this.userArr = addressForStorage;
            // 取出把最新的推进去
            this.userArr.push(userObj);
            localStorage.setItem('userList', JSON.stringify(this.userArr));
            this.$router.push({path: '/Address'});
        }
    },
    
}
</script>

<style scoped>
    .EditAddress{
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        font-size: .32rem;
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
    .add_Address{
        font-size: .32rem;
        color: #444;
        position: absolute;
        top: .24rem;
        text-align: center;
        width: 100%;
        z-index: 1;
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
    .address_warp{
        background: #fff;
        width: 100%;
        height: 3.6rem;
        margin-top: .24rem;
    }
    .address_warp .msg{
        border-bottom: .02rem solid #ddd;
        height: .88rem;
        line-height: .88rem;
        margin: 0 .24rem;
        font-size: .28rem;
        color: #666;
    }
    .address_warp .msg:nth-child(4){
         border-bottom: 0;
    }
    .address_warp .msg input{
        outline: none;
        border: none;

    }
    .msg span{
        display: block;
        height: .87rem;
        width: 2rem;
        float: left;
    }
    /* 地址弹窗 */
    .choiceAddr{
        width: 100%;
    }
    .choiceAddr select{
        width: 33.33%;
        height: .6rem;
        font-size: .28rem;
        line-height: .6rem;
        text-align: center;
        color: #666;
    }
    .choiceAddr select option{
        color: #666;
        font-size: .24rem;
    }
    .caozuo{
        margin-top: 2.4rem;
        padding: 0 .5rem;
    }
    .caozuo a{
        color: #477db3;
        border: none;
        background: #fff;
        font-size: .3rem;
        position: absolute;
        right: .3rem;
        z-index: 9999;
    }
    /*正则校验 */
    .regWarp{
        width: 2.8rem;
        height: .88rem;
    }
    .reg{
        background: rgba(0, 0, 0, .5);
        border-radius: .2rem;
        font-size: .28rem;
        width: 2.8rem;
        height: .88rem;
        line-height: .88rem;
        color: #fff;
        text-align: center;
        position: absolute;
        bottom: -1rem;
        left: 2.2rem;
        display: none;
    }
</style>



