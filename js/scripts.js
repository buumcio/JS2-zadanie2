var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = prompt("Wprowadź imię");

if (allNames.indexOf(newName) === -1) {
	//allNames[allNames.length + 1] = neWName;
	allNames.push(newName);
	console.log(allNames);
	alert("Super! Wprowadziłeś imię, którego jeszcze nie było!");
} else {
	console.log("Wprowadzone imię już istnieje!");
	alert("Wprowadzone imię już jest w spisie imion. Wprowadź inne imię!");
}
