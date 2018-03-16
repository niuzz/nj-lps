<template>
<div>
<Titles t1="大会议程"></Titles>
<div class="sc"  >	
    <table  style="width:100%;border:1px solid #ddd">
        <tr  class='bg' style="height:60px;width:100%;border-bottom:1px solid #ddd">
            <td style="text-align:center;border-left:1px solid #ddd">时间</td>
            <td style="text-align:center;border-left:1px solid #ddd">题目</td>
            <td style="text-align:center;border-left:1px solid #ddd">演讲人</td>
        </tr>
        <tr class="bg" v-for="person in people" :key="person.id">
            <td>{{person.time}}</td>
            <td>{{person.title}}</td>
            <td>{{person.name}}</td>
        </tr>
    </table>
</div>
</div>
</template>
<script scoped>
import Titles from 'components/Titles.vue'
export default {
    components:{
        Titles
    },
    
    data (){
        return{
             people:[
            {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},
            {time:'2018-2-17',
            title:'大豪',
            name:'ewqrwqr'},
              {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},
              {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},
              {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},
              {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},]
        }
    }}
</script>

<style lang="scss" scoped>
.sc{
    height: 470px;
    overflow-y: scroll;
    margin-top: 20px;
    border: 1px solid white;
    padding:15px;
}
.bg{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ddd;
}
.bg td{
    text-align: center;
    border-left: 1px solid #ddd
}
.bg:nth-child(odd){
    background: white;
}
.bg:nth-child(even){
    background: #f2f2f2;
}


</style>

