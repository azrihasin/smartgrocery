var index= localStorage.getItem('data');

console.log( index);


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://azrihasin.github.io/smartgrocery/project/content/meatcontent/meatcontent-'+index+'.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var groceryData = JSON.parse(ourRequest.responseText);
    groceryTemplate(groceryData);


  } else {
    console.log("We connected to the server, but it returned an error.");
  }

};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function groceryTemplate(data){

  document.getElementById("topics").textContent=data[0].title;
  document.getElementById("sentences").textContent=data[0].subtitle;

  document.getElementById("desc1title").textContent=data[0].title;
  document.getElementById("desc2title").textContent=data[0].subtitle;

  document.getElementById("1").textContent=data[0].char1;
  document.getElementById("2").textContent=data[0].char2;
  document.getElementById("3").textContent=data[0].char3;
  document.getElementById("4").textContent=data[0].char4;

  document.getElementById("pic1").src=data[0].picture;

  document.getElementById("des1").textContent=data[0].desc1;
  document.getElementById("des2").textContent=data[0].desc2;

  document.getElementById("stick").src=data[0].sticker;

  document.getElementById("a").textContent=data[0].nutrient1;
  document.getElementById("b").textContent=data[0].nutrient2;
  document.getElementById("c").textContent=data[0].nutrient3;
  document.getElementById("d").textContent=data[0].nutrient4;
  document.getElementById("e").textContent=data[0].nutrient5;
  document.getElementById("f").textContent=data[0].nutrient6;
  document.getElementById("g").textContent=data[0].nutrient7;
  document.getElementById("h").textContent=data[0].nutrient8;

  document.getElementById("f1").textContent=data[0].fact1;
  document.getElementById("f2").textContent=data[0].fact2;
  document.getElementById("f3").textContent=data[0].fact3;
  document.getElementById("f4").textContent=data[0].fact5;
  document.getElementById("f5").textContent=data[0].fact6;
  document.getElementById("f6").textContent=data[0].fact7;
  document.getElementById("f7").textContent=data[0].fact7;
  document.getElementById("f8").textContent=data[0].fact8;

}
