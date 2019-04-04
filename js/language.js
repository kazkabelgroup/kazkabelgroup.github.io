  var
    lang = 0;
    ru = document.getElementsByClassName("ru");
    by = document.getElementsByClassName("by");
    ua = document.getElementsByClassName("ua");
    uk = document.getElementsByClassName("uk");
changelanguage(1);
function changelanguage(a){
    lang = a;
    if (lang==1){
         for (var ruvar = 0; ruvar < ru.length; ruvar++) {
           ru[ruvar].classList.remove("hide");
        }
        for (var byvar = 0; byvar < by.length; byvar++) {
           by[byvar].classList.add("hide");
        }
        for (var uavar = 0; uavar < ua.length; uavar++) {
           ua[uavar].classList.add("hide");
        }
        for (var ukvar = 0; ukvar < uk.length; ukvar++) {
           uk[ukvar].classList.add("hide");
        }
    }
     if (lang==2){
         for (var byvar = 0; byvar < by.length; byvar++) {
           by[byvar].classList.remove("hide");
        }
        for (var ruvar = 0; ruvar < ru.length; ruvar++) {
           ru[ruvar].classList.add("hide");
        }
        for (var uavar = 0; uavar < ua.length; uavar++) {
           ua[uavar].classList.add("hide");
        }
        for (var ukvar = 0; ukvar < uk.length; ukvar++) {
           uk[ukvar].classList.add("hide");
        }
    }
     if (lang==3){
          for (var uavar = 0; uavar < ua.length; uavar++) {
           ua[uavar].classList.remove("hide");
        }
         for (var byvar = 0; byvar < by.length; byvar++) {
           by[byvar].classList.add("hide");
        }
        for (var ruvar = 0; ruvar < ru.length; ruvar++) {
           ru[ruvar].classList.add("hide");
        }
        for (var ukvar = 0; ukvar < uk.length; ukvar++) {
           uk[ukvar].classList.add("hide");
        }
    }
     if (lang==4){
          for (var ukvar = 0; ukvar < uk.length; ukvar++) {
           uk[ukvar].classList.remove("hide");
        }
          for (var uavar = 0; uavar < ua.length; uavar++) {
           ua[uavar].classList.add("hide");
        }
         for (var byvar = 0; byvar < by.length; byvar++) {
           by[byvar].classList.add("hide");
        }
        for (var ruvar = 0; ruvar < ru.length; ruvar++) {
           ru[ruvar].classList.add("hide");
        }
        
    }
}