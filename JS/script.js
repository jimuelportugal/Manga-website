// Home
// Services
// Project

$(document).on("click", "#Home", function () {
    $(".Home").css("display", "block");
    $(".Services").css("display", "none");
    $(".Projects").css("display", "none");
});
$(document).on("click", "#Services", function () {
    $(".Services").css("display", "block");
    $(".Home").css("display", "none");
    $(".Projects").css("display", "none");
});
$(document).on("click", "#Project", function () {
    $(".Projects").css("display", "block");
    $(".Services").css("display", "none");
    $(".Home").css("display", "none");
});





function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }