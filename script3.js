var lisheroes =[];
var ind = 0;
var hero = {
	name : localStorage.superheroName,
	img_url : localStorage.superheroImage,
	relatives : localStorage.superheroRelatives,
	aliases : localStorage.superheroAliases,
	gender : localStorage.superheroGender,
	workbase : localStorage.superheroWorkbase,
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
var about = document.getElementById('about');
for(let k = 0 ;k <lisheroes.length ;k++)
{
	hero_name = lisheroes[k].name;
  	about.innerHTML = `<body><header><a href="index.html">Home</a><h1> ${hero_name}</h1></header><main><div id="about-div"><div id="img-div"><img src= ${lisheroes[k].img_url} ></div><div id="about-content"><h2>${lisheroes[k].name }</h2><p><span>Gender : </span>${lisheroes[k].gender}</p><p><span>Power :</span>${lisheroes[k].power}</p><p><span>Work : </span> ${lisheroes[k].workbase}</p><p><span>RELATIVES : </span>${lisheroes[k].relatives}</p><p><span>Aliases : </span>${lisheroes[k].aliases}</p></div></div></main></body>`;
  		
}
