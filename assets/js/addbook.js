$(document).ready(function(){
    $(".addbook").on('click', function() {
        $(this).after("<form class='form-container' method='post' action='' id='form'>" +
					 
            "<label for='booktitle'>Titre du livre : </label>" +
            "<input type='text' name='booktitle' id='bookTitle' required /><br/>" +

            "<label for='author'>Auteur : </label>" +
            "<input type='text' name='author' id='author' required /><br/>" +

            "<input type='submit' value='Rechercher' id='searchButton'/><br/> " +

            "<input type='reset' value='Annuler' id='deletedButton'/>" +
            
            "</form>"
        
            );
        $(this).addClass("hidden");
    });
});


/*//vérifier la présence d'une valeur 
var formValid = document.getElementById('searchButton');
var titreDuLivre = document.getElementById('bookTitle');
var missBookTitle = document.getElementById('missBookTitle');

var author= document.getElementById('author');
var missAuthor = document.getElementById ('missAuthor');

formValid.addEventListener('click', validation);

function validation(event){
    //si le champ booktitle est vide
    if (titreDuLivre.validation.valuemissing){
        event.preventDefault();
        missBookTitle.textContent = 'Titre de livre manquant';
        missBookTitle.style.color = 'red';  
    }
    //si le champ author est vide
    if (author.validation.valuemissing){
        event.preventDefault();
        missAuthor.textContent = 'Auteur manquant';
        missAuthor.style.color = 'red';

    }*/




