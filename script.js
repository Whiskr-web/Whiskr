function showPage(page) {
			
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(page).style.display = "block";
    
}



$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
