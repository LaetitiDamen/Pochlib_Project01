$(document).ready(function () {

    function getBookById(id) {
        let book = {};
        const apiKey = "AIzaSyCjGratA-X9f0duOAfVwZt2NmvmRs22Bz8";

        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`,
            dataType: "json",
            method: "GET",

            success: function (data) {
                console.log(data);

                book.id = data.id;
                book.title = data.volumeInfo.title;
                book.authors = data.volumeInfo.authors;
                book.description = data.volumeInfo.description;
                book.image = "assets/logo/unavailable.png";

                if (data.volumeInfo.hasOwnProperty('imageLinks') && data.volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
                    book.image = data.volumeInfo.imageLinks.thumbnail;
                }
                
            },

        })

        return (book);
    }



    /**
     * Session Storage savedBook function
     * @param id
     */
    $("body").on('click', '#bookmark', function () {
        var idbookmark = [];
        idbookmark[0] = $(this).data("id");
        sessionStorage.setItem("bookmarks", JSON.stringify(idbookmark));

        printPochlist(idbookmark);
    })

    function printPochlist(idbookmark) {


        $.each(idbookmark, function (_i, id) {

            var book = getBookById(id);

            $("#content").append(
                "<div class='container-card'>" +
                "<div class='card'>" +
                "<img class='card-img-bottom img-fluid img-thumbnail' src='" + book.image + "'  alt='Card image top'>" +
                "<div class='card-body'>" +
                "<h3 class='card-title'>" + book.title + "</h3> " +
                "<h4 class='card-id'>" + book.id + "</h4>" +
                "<h2 class='card-author'>" + book.authors + "</h2>" +
                "<p class='card-text'>" + book.description + "</p>" +
                "<div id='bookmark' data-id= '" + book.id + "' ><i class='far fa-bookmark'></i></div>" +
                "</div>" +
                "</div>" +

                "</div>");
        })

    }
})