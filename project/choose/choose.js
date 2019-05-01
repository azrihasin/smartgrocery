var index= localStorage.getItem('data');

console.log( index);

var i=-1;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://azrihasin.github.io/smartgrocery/project/choose/grocerydata.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var groceryData = JSON.parse(ourRequest.responseText);
    groceryTemplate(groceryData,index);
    groceryitem(groceryData,index);
  }
  else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

var i=-1;

function groceryTemplate(data,index) {
  return `
      <div id="${data.id}" class="grocery">
        <a href=${data.add}><img class="grocery-photo" onclick="myFunction(${data.value})" src="${data.photo}"></a>
        <h2 class="grocery-name">${data.name} <br><span class="species">(${data.species})</span></h2>
        <a href="../main/list.html"><button type="button" id="btn" name="button" onclick="addList('${data.name}',${data.value});" >Add to list </button></a>
      </div>
  `;
}


function groceryitem(data,index){
  document.getElementById("app").innerHTML = `
    <h1 class="app-title"> (${data[index].length} results)</h1>
    ${data[index].map(groceryTemplate).join("")}
`;
}

function myFunction(val) {
  var data=val;
  // Put the var into storage
  localStorage.setItem('datacontent', data);
}

function addList(item,val) {
  var data=item;
  var i=val;
  // Put the var into storage
  localStorage.setItem('item', data);
  localStorage.setItem('i', i);
}
