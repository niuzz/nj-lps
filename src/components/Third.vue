<template>

  <div class="thr clearfix">
      <div class="thr-left">
          <div class="thr1">
               <p>现场直击</p>
             
          </div>
          <div class="thr2">
              <p>现场直击</p>

          </div>
          <div class="thr3">
              <p>现场直击</p>

          </div>
      </div>
      <div class="thr-right">
          <div class="thr4"> <p>现场直击</p></div>
          <div class="thr5">
              <p>现场直击</p>
          </div>
          <div class="thr6"> <p>现场直击</p></div>
      </div>
  </div>
 
  
</template>
<script>
export default {
  
}
</script>
<style>
.thr2{
    width: 48%;
    height: 205px;
    float: left;
    border: 1px solid black;
    margin-top: 24px;
        background-repeat: no-repeat;
    background-size: cover;
       background-image: url('../img/6.jpg');

}
.thr3{
    width: 48%;
    height: 205px;
    float: right;
    margin-top: 24px;
    border: 1px solid black;
    background-image: url('../img/6.jpg');
        background-repeat: no-repeat;
    background-size: cover;
}
.thr1{
    height: 440px;
    background-image: url('../img/x5.jpg')
    
}
.thr1 p{
        position: relative;
    top: 412px;
    width: 100%;
    height: 28px;
    background: rgba(72,174,31,0.8);

}
.thr5{
    margin-top: 20px;
}
.thr5 p,.thr4 p,.thr6 p{
    position: relative;
    top: 181px;
    width: 100%;
    height: 28px;
    background: rgba(72,174,31,0.8);
}
.thr2 p,.thr3 p{
        position: relative;
    top: 176px;
    width: 100%;
    height: 28px;
    background: rgba(72,174,31,0.8);

}
p{
    color: white;
}
.thr6{
    margin-top: 20px;
}
.thr{
    width: 100%;
    border: 1px solid blue;
}
.thr-left{
    width: 64.7%;
    height: 670px;
    border: 1px solid red;
    float: left;
}
.thr-right div{
    height: 210px;
    border: 1px solid black;
    background-image: url('../img/6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.thr-right{
    width:30.9%;
    height: 670px;
    float: right;
  
    border: 1px solid purple;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>

