<template>

  <div class="clearfix">
      <ul class="clearfix">
          <li v-for="title in titles" :key="title.id">
              {{title.name}}
          </li>
      </ul>
  </div>
 

</template>
<script>
export default {
  data:()=>({
      titles:[
          {name:'大会议程>>'},
          {name:'大会议程>>'},
          {name:'大会议程>>'},
          {name:'大会议程>>'}
      ]

  })
}
</script>

<style scoped>

.nav-background ul li{
    list-style: none;
    float: left;
    line-height: 50px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding-left: 15px;
}
.nav-background ul li:hover{
    border-radius: 5px;
    box-shadow: 0px 2px 15px black;
    font-size: 30px;
}

</style>


