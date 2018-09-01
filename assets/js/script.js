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

var fixed = false;
var mountainBottom;
var sunset = $("#sunset")
var starWrapper = $(".starWrapper");
var mountains = $('.mountains');
var windowWidth = $(window).width();

$(document).scroll(function() {
  if($(window).scrollTop() > 548) {
    sunset.css("position", "absolute");
    sunset.css("margin-top", "548px");
    var bottom = String(sunset.height());
    starWrapper.css("margin-top", bottom+"px")
  } else {
    sunset.css("position", "fixed");
    sunset.css("margin-top", "0px");
  }

  if($(window).width() > 1490) {
    var screenWidth = $(window).width();
    bottom = sunset.height() - ((screenWidth - 1489) / 6);
    bottom = String(bottom);
    starWrapper.css("margin-top", bottom+"px")
  }

  var scrollBottom = $(window).scrollTop() + $(window).height();
  if(fixed === false) {
    mountainBottom = mountains.offset().top + mountains.height();
  }
  if(scrollBottom > mountainBottom) {
    mountains.css("position", "fixed");
    mountains.css("margin-top", "20vh");
    fixed = true;
  }
  if(scrollBottom < mountainBottom) {
    mountains.css("position", "relative");
    mountains.css("margin-top", "-900px");
    fixed = false;
  }
});

$(window).resize(function() {
  var bottom = String(sunset.height());
  starWrapper.css("margin-top", bottom+"px")
  if($(window).width() > 1490) {
    var screenWidth = $(window).width();
    bottom = sunset.height() - ((screenWidth - 1489) / 6);
    bottom = String(bottom);
    starWrapper.css("margin-top", bottom+"px")
  }
  windowWidth = $(window).width() - windowWidth;
  if(fixed === true) {
    mountainBottom += windowWidth;
  }
});

var messageVue = new Vue({
  el: '#message',
  data: {
    user: {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitMessage: function() {
      var messageData = {
        name: this.user.name,
        email: this.user.email,
        message: this.user.message
      }
      // $.post("/message", messageData);
    }
  }
});
