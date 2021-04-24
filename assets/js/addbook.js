$(document).ready(function () {

    /**
     * Display form to search book
     */
    $(".addbook").on('click', function () {
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

    /**
     * Remove form and results
     * Show "addbook" button
     */
    $("body").on('click', '#deletedButton', function () {
        $(".addbook").removeClass("hidden");
        $("#form").remove();
        $("#result-content").remove();
    });

});






