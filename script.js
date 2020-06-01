var button = document.getElementById('btn1');
const myFavBtn = document.getElementById('myFavBtn');
var favList = [];
var addFav;
// when user clicks on button, we want to call function start search
button.addEventListener('click', startSearch);
myFavBtn.addEventListener('click', function()
	{
		window.location.href = "favourite.html" ;
	});

function startSearch(event) {
  // when we are starting the search, we want to pick up the value
  // input field from user
  var userInputValue = document.getElementById('mySearch').value;
  // this is base API url on which we can add what user wanted
  var urlBase = 'https://www.superheroapi.com/api.php/1064362790623949/search/' //10215865526738981
  // if user did not provide name in input, we want to stop executing
  if (userInputValue === null || userInputValue === '') {alert("Please write which u want to search");return;}
  // if we are still in this function, append what user typed onto urlBase
  var searchUrl = urlBase + userInputValue;
  // call function which actually executes the remote call 
  performSearch(searchUrl);
}


function performSearch(searchUrl) {
  // this could be jQuery getJSON if you so prefer
  // here it is vanila JS solution of how to get data via AJAX call
  var requestData = new XMLHttpRequest();
  // because AJAX is always async, we need to wait until file is loaded
  // once it is loaded we want to call function handleResults
  requestData.addEventListener('load', handleResults);
  requestData.open('GET', searchUrl);
  requestData.send();
}
function addToFav( val, url_val)
{
	for(var i=0; i<favList.length ;i++)
	{
		if(favList[i].image.url === url_val )
		{
			favList[i].fav = val;
			//console.log(favList[i]);
			// localStorage.setItem("" , JSON.stringify(favList[i]));
			localStorage.setItem("superheroName" , favList[i].name);
			localStorage.setItem("superheroImage" , favList[i].image.url);
      localStorage.setItem("Intelligence" , favList[i].powerstats.intelligence);
      localStorage.setItem("Strength" , favList[i].powerstats.strength);
      localStorage.setItem("Speed" , favList[i].powerstats.speed);
      localStorage.setItem("Power" , favList[i].powerstats.power);
      localStorage.setItem("Combat" , favList[i].powerstats.combat);
			// console.log(localStorage.superheroName);
			// console.log(localStorage.superheroImage);
		}
	}

}

function aboutHero(val, url_val) // heroaAliases ,
{
  for(var i=0; i<favList.length ;i++)
  {
    // save value of specific clicked heroes
  if(favList[i].image.url === url_val )
    {
      localStorage.setItem("superheroName" , favList[i].name);
      localStorage.setItem("superheroImage" , favList[i].image.url);
      localStorage.setItem("superheroRelatives", favList[i].connections.relatives);
      localStorage.setItem("superheroAliases" , favList[i].biography.aliases);
      localStorage.setItem("superheroGender" , favList[i].appearance.gender);
      localStorage.setItem("superheroWorkbase" , favList[i].work.base);
      localStorage.setItem("Intelligence" , favList[i].powerstats.intelligence);
      localStorage.setItem("Strength" , favList[i].powerstats.strength);
      localStorage.setItem("Speed" , favList[i].powerstats.speed);
      localStorage.setItem("Power" , favList[i].powerstats.power);
      localStorage.setItem("Combat" , favList[i].powerstats.combat);
      //redirecting to superheropage
      window.location.href = "superhero.html" ;
      
    }
    } 
}
function handleResults() {
  // once we get response, because we used vanilla JS, we got response
  // available in this context as "this.response", however it is type string
  // we need to take that string and parse it into JSON
   var responseJSON = JSON.parse(this.response);
  // if there is error, we didn't find any character
  if (responseJSON.error){alert("Character not found");console.log('Character not found');
}   else {
    var html = '';
    responseJSON.results.forEach(function (result)  {
      
      var image_url = result.image.url;
      var image_url_real = `"${image_url}"`;
      favList.push(result);
       //html += `<div style="display:inline-block; margin:4px;"> <h3>${result.name}</h3><div><img src=${image_url} style="height:300px; width:300px;"></div><div>Power Stats : ${result.powerstats.combat}</div><button onclick="addToFav(${true},${image_url}) ">Add to Favourites</button></div>`;
       html += "<div style='display:inline-block; margin:4px; border:2px solid yellow'> <h2>" + result.name + "</h2><button onclick='aboutHero("+ true + "," +  image_url_real + ")' ><div><img src=" + image_url + " style='height:300px; width:300px;'></div></button><div><p>Power Stats : " + result.powerstats.combat + " </p></div><button id='add-fav' onclick='addToFav("+ true + "," +  image_url_real + ")' >Add to fav</button></div>";
    })
    document.getElementById('demo').innerHTML = html;
  }
 }
