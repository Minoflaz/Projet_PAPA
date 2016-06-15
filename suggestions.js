console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
    //Affichage initial de la liste
    actuListe();

    
    console.log("Le document est pret");

    $('#recherche').keyup(function(e)
    {
        console.log("Évènement keyup");
        
        //Acutalisation en fonction de l'entrée utilisateur
        actuListe();
        
    });

    
    
    $('#suggestions').on('click','li',function() {
        $('#recherche').val($(this).text());
        $('#suggestions').hide();
    });

    //Actualisation de la liste en fonction de se qui est dans la barre de recherche y compris quand elle est vide
    function actuListe () {
        
        $.get('http://localhost:8000/Projet_PAPA/suggestions.php',
                {mot: $('#recherche').val()},
                function (reponse) {
                    console.log("Réponse reçue du serveur: ", reponse);
                    $('#tableau').html(reponse);
                });
    }


    console.log("La mise en place est finie. En attente d'événements...");
});
