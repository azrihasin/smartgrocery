
var index= localStorage.getItem('data');

console.log( index);

var i=-1;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/azrihasin/smartgrocery/master/project/grocerydata.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var groceryData = JSON.parse(ourRequest.responseText);
    groceryTemplate(groceryData,index);
    groceryitem(groceryData,index);

  } else {
    console.log("We connected to the server, but it returned an error.");
  }

};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();






function groceryTemplate(data,index) {

  return `
  <div class="container">
      <div id="${data.id}" class="grocery">
    <a href=${data.add}><img class="grocery-photo" onclick="myfunction()" src="${data.photo}"></a>
    <h2 class="grocery-name">${data.name} <br><span class="species">(${data.species})</span></h2>

    <button class="a">Add to list </button>

        </div>
    </div>
  `;
}


function groceryitem(data,index){
  document.getElementById("app").innerHTML = `


    <h1 class="app-title">Fruits (${data[index].length}results)</h1>
    ${data[index].map(groceryTemplate).join("")}

`;
}
