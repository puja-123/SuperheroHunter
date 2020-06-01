var lisheroes =[];
var ind = 0;
var hero = {
	name : localStorage.superheroName,
	img_url : localStorage.superheroImage,
	intelligence: localStorage.Intelligence,
	strength: localStorage.Strength,
	speed: localStorage.Speed,
	durability : localStorage.Durability,
	power : localStorage.Power,
	combat : localStorage.Combat
};

lisheroes.push(hero);
console.log(lisheroes);
var container ='';
function removeFav()
{
	console.log("i m removed");
	document.getElementById('fav1').innerHTML = `null`; 
	lisheroes = [];
	// location.reload();
	window.location.href="favourite.html"
}
for(let k = 0 ;k <lisheroes.length ;k++)
{
	hero_name = lisheroes[k].name ;
	 // container += `<div style="display:inline-block; margin:4px;"> <h3>${hero_name}</h3></div>`;
  	document.getElementById('fav1').innerHTML += `<div style="border:2px solid pink;"><h2>${hero_name}</h2><img src= ${lisheroes[k].img_url} style="height:300px ;width
  	:300px;"><p><span>Intelligence :</span> ${lisheroes[k].intelligence }</p><p><span>Strength :</span> ${lisheroes[k].strength }</p><p><span>Speed :</span> ${lisheroes[k].speed }</p>
  	<p><span>Durability :</span> ${lisheroes[k].durability }</p><p><span>Power :</span> ${lisheroes[k].power }</p><p><span>Combat :</span> ${lisheroes[k].combat }</p><button id="remove-btn" onclick="removeFav()">Remove from fav</button><div>`; 
  		
}