let aboutOpen = () => {
  let about = document.getElementsByClassName('about')[0];
  about.classList.remove("fadeOut");
  about.style.display = "block";
}

let aboutClose = () => {
  let about = document.getElementsByClassName('about')[0];
  about.classList.toggle("fadeOut");
  setTimeout(function() {
    about.style.display = "none";
  }, 800);
}
