$(document).ready(function(){
    
    $("body").on('click', '#searchButton', function(e){
        e.preventDefault();
        var booktitle = $('#bookTitle').val();
        var author = $('#author').val();
        const apiKey = "AIzaSyCjGratA-X9f0duOAfVwZt2NmvmRs22Bz8";

        console.log(booktitle);
        console.log(author);
        
        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${booktitle}+inauthor:${author}&key=${apiKey}`,
            dataType: "json",
    
            success: function(data) {
                console.log(data)
            },
    
            type: "GET"
        })
    })
})

/*const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let author = document.getElementById('author');
    let booktitle = document.getElementById('bookTitle');
    
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=Intitule:${booktitle}+inauthor:${author}&key=${apiKey}`,
        dataType: "json",

        success: function(data) {
            console.log(data)
        },

        type: "GET"
    })
})*/
