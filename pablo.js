
function showText() {
    var selectElement = document.getElementById("mySelect1");
    var outputElement = document.getElementById("output");
    var selectedOption = selectElement.value;
    event.preventDefault(); // منع عملية التحديث التلقائي
  
    if (selectedOption === "الـعـصابـات") {
      outputElement.innerHTML = `
        <div lang="ar">
          <center>قـسـم الـعصابات :</center>
          <br>
<p> فــاكشــن الـعصابة : 100 الـف كريدت </p>
<p> إعـلان صـورة ثـابتة : 60 الـف كريدت</p>
<p> صــوت للإعلان : 40 الـف كريدت </p>
        </div>
      `;
    } else if (selectedOption === "الأيـديـات") {
      outputElement.innerHTML = `
        <div lang="ar">
          <center>قـسم الأيديات  :</center>
          <br>
<p> ايـدي فـردي من 5 لـ 9 : 400 الـف كريدت </p>
<p> ايـدي ثنائي من 20 لـ 50 : 300 الـف كريدت</p>
<p> ايـدي ثنائي من 50 لـ 99 : 250 الـف كريدت</p>
<p> ايدي ثـلاثـي من 100 لـ 200 : 150 الـف كريدت </p>
        </div>
      `;
    } else if (selectedOption === "الـمركبـات ") {
      outputElement.innerHTML = `
        <div lang="ar">
          <center> قــسم الـمركبات :</center>
          <br>
<p>  قـــريبا 
<br> 
 Soon ! </p>
        </div>
      `;
    }
  }
  