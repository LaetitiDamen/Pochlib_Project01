const showForm = () => {
    const myForm = document.querySelector('.form-container');
    console.log(myForm);
    myForm.classList.remove('hidden'); 
};

const addbook = document.querySelector('.addbook');

addbook.addEventListener('click', showForm);

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


