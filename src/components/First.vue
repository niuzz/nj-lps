<template>
<div>
    <table  style="width:100%;border:1px solid #ddd">
        <tr style="height:60px;width:100%;border-bottom:1px solid #ddd">
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

</template>
<script>
export default {
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
            name:'qwe'},
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
            name:'qwe'},
                        {time:'2018-2-13',
            title:'大土豪',
            name:'qwe'},
            
        ]
        }
    }

  
}
</script>

<style lang="scss" scoped>
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

