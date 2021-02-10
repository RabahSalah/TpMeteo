
function showCity() {
    // recuperer le nom de la ville
    let nomVilleSelectionnee = document.getElementById("container").value;

    //recuperer la liste des villes disponible 
    let cities = document.getElementsByClassName("city");

    document.getElementById("ville").innerHTML='';
  
    //  parcourir la liste des villes
    for (i=0; i<3; i++) {

        //si la ville choisi corespond 
        if (cities[i].id == nomVilleSelectionnee) {
           
            cities[i].style.display= "block";
            document.getElementById("ville").innerHTML=nomVilleSelectionnee;

        //si la ville choisi corespond pas    
        } else {
	        cities[i].style.display= "none";
        }


    
    }
}