$(document).ready(function () {

    /**
     * Search books by title and author
     * Call Google Api 
     * @param {string} title 
     * @param {string} author 
     * @returns {Array} book list
     */
    function searchBooks(title, author) {
        const apiKey = "AIzaSyCjGratA-X9f0duOAfVwZt2NmvmRs22Bz8";

        return $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${apiKey}`,
            dataType: "json",
            method: "GET",
        }).then(function (data) {
            const books = [];
            $.each(data.items, function (_i, bookInfo) {

                var book = {};
                book.id = bookInfo.id;
                book.title = bookInfo.volumeInfo.title;
                book.authors = bookInfo.volumeInfo.authors;
                book.description = "";
                book.image = "assets/logo/unavailable.png";

                if (bookInfo.volumeInfo.hasOwnProperty('imageLinks') && bookInfo.volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
                    book.image = bookInfo.volumeInfo.imageLinks.thumbnail;
                }
                if (bookInfo.volumeInfo.hasOwnProperty('description') && bookInfo.volumeInfo.description) {
                    book.description = bookInfo.volumeInfo.description
                    book.description = book.description.slice(0, 199) + "...";
                }
                books.push(book);
            });

            return books;
        });
    }

    /**
     * Display search results to user
     * @param {Object} books 
     */
    function displaySearchResult(books) {

        $("#myBooks div:first").after("<div id='result-content'>" +
            "<hr>" +
            "<h2>Résultats de recherche</h2>" +
            "<section class='card-section'></section>" +
            "</div>");

        $.each(books, function (_i, book) {
            $(".card-section").append(
                "<div class='container-card'>" +
                "<div class='card'>" +
                "<img class='card-img-bottom img-fluid img-thumbnail' src='" + book.image + "'  alt='Card image top'>" +
                "<div class='card-body'>" +
                "<h3 class='card-title'>" + book.title + "</h3> " +
                "<h2 class='card-author'>" + book.authors + "</h2>" +
                "<p class='id-book'>" + book.id + "</p>" +
                "<p class='card-text'>" + book.description + "</p>" +
                "<div id='addbookmark' data-id= '" + book.id + "' ><i class='far fa-bookmark'></i></div>" +
                "</div>" +
                "</div>" +
                "</div>");
        });
    }

    /**
     * Form validator
     * Display results to user depending on the form data
     */
    $("body").on('click', '#searchButton', function (e) {
        e.preventDefault();
        $(".card-section").removeClass("hidden");
        const booktitle = $('#bookTitle').val();
        const author = $('#author').val();

        searchBooks(booktitle, author)
            .then((books) => {
                if (books && books.length) {
                    displaySearchResult(books);
                } else {
                    alert("Vous n'avez pas de résultat");
                }

                console.log('abc')
            });
    })
})