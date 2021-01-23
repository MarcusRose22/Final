<template>
  <div class="fade-in">
    <div class=titleEnroll> <!-- title -->
    <h1>學士班跨域師資</h1>

    </div>

 <div class="demo"><!-- 表格 -->

  <table>
  <div>
    
    
    <tbody>
        <tr>
          <td class="img-pos"><img style="width:400px; height:400px;"  src="../../assets/Chiu.jpg"></td>
          <td class="table-word">邱誌勇 (Chih-Yung Chiu)<h2>博士/教授</h2>
          <h3><b>學歷：</b>美國俄亥俄大學跨科際藝術系博士<br>
              <b>專長：</b>新媒體藝術美學、藝術評論、電影電視美學與科技文化研究<br>
              曾獲第一屆與第二屆數位藝術評論獎<br>
              <b>經歷：</b>北京師範大學-香港浸會大學聯合國際學院文化與創意學部院長、國立台灣師範大學美術系專任教授、<br>臺灣科技藝術學會理事長、台北數位藝術節策展人</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="img-pro"><img style="width:400px; height:400px;" src="../../assets/You.png"></td>
          <td class="table-word">邱誌勇 (Chih-Yung Chiu)<h2>博士/助理教授</h2>
          <h3><b>學歷：</b>國立臺灣大學資訊工程所博士<br>
              <b>專長：</b>人機互動（Human-Computer Interaction）、普及計算（Ubiquitous Computing）、<br>無線感測網路（Sensor Networking Systems）<br>
              <b>經歷：</b>國立臺灣大學資訊管理學系兼任助理教授、國立臺灣大學智慧聯網創新研究中心專案計畫助理研究員、<br>中央研究院資訊科技創新研究中心博士後研究學者、Dartmouth College訪問學者、宏達國際電子股份有限公司資深工程師</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="img-pro"><img style="width:400px; height:400px;" src="../../assets/Chi.png"></td>
          <td class="table-word">蔡奇宏 (Chi-Hung Tsai) <h2>講師/科技藝術業界顧問教師</h2>
          <h3><b>學歷：</b>國立台北藝術大學 科技藝術研究所碩士<br>
              <b>專長：</b>光動藝術、互動裝置藝術、策展規劃與執行<br>
              <b>經歷：</b>新銳科技藝術家、第八屆KT科技藝術獎金獎、沃手工作創辦人、台北藝術大學新媒體藝術學系兼任講師<br>
              <b>很棒的網頁設計課老師</b></h3></td>
        </tr>
    </tbody>

    </div>
    </table>

 
    </div>
</div>
  

  

</template>

<script>

</script>

<style>

/* animate */
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

/* css */

.img-pos{
 
vertical-align: middle;
}

.titleEnroll
{  
  margin-top: 15vh;
  font-family: Syncopate, "微軟正黑體", sans-serif;
  text-align: center;
  max-width: 50%;
  margin-left: 24.5%;
  color:#FFF;
  font-size: 30px;
  
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
  color:yellow;
  padding:5px;
  table-layout: fixed;
  word-break: break-all;
  
  font-weight: bold;
}

.table-word{
  font-size: 30px;
  text-align: left; 
}

h2{
    font-size: 30px;
    color: #FFF;
}
.img-pos{
  text-align: right;
  
}

h3{
  font-size:15px;
  color: #FFF;
  font-weight: normal;
  }

.demo::-webkit-scrollbar{
  opacity: 0;
 
}

b{
    font-weight: bolder;
    color: yellow;
}
</style>