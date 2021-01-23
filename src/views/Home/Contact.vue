<template>
  <div class="fade-in">
    <div class=titleEnroll> <!-- title -->
    <h1>聯絡資訊</h1>

  </div>

  
         <h2 class="contact-text"> 國立清華大學藝術學院學士班 <br>
              30014新竹市南大路521號（教學大樓3F）<br>
              +886-3-5715131 #78802 <br>
              ipta@my.nthu.edu.tw
         </h2>
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

.titleEnroll
{  
  
  font-family: Syncopate, "微軟正黑體", sans-serif;
  text-align: center;
  
  color:#FFF;
  font-size: 30px;
  
}

.table-word-contact{

  font-size: 30px;
  text-align: left;
  color:yellow;
  font-weight: bold;
  
   
}

.contact-text{

    color:yellow;
    font-size: 30px;
     font-family: Syncopate, "微軟正黑體", sans-serif;
    line-height: 45px;
     text-align: center;
}

</style>