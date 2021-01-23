<template><div class="fade-in">
    
   
<div class=title> <!-- title -->
    <h1>科技藝術學士班特色</h1>
    <h2 class="context">清華是國際頂尖科技大學，加上合校後的藝術學院，具備發展「科技藝術」的卓越條件。我們號召臺灣年輕一代的科技藝術學者專家，我們規劃有科技藝術跨域特別課程，並與業界合作推出創意跨域專題。<br>你，不需猶豫，歡迎你的加入！
    </h2>
</div> 

<hr class="Home_hr"  size="2px" align="center" width="50%" color="white">

<div class="demo"><!-- 表格 -->

  <table>
  <div>
    
    <thead >
        <tr>
          <th colspan="2">NEWS</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
          <td class="img-pos"><img src="../../assets/banner.png"></td>
          <td class="table-word">【那顆G1咻！】科技藝術學士班第一屆系展
          <h3>國立清華大學藝術學院學士班第一屆系展獲獎名單</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="img-pos"><img src="../../assets/light.jpg"></td>
          <td class="table-word">【獲獎】2020春之清華–藝術卓越獎<br>科技藝術類 得獎名單
          <h3>2020春之清華–藝術卓越獎科技藝術類獲獎名單</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="img-pos"><img src="../../assets/hsu.png"></td>
          <td class="table-word">【驚爆】<br>科藝學士班張同學熱舞成發失去C位！<h3>身為藝術學士班熱舞擔當張同學成發失去C位</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="img-pos"><img src="../../assets/how.png"></td>
          <td class="table-word">【防疫】<br>科藝學士班張同學食物中毒疑似諾羅！<h3>科藝學士班張同學因吃飯前都不洗手食物中毒，疑似染上諾羅病毒</h3></td>
        </tr>
    </tbody>

    </div>
    </table>


<router-view></router-view>    
</div>




</div></template>


<script></script>

<style>
/* --------------animation--------------- */
iframe {
  height: 100vh;
}

.fade-in {
animation: fadeIn ease 2s;
-webkit-animation: fadeIn ease 2s;
-moz-animation: fadeIn ease 2s;
-o-animation: fadeIn ease 2s;
-ms-animation: fadeIn ease 2s;
}

@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}


/* -----------CSS--------- */

img{
width:400px;
height:200px; 
vertical-align: middle;
}

.title
{  
  margin-top: 15vh;
  font-family: Syncopate, "微軟正黑體", sans-serif;
  text-align: center;
  max-width: 50%;
  margin-left: 24.5%;
  color:#FFF;
  
}

.Home_hr{
  margin-top: 15vh;
}



table { 
  
  position: relative;
  /* border: 8px solid black; */
  
  font-size:50px; 
  width:fit-content;
  text-align:center;
  border-collapse:separate;
  border-spacing:0px 50px;
  word-break: break-all;
  margin-left: 18.5%;
    
} 



.demo{
  background:none;
  max-height:500px;
  overflow: auto;
  font-family: Syncopate, "微軟正黑體";
  
}

td,th { 
  color:#FFF;
  padding:5px;
  table-layout: fixed;
  word-break: break-all
}

th{
  color:yellow;
}

.table-word{
  font-size: 30px;
  text-align: left;
  
   
}
.img-pos{
  text-align: right;
}

h3{
  font-size:15px;
  }

.demo::-webkit-scrollbar{
  opacity: 0;
 
}

</style>