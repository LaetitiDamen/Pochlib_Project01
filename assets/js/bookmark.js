$(document).ready(function () {

    /**
     * Get all idbookmarks from sessionStorage
     * @returns {Array} All id bookmarks
     */
    function getBookmarks() {
        bookmarks = sessionStorage.getItem("idBookmarks");

        if (bookmarks == null) {
            return [];
        }

        return JSON.parse(bookmarks);
    }

    /**
     * Add idbookmark to sessionStorage
     * @param {string} idBook 
     */
    function addBookmark(idBook) {
        idBooks = getBookmarks();
        msg = "Votre livre est déjà present dans votre poch'liste";

        if ($.inArray(idBook, idBooks) === -1) {
            idBooks.push(idBook);
            idBooks = JSON.stringify(idBooks);
            sessionStorage.setItem("idBookmarks", idBooks);
            msg = "Votre livre a bien été ajouté à votre poch'liste";
        }
        alert(msg);
    }

    /**
     * Remove idbookmark from sessionStorage
     * @param {string} idBook 
     */
    function removeBookmark(idBook) {
        idBooks = getBookmarks();
        msg = "Ce livre ne fait pas parti de votre poch'liste";

        if (idBooks.indexOf(idBook) >= 0) {
            idBooks.splice(idBooks.indexOf(idBook), 1);
            idBooks = JSON.stringify(idBooks);
            sessionStorage.setItem("idBookmarks", idBooks);
            msg = "Votre livre a bien été supprimé de votre poch'liste";
        }
        alert(msg);
    }

    /**
     * Get book informations by id
     * @param {string} id 
     * @returns {Object} Book info
     */
    function getBookById(id) {
        const apiKey = "AIzaSyCjGratA-X9f0duOAfVwZt2NmvmRs22Bz8";

        return $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`,
            dataType: "json",
            method: "GET",
        }).then(function (data) {
            const book = {};
            book.id = data.id;
            book.title = data.volumeInfo.title;
            book.authors = data.volumeInfo.authors;
            book.description = "";
            book.image = "assets/logo/unavailable.png";

            if (data.volumeInfo.hasOwnProperty('imageLinks') && data.volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
                book.image = data.volumeInfo.imageLinks.thumbnail;
            }
            if (data.volumeInfo.hasOwnProperty('description') && data.volumeInfo.description) {
                book.description = data.volumeInfo.description
                book.description = book.description.slice(0, 199) + "...";
            }

            return book;
        });
    }

    /**
     * Display all bookmarks from sessionStorage to the user
     */
    function printPochlist() {
        idbookmarks = JSON.parse(sessionStorage.getItem("idBookmarks"));

        $("#bookmark-content").empty();
        $.each(idbookmarks, function (_i, id) {
            getBookById(id).then((book) => {
                $("#bookmark-content").append(
                    "<div class='container-card'>" +
                    "<div class='row justify-content-center'>"+
                    "<div class='card'>" +
                    "<img class='card-img-bottom img-fluid img-thumbnail' src='" + book.image + "'  alt='Card image top'>" +
                    "<div class='card-body'>" +
                    "<h3 class='card-title'>" + book.title + "</h3> " +
                    "<h2 class='card-author'>" + book.authors + "</h2>" +
                    "<p class='id-book'>" + book.id + "</p>" +
                    "<p class='card-text'>" + book.description + "</p>" +
                    "<div id='removebookmark' data-id= '" + book.id + "' ><i class='fa fa-trash'></i></div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>");
            });
        })
    }

    /**
     * Add book to sessionStorage
     */
    $("body").on('click', '#addbookmark', function () {
        idBook = $(this).data("id");
        addBookmark(idBook);
        printPochlist();
    });

    /**
     * Remove book to sessionStorage
     */
    $("body").on('click', '#removebookmark', function () {
        idBook = $(this).data("id");
        removeBookmark(idBook);
        printPochlist();
    });

    /**
     * Display bookmarks from start (sessionStorage)
     */
    $("#content").append("<div id='bookmark-content'></div>");
    printPochlist();
})