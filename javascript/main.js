/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var logo = document.getElementById("logo");
    if (logo.classList.contains("rotate-right")){
      logo.classList.remove("rotate-right")
      logo.classList.add("rotate-left")
    } else {
      logo.classList.remove("rotate-left")
      logo.classList.add("rotate-right")
    }
  }