/*function bookSearch(event) {
    event.preventDefault();
    const author = document.getElementById('author');
    const booktitle = document.getElementById('bookTitle');
    
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + booktitle,
        dataType: "json",

        success: function(data) {
            console.log(data)
        },

        type: "GET"
    });
}*/

const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const author = document.getElementById('author');
    const booktitle = document.getElementById('bookTitle');
    
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + booktitle,
        dataType: "json",

        success: function(data) {
            console.log(data)
        },

        type: "GET"
    });
})

/*
kjsdjehfiehfie
*/