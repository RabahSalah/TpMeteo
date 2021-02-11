
function showCity() {

	
	
	let nomVilleSelectionnee = document.getElementById("container").value;
	let cities = document.getElementsByClassName("city");

    	document.getElementById("ville").innerHTML='';
  
    for (i=0; i<3; i++) {
        if (cities[i].id == nomVilleSelectionnee) {
           cities[i].style.display= "block";
            
	document.getElementById("ville").innerHTML=nomVilleSelectionnee;

                } else {
	          cities[i].style.display= "none";
        }
    }
}
