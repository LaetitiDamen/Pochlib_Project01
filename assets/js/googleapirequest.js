$(document).ready(function(){
    
    $("body").on('click', '#searchButton', function(e){
        e.preventDefault();
        $(".card-section").removeClass("hidden");
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

                $("#myBooks div:first").after("<div id='result-content'>" +
                        "<hr>" +
                        "<h2>Résultats de recherche</h2>" +
                        "<section class='card-section'></section>" +
                        "</div>");

                $.each(data.items, function(i, obj){
                
                    var id = obj.id;
                    var title = obj.volumeInfo.title;
                    var authors = obj.volumeInfo.authors;
                    var description = obj.searchInfo.textSnippet;
                    var image = "assets/logo/unavailable.png";


                    if (obj.volumeInfo.hasOwnProperty('imageLinks') && obj.volumeInfo.imageLinks.hasOwnProperty('thumbnail')){
                        image = obj.volumeInfo.imageLinks.thumbnail; 

                    if(data === true) {
                        $('#result-content').show();
                    } else if (data === false) {
                            alert("Aucun livre n'a été trouvé !");
                        }
                    }

                        $(".card-section").append(
                        "<div class='container-card'>" +
                                "<div class='card'>" +
                                    "<img class='card-img-bottom img-fluid img-thumbnail' src='"+ image +"'  alt='Card image top'>" +
                                    "<div class='card-body'>"+
                                    "<h3 class='card-title'>"+ title + "</h3> " +
                                    "<h4 class='card-id'>" + id + "</h4>" +
                                    "<h2 class='card-author'>" + authors + "</h2>" +
                                    "<p class='card-text'>" + description + "</p>" +
                                    "<i class='far fa-bookmark'></i>" +
                                     "</div>"+
                                     "</div>"+
                               
                        "</div>");
                        
                   
                    });
            
                

                    console.log(id);
                }
            })
    
            type: "GET" 
        
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
