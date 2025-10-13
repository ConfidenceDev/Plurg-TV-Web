$(document).ready(function () {
  $(".carousel").carousel();
});

const banner = document.querySelector(".banner");
const categories = [
  {
    name: "General",
    image: "./assets/icons/plurg.png",
    className: "bg-all",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "News",
    image: "./assets/icons/news.png",
    className: "news",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Entertainment",
    image: "./assets/icons/entertainment.png",
    className: "entertainment",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Movies",
    image: "./assets/icons/movies.png",
    className: "movies",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Sports",
    image: "./assets/icons/sports.png",
    className: "sports",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Science",
    image: "./assets/icons/science.png",
    className: "science",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Business",
    image: "./assets/icons/business.png",
    className: "business",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Lifestyle",
    image: "./assets/icons/lifestyle.png",
    className: "lifestyle",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Nature",
    image: "./assets/icons/nature.png",
    className: "nature",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
  {
    name: "Animation",
    image: "./assets/icons/animation.png",
    className: "animation",
    description:
      "Join other users and enjoy live TV streams including; sports, technology, entertainment, movies, news etc. Install extension now",
  },
];

categories.forEach((category, index) => {
  const div = document.createElement("div");
  div.classList.add("content", category.className);

  if (index === 0) {
    div.classList.add("active");
  }

  div.innerHTML = `
      <img src="${category.image}" alt="${category.name}" class="category-title" />
      <h4><span><i>Live</i></span><span>${category.name}</span></h4>
      <p>${category.description}</p>
      <div class="button">
        <a href="#" onclick="toggleVideo();">
          <i class="fa-solid fa-plus"></i> See Demo
        </a>
      </div>
    `;

  banner.appendChild(div);
});

function toggleVideo() {
  const demo = document.querySelector(".demo");
  const video = document.querySelector("video");
  video.pause();
  demo.classList.toggle("active");
}

function toggleDialog() {
  const guide = document.querySelector(".guide");
  guide.classList.toggle("active");
}

/*function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../assets/images/bg/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}*/

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  const newBgUrl = `url("../assets/images/bg/${bg}")`;

  const img = new Image();
  img.src = newBgUrl;
  img.onload = () => {
    banner.style.backgroundImage = `url("${newBgUrl}")`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";
  };

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}
