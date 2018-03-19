<template>
  <div class="m6_r mt30 clearfix fl ml15">
    <p class="listtit">{{newstit}}</p>
    <ul>
      <li class="mt10" v-for="list in listData" :key="list.id"><a class="f14 li_a " :href=list.target>{{list.tit}} </a></li>
    </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
      return {
        newstit: '│联想数据中心业务相关阅读',
        listData:[
            {target:'http://server.chinabyte.com/262/14276262.shtml',tit:'◇ 联想携手VERITAS发布DPA备份一体机意欲何为'},
            {target:'http://server.chinabyte.com/428/14218928.shtml',tit:'◇ 联想携手泛华,从顶层设计入手打造智慧城市'},
            {target:'http://server.chinabyte.com/421/14209921.shtml',tit:'◇ 2017全球超算峰会召开联想超算赋能AI时代'},
            {target:'http://storage.chinabyte.com/182/14198682.shtml',tit:'◇ 联想推出ThinkSystemDS系列存储产品'},
            {target:'http://server.chinabyte.com/478/14135478.shtml',tit:'◇ 市场需求旺盛联想高密度服务器sd350备受青睐'},
            {target:'http://server.chinabyte.com/51/14113051.shtml',tit:'◇ 联想“双态IT”结硕果六大解决方案唱主角'},
            {target:'http://e.chinabyte.com/482/14108982.shtml',tit:'◇ 联想发布数据中心及行业智慧解决方案'},
            {target:'http://server.chinabyte.com/158/13965658.shtml',tit:'◇ SC16直击：联想HPC缘何能够笑到最后？'},
        ]
      }
  }
}
</script>

<style scoped>
.fl{
  float: left;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: justify
  
}
.m6_r {
  border: 1px solid black;
    padding-top: 20px;
    padding-left: 40px;
    width: 43%;
    height: 407px;
    background: #fff;
}
.listtit{
  color: #48ae1f;
  font-size:20px;
}
.mt20{
  margin-top: 20px;
}
.mt10{
  margin-top: 10px;
}
.ml15{
  margin-left: 15px;
}
@media screen and (max-width:414px) {
    .m6_r{
        width: 100%;
        float: none;
    }
    .ml15{
        margin-left: 0px;
    }
}

</style>

