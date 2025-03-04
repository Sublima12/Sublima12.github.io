// menu
var hide = document.getElementById('menu_hidden');
var show = document.getElementById('menu_show');
var menu = document.getElementById('liste-menu');


function menuShow() {
    show = document.getElementById('menu_hidden').style.display = "inline";  
    hide = document.getElementById('menu_show').style.display = "none"; 
    menu = document.getElementById('liste-menu').style.display = "flex";
    }
    function menuHide() {
      show = document.getElementById('menu_hidden').style.display = "none";
      hide = document.getElementById('menu_show').style.display = "inline";
      menu = document.getElementById('liste-menu').style.display = "none";
      }
      // menu fin
      
      
      
      
//fonction pour formulaire feedback 
function sendFeedback() {
            // Récupérer le texte entré dans la zone de texte
            var requeteText = document.getElementById("requete-text").value;
            
            //recuperation valeur radio input et du label selectione
            var selectedRadio = document.querySelector('input[name="choix"]:checked');
            
       
    
    if (selectedRadio) {
         
    var label = document.querySelector('label[for="' + selectedRadio.id + '"]');
                  
            // Vérifier si le champ n'est pas vide
            if (requeteText.trim() !== "") {
                // Créer un lien mailto dynamique avec le texte du formulaire
                var mailtoEdson = "mailto: majoredson16@gmail.com?subject=Message%20de%20la%20page%20feedback%20Sublima&body="+ " Sujet: " + label.innerText + "  \n  " + "  \n  " + encodeURIComponent(requeteText);
                
                // Ouvrir le client de messagerie avec ce lien mailto
                window.location.href = mailtoEdson;
                document.getElementById("reponse-soumetre").innerText = " formulaires envoyé par utilisateur." ;
                }
                else {
                    alert("Veuillez entrer un texte avant d'envoyer!");
                    document.getElementById("reponse-soumetre").innerText = "Veuillez entrer un texte avant d'envoyer!" ;
                }
    } else {
        alert("veuillez choisir un sujet!");
    }
    
}
                
        