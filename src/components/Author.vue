<template>
 <div class="w55 clearfix fl wrap "  ref="aaaa">
    <div :class= "author.id === 2 ? 'm6_l_m fl ml135':'m6_l_m fl'" v-for="author in authors" :key="author.id" >
    <div class="cic">
    <!-- <img :src=author.img alt=""> -->
    <img src="../img/YH.jpg" alt="">
    </div>
    <p class="title"><strong>{{author.name}}</strong><br>{{author.title}}</p>
    <p class="titind">{{author.ind}}</p>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data:() => ({
        authors: [
            {id:1,name:'张桂林',img:'../img/zgl.jpg',title:'比特网副总编',ind:'AI被视为第四次工业革命的核心推动力，也是联想企业级业务的一支强心剂。且看联想如何出招。'},
            {id:2,name:'吴丛丛',img:'../img/wucc.jpg',title:'比特网企业计算主编',ind:'联想企业级并不是在吃老本，ThinkSystem和ThinkAgile品牌产品发布就是一个很好的证明。'}
        ]
    }),
    mounted() {

    }
}
</script>

<style  scoped>
    .w55{
        width:55%;
        background: white;
    }
    .wrap{
        padding: 30px 70px;
        width:55%;
        border: 1px solid #000;
    }
    .m6_l_m {
        width: 32%;
    }
    .cic {
        width: 155px;
        height: 155px;
        border-radius: 77.5px;
        border: 2px solid #6ac346;
        margin: 0 auto;
    }
    .title{
        color: #48ae1f;
        text-align: center;
        font-size: 16px;
        margin-top: 10px;
    }
    .titind{
        text-align: justify;
        font-size: 14px;
        margin-top: 15px;
        line-height: 180%;
    }
    .ml75 {
        margin-left: 75px
    }
    .cic img {
        margin-top: 7px;
        margin-left: 7px;
        width: 140px;
        height: 140px;
        border-radius: 70px;
        
    }
    .fl{
        float: left;
    }
    .ml135{
        margin-left: 32%;
    }
    @media screen and (max-width:414px) {
   /* .ml135{
        margin-left: 54%;
    } */
    .m6_l_m{
        margin: 0 auto;
         width: 54%;
    }

    .fl{
        float: none;
    }
    .wrap{
        width: 100%;
    }

        
    }
</style>