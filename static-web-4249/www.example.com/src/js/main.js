$(document).ready(function () {


  $.ajax({
    url: "./statics/footer.html",
    success: function (response) {
        
      $(".footer").html(response)
    },
  });


});
