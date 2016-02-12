
(function (brn, $, window, undefined) {

  $(document).ready(function(){
    document.addEventListener("touchstart", function(){},false);

    // makes dropdown toggles clickable
    $("#main-nav .dropdown-toggle").on("click", function(e){
      e.preventDefault();
      window.location.href = $(this).attr("href");
    });

  })
}(window.brn = window.brn||{}, jQuery, window, undefined));
