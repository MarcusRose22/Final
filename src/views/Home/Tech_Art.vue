<template>
 <div class="fade-in">
    
    <div class=titleP5> <!-- title -->
    <h1>請在這段文字下方<br><b class="LR">左右移動你的滑鼠</b><br>與背景的星空互動</h1>

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
.titleP5{
    font-size:20px;
    font-family: Syncopate, "微軟正黑體", sans-serif;
    color: white;
    text-align:center;
    
}

.LR{
    
    font-weight: bolder;
    letter-spacing: 3px;
}

</style>