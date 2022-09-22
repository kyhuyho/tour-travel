window.addEventListener("load", function () {
  /* hover link effect */
  const headerMenu = document.querySelector(".header-menu");
  const headerLinks = document.querySelectorAll(".header-menu-link");
  const headerSignin = document.querySelector(".header-signin");
  const headerSignup = document.querySelector(".header-signup");
  const headerBox = document.querySelector(".header-box");
  const line = document.createElement("div");
  line.classList.add("line-effect");
  document.body.appendChild(line);
  const spaceTop = 5;
  headerLinks.forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      const coordinates = e.target.getBoundingClientRect();
      const { width, height, top, left } = coordinates;
      line.style.width = `${width}px`;
      line.style.left = `${left}px`;
      line.style.top = `${top + height + spaceTop}px`;
    })
  );
  headerMenu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
  headerSignin.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  headerSignup.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  headerBox.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  if (document.documentElement.offsetWidth <= 767) {
    line.parentNode.removeChild(line);
  }
  headerBox.addEventListener("click", function () {
    headerBox.classList.toggle("is-active");
    document.body.classList.toggle("is-active");
  });
  /* header menu toggle */
  const headerToggleMenu = document.querySelector(".header-toggle-menu");
  headerToggleMenu.addEventListener("click", function (e) {
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-times");
    headerMenu.classList.toggle("is-active");
  });
  document.documentElement.addEventListener("click", function (e) {
    if (
      !headerMenu.contains(e.target) &&
      !e.target.matches(".header-toggle-menu")
    ) {
      headerToggleMenu.classList.remove("fa-times");
      headerToggleMenu.classList.add("fa-bars");
      headerMenu.classList.remove("is-active");
    }
  });
  /* infor slider */
  const headerFixed = document.querySelector(".header-fixed");
  const infor = document.querySelector(".infor");
  const marginInfor = headerFixed.offsetHeight;
  infor.style.marginTop = `${marginInfor}px`;
  $(document).ready(function () {
    $(".infor-image-list").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  /* infor modal video */
  const inforMedia = document.querySelector(".infor-media");
  function createVideo() {
    const template = `<div class="modal">
    <iframe class="modal-video" width="1268" height="713" src="https://www.youtube.com/embed/Au6LqK1UH8g" title="XIN CHÀO VIỆT NAM | DU LỊCH XUYÊN VIỆT | PHIÊN BẢN FLYCAM | HELLO VIET NAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
  }
  inforMedia.addEventListener("click", function (e) {
    createVideo();
  });
  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".modal")) {
      const modal = document.querySelector(".modal");
      modal.parentNode.removeChild(modal);
    }
  });
  /* popular lightbox images  */
  let indexLightboxImage = 0;
  const popularImages = document.querySelectorAll(".popular-image");
  popularImages.forEach((item) =>
    item.addEventListener("click", function (e) {
      const srcImage = e.target.getAttribute("src");
      const template = `<div class="lightbox">
      <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${srcImage}" alt="" class="lightbox-image">
        <i class="fa fa-angle-right lightbox-next"></i>
      </div>
    </div>`;
      document.body.insertAdjacentHTML("afterbegin", template);
    })
  );
  document.body.addEventListener("click", function (e) {
    const lightImage = document.querySelector(".lightbox-image");
    if (!lightImage) return;
    let lightSrc = lightImage.getAttribute("src");
    indexLightboxImage = [...popularImages].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    if (e.target.matches(".lightbox")) {
      const lightbox = document.querySelector(".lightbox");
      lightbox.parentNode.removeChild(lightbox);
    } else if (e.target.matches(".lightbox-next")) {
      indexLightboxImage++;
      if (indexLightboxImage > popularImages.length - 1) indexLightboxImage = 0;
      const newSrc = popularImages[indexLightboxImage].getAttribute("src");
      lightImage.setAttribute("src", newSrc);
    } else if (e.target.matches(".lightbox-prev")) {
      indexLightboxImage--;
      if (indexLightboxImage < 0) indexLightboxImage = popularImages.length - 1;
      const newSrc = popularImages[indexLightboxImage].getAttribute("src");
      lightImage.setAttribute("src", newSrc);
    }
  });
  /* destination slider */
  $(document).ready(function () {
    $(".destination-list").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow:
        "<button type='button' class='slick-prev slick-destination-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next slick-destination-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  });
  /* testimonial slider */
  $(document).ready(function () {
    $(".testimonial-list").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow:
        "<button type='button' class='slick-prev slick-testimonial-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next slick-testimonial-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  });
  /* question accordion */
  const questionItems = document.querySelectorAll(".question-item-top");
  questionItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      const questionContent = e.target.nextElementSibling;
      const questionContentHeight = questionContent.scrollHeight;
      questionContent.style.height = `${questionContentHeight}px`;
      questionContent.classList.toggle("is-active");
      e.target.classList.toggle("is-active");
      if (!questionContent.classList.contains("is-active"))
        questionContent.style.height = 0;
      const questionIcon = e.target.querySelector(".question-icon");
      questionIcon.classList.toggle("fa-plus");
      questionIcon.classList.toggle("fa-minus");
    })
  );
  /* contact email validation */
  const contactEmail = document.querySelector(".contact-email");
  contactEmail.addEventListener("input", function (e) {
    const value = e.target.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value) {
      e.target.classList.remove("invalid");
      return;
    }
    if (regexEmail.test(value)) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
    }
  });
});
