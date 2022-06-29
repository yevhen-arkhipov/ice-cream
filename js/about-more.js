function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("about-btn");

   if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
      moreText.style.display = "none";
     else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide";
      moreText.style.display = "inline";
    }
  }
}