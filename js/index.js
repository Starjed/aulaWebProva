function ocultar() {
    $('#myModal').modal('hide');
}


function gitAcess() {
    open("https://github.com/Starjed")
}

function linkedinAcess() {
    open("https://www.linkedin.com/in/gabriel-moitinho-de-albuquerque-883b281a0/")
}


function scrollTo() {
    $(".accordion-body").on("shown.bs.collapse") {
        var selected = $(this);
        var collapseh = $(".collapse.in").height();
        $.scrollTo(selected, 500, {
            offset: -(collapseh)
        });
    }; 
}
