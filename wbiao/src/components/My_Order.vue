<template>
    <div class="my_order">
        <div class="order conton_my">
            <span>我的订单</span>
            <i class="my_r"></i>
        </div>
        <div class="order_list">
            <div class="pay conten_order_list">
                <div class="iconfont icon-daifukuan"></div>
                <div class="c">待付款</div>
            </div>
            <div class="ship conten_order_list">
                <div class="iconfont icon-daifahuo2"></div>
                <div class="c">待发货</div>
            </div>
            <div class="receipt conten_order_list">
                <div class="iconfont icon-daifahuo"></div>
                <div class="c">待收货</div>
            </div>
            <div class="evaluate conten_order_list">
                <div class="iconfont icon-daipingjia"></div>
                <div class="c">待评价</div>
            </div>
        </div>
        <div class="my_server">
            <div class="server conton_my">
                <span>我的服务</span>
                <p><i class="my_s"></i><span>联系万表</span></p>
                
            </div>
            <div class="order_list">
                <div class="pay conten_order_list">
                    <div class="iconfont icon-yushou"></div>
                    <div class="c">我的预售</div>
                </div>
                <div class="ship conten_order_list">
                    <div class="iconfont icon-lipin"></div>
                    <div class="c">我的礼品单</div>
                </div>
                <div class="receipt conten_order_list">
                    <div class="iconfont icon-shouhou"></div>
                    <div class="c">售后服务</div>
                </div>
                <div class="evaluate conten_order_list">
                    <div class="iconfont icon-jifen"></div>
                    <div class="c">我的积分</div>
                </div>
            </div>

             <div class="order_list">
                <div class="pay conten_order_list">
                    <div class="iconfont icon-fapiao"></div>
                    <div class="c">发票管理</div>
                </div>
                <div class="ship conten_order_list">
                    <div class="iconfont icon-youhuiquan"></div>
                    <div class="c"> 优惠券</div>
                </div>
                <div class="receipt conten_order_list">
                    <div class="iconfont icon-yue"></div>
                    <div class="c"> 余额</div>
                </div>
                <div class="evaluate conten_order_list">
                    <div class="iconfont icon-zuji"></div>
                    <div class="c"> 足迹</div>
                </div>
            </div>
            
            <div class="order_list">
                <div class="pay conten_order_list">
                    <div class="iconfont icon-pinglun"></div>
                    <div class="c"> 我的评论</div>
                </div>
                <div class="ship conten_order_list">
                    <div class="iconfont icon-tuijian"></div>
                    <div class="c">推荐</div>
                </div>
                <div class="receipt conten_order_list">
                    <div class="iconfont icon-icon"></div>
                    <div class="c">手表管家</div>
                </div>
                <div class="evaluate conten_order_list">
                    <div class="iconfont icon-shouhou"></div>
                    <div class="c"> 维修订单</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'My_Order'
}
</script>
<style scoped>
.my_order{
        width: 100%;
        height: 2.48rem;
    }
    .conton_my{
        height: .88rem;
        line-height: .88rem;
        padding-right: .24rem;
        margin-left: .24rem;
        font-size: .28rem;
        color: #333;
        border-bottom: .02rem solid #f1f1f1;
        box-sizing: border-box;

    }
    .my_r{
        display: block;
        width: .40rem;
        height: .40rem;
        background: url('../../public/images/user/icon.png') no-repeat -439px -731px;
        float: right;
        margin-top: .20rem;
    }
    .order_list{
        width: 100%;
        height: 1.6rem;
        display: flex;
        align-items: center;
    }
    .conten_order_list{
        width: 25%;     
        display: block;
        text-align: center;
        font-size: .24rem;
        color: #333;
        line-height: .44rem;

    }
    .order_list .iconfont{
        font-size: .4rem;
    }
    .my_server{
        width: 100%;
        min-height: 5.72rem;
    }
    .server p{
        float: right
    }
    .server p span{
        float:right;
    }
    .my_s{
        display: block;
        width: .45rem;
        height: .50rem;
        background: url('../../public/images/user/icon.png') no-repeat -840px -348px;
        float: left;
        margin-top: .20rem;
    }
</style>
