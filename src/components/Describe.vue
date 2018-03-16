<template>
  <div>
      <div class="describe">
          <div class="font  d-none d-md-block">前言</div>
          <p>{{msg}}</p>
      </div>
  </div>
</template>
<script>
export default {
    data:()=>({
        msg:"2017年11月3日，主题为“让计算更智慧”2017联想ThinkSystem & ThinkAgile发布会将在北京北辰五洲皇冠国际酒店隆重召开。比特网将进行专题报道。"
    })
}
</script>
<style scoped>
.font{
    line-height: 1;
    width: 5%;
    height: 50px;
    color: #ffffff;
    padding: 5px 10px;
    text-align: center;
    background-color: #48ae1f;
    float: left;
    font-size: 20px;
}
.describe{
    /* margin-top: 15px; */
}
P{
    float: left;
    width: 80%;
    margin-left: 30px;
    text-align: justify;
    /* font-weight: bolder; */
}
</style>


