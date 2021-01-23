<template>
  <div class="fade-in">
    <div class=titleEnroll> <!-- title -->
    <h1>招生Q&A</h1>

  </div>

  <div class="demo"><!-- 表格 -->

  <table>
  <div>
    

    
    <tbody>
        <tr>
          <td class="table-word">1.成績優異的同學，就讀藝術學院學士班，有獎學金嗎？
          <h3>A：第一志願入學，且成績前三名同學，提供「春之清華-藝術卓越獎學金」，每學期補助3萬 (學雜費全免)，未來每學期維持在班上前幾名者（另定），
          <br>下一個學期可持續獲此獎學金。</h3></td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="table-word">2.請問藝術學院學士班與藝設系有何不同？
          <h3>A：<br>
          (1)藝術學院學士班主要強調當代藝術中的新形式創作-科技藝術(Technology Art)，亦即運用科技媒介（如感測器晶片、網路、虛擬實境 …）從事創作。<br>
          (2)藝設系主要有油畫、版畫、雕塑等專業課程以及各類工藝專業課程（木藝、玻璃藝術設計、陶瓷藝術設計…等）。</h3>
          </td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="table-word">3.請問藝術學院學士班與清華學院的美資班有何不同？
          <h3>A：<br>
          (1)藝術學院學士班說明如上，藝術學院有專屬教師，也特別開出的「科技藝術」跨域課程。<br>
              許多課程是全校唯一課程，也是各學系搶修課程，甚至有博士生來修習。<br>
          (2)清華學院的美資班課程設計為多元，師資與課程來自各學院。</h3>
          </td>
        </tr>
    </tbody>

    <tbody>
        <tr>
          <td class="table-word">4.請問學士班是否大二後會做分流？
          <h3>A：<br>
          (1)本院學士班主要把「科技藝術」跨域當成專業領域來培育人才，因此不做分流。<br>
          (2)學生未來若志趣不合，可透過轉系方式轉至感興趣之學系就讀。</h3>
          </td>
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

.table-word{
  font-size: 30px;
  text-align: left;
  
   
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
  color:#FFF;
  padding:5px;
  table-layout: fixed;
  word-break: break-all
}



.table-word{
  font-size: 30px;
  text-align: left;
  color:yellow;
  font-weight: bold;
  
   
}
.img-pos{
  text-align: right;
}

h3{
  font-family: "微軟正黑體";
  font-size:15px;
  color: #FFF;
  font-weight: normal;
  }

.demo::-webkit-scrollbar{
  opacity: 0;
 
}

</style>