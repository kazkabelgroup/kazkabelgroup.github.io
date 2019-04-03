var kazki = document.getElementById("kazki"),
    padanni = document.getElementById("padanni"),
    legends = document.getElementById("legends");
kbut = document.getElementById("kazkibutton"),
    pbut = document.getElementById("padannibutton"),
    lbut = document.getElementById("legendsbutton");
theme = 0;
opc = 0.5;
fontsize = 12;
modalthemewindow = document.getElementsByClassName("modal");

function kazkishow() {

    kazki.classList.remove("hide");
    padanni.classList.add("hide");
    legends.classList.add("hide");
    kbut.classList.add("disabled");
    pbut.classList.remove("disabled");
    lbut.classList.remove("disabled");

}

function padannishow() {

    pbut.classList.add("disabled");
    kbut.classList.remove("disabled");
    lbut.classList.remove("disabled");
    padanni.classList.remove("hide");
    kazki.classList.add("hide");
    legends.classList.add("hide");

}

function legendsshow() {

    pbut.classList.remove("disabled");
    kbut.classList.remove("disabled");
    lbut.classList.add("disabled");
    legends.classList.remove("hide");
    kazki.classList.add("hide");
    padanni.classList.add("hide");

}

function changetheme() {
    if (theme == 0) {
        for (var i = 0; i < modalthemewindow.length; i++) {
            modalthemewindow[i].classList.add("modalblack");
            modalthemewindow[i].classList.remove("modalwhite");
            modalthemewindow[i].classList.remove("modalyellow");
        }
        theme = 1;
    } else if (theme == 1) {
        for (var x = 0; x < modalthemewindow.length; x++) {
            modalthemewindow[x].classList.add("modalyellow");
            modalthemewindow[x].classList.remove("modalblack");
            modalthemewindow[x].classList.remove("modalwhite");
        }
        theme = 2;
    } else if (theme == 2) {
        for (var z = 0; z < modalthemewindow.length; z++) {
            modalthemewindow[z].classList.add("modalwhite");
            modalthemewindow[z].classList.remove("modalblack");
            modalthemewindow[z].classList.remove("modalyellow");
        }
        theme = 0;
    }
}

function changeopacity() {
    if (opc == 0.5) {
        $('.modal-overlay').css('opacity', '0.7');
        opc = 0.7;
    } else if (opc == 0.7) {
        $('.modal-overlay').css('opacity', '0.9');
        opc = 0.9;
    } else if (opc == 0.9) {
        $('.modal-overlay').css('opacity', '0.5');
        opc = 0.5;
    }
}

function changefontsize() {
    if (fontsize == 12) {
        $('.mainapptext').css('font-size', '18px');
        fontsize = 18;
    } else if (fontsize == 18) {
        $('.mainapptext').css('font-size', '24px');
        fontsize = 24;
    } else if (fontsize == 24) {
        $('.mainapptext').css('font-size', '12px');
        fontsize = 12;
    }
}
function OpacityReset(){
	opc=0.5;
}