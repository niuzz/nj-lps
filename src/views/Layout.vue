<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Mar 12 2018
******************************************* -->
<template>
	<div class="clearfix">
		<div class="banner">
			<Banner></Banner>
		</div>
		<div class="nav-background  d-none d-md-block">
		<div class="container">
			<Navbar></Navbar>
		</div>
		</div>
		<div style="width:100%;background:#c4d4e4;padding-bottom:60px;">
		<div class="container clearfix" style='padding-top:50px;'>
			<Describe></Describe>
		</div>

		<div class="container" style="padding-top:20px;">
			<div class="row">
                 <div class='col-12 col-lg-6 l'><Crasouel></Crasouel></div>
                 <div class="col-12 col-lg-6 r"><Toutiao></Toutiao></div>
             </div>
     </div>
	 </div>
	 <div class="" style="background:#333e49;padding-bottom:60px">
	 		<div class="container">
			<div class="row">
                 <div class='col-12 col-lg-6 l'><First></First></div>
                 <div class="col-12 col-lg-6 r"><Four></Four></div>
             </div>
     </div>
	 </div>
	 		<div class="container">
			<div class="row">
                 <div class='col-12 col-lg-5 li'><Second></Second></div>
                 <div class="col-12 col-lg-6 li"><Third></Third></div>
            </div>
     </div>
	
	 <div style="width:100%;background:#333e49;padding-top:20px;padding-bottom:50px">
	 <div class="container" >
		 <Titles t1="媒体观点" style="margin:20px auto"></Titles>
		 <div class="row"> 
		 <Author></Author>
		 <NewList></NewList>
		 </div>
	 </div>
	 </div>
		<div>
			<Foot></Foot>
		</div>
		<div class="container">
			<swiper-page></swiper-page>	
		</div>
		
	</div>
</template>

<script type="text/ecmascript-6">	
import Banner from'components/Banner.vue'
import Navbar from'components/Navbar.vue'
import Describe from'components/Describe.vue'
import Toutiao from'components/Toutiao.vue'
import Foot from 'components/Foot.vue'
import NewList from 'components/NewList.vue'
import Author from 'components/Author.vue'
import Crasouel from 'components/Crasouel.vue'
import First from 'components/First.vue'
import Second from 'components/Second.vue'
import Third from 'components/Third.vue'
import Four from 'components/Four.vue'
import SwiperPage from 'components/SwiperPage.vue'
import Titles from 'components/Titles.vue'

export default {
	components: {
	Banner,
	Navbar,
	Describe,
	Crasouel,
	First,
	Second,
	Third,
	Four,
	Titles,
	Toutiao,
	Crasouel,
	Foot,
	Author,
	NewList,
	SwiperPage
    },
	mounted(){



	}
}
</script>

<style scoped>
.li{
	/* margin-top: 50px; */
}
.clearfix ::before::after{
    content: '';
    display: block;
    clear: 'both';
}
.clearfix{
    zoom: 1;
}
.l{
    box-sizing: border-box;
}
.r{
    box-sizing: border-box;
}
.nav-background{
    background: #4c8d32;
    height: 50px;
    width: 100%;
}
</style>

