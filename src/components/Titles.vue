<template>

    <div class="title">
        {{t1}}
    </div>


  
</template>
<script>
export default {
    props:['t1'],
    data:()=>({
    })  
  
}
</script>
<style scoped>
.title{
    background-image: url('../img/tit1.png');
    text-align: center;
    width: 322px;
    height: 27px;
    font-size: 28px;
    color: green;
    line-height: 20px;
    margin-top:32px;
}
</style>


