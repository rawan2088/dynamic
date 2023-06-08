let sections = document.querySelectorAll("section");

let header = document.querySelector("#navbar__list");
sections.forEach((e, i) => {
  let newThing = document.createElement("li");

  newThing.innerHTML = `<a href="#section${
    i + 1
  }" class='menu__link'">Section ${i + 1}</a>`;

  header.appendChild(newThing);
});

// * The first method to add an active state
// function n() {
//   sections.forEach((e, i) => {
//     e.classList.remove("active");

//     let height = e.getBoundingClientRect(screenY)["y"];
//     if (-581 < height && height < 100) {
//       e.classList.add("active");
//     }
//   });
// }

// * Another method for adding the active class
const n = new IntersectionObserver((elements) => {
  elements.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("active");
    } else {
      el.target.classList.remove("active");
    }
  });
});

sections.forEach((el) => n.observe(el));

if (screen.width > 800) {
  // document.addEventListener("scroll", n);

  let headerHeight = 50;
  let stop = 0;
  let nav = document.querySelector("header");

  document.addEventListener("scroll", () => {
    if (stop !== 0) {
      clearTimeout(stop);
      nav.style.transition = "0s";
      nav.style.height = 50;
    }

    stop = setTimeout(() => {
      nav.style.transition = ".4s";
      nav.style.height = 0;
    }, 2000);
  });

  //* To get the navbar to stay on hover and to disappear if not hovered for a certain time

  let hover = false;

  nav.addEventListener("mouseleave", () => {
    hover = false;

    if (hover == false) {
      setTimeout(() => {
        nav.style.transition = ".4s";
        nav.style.height = 0;
      }, 2000);
    }
  });

  nav.addEventListener("mouseover", () => {
    clearTimeout(stop);
    hover = true;
    nav.style.transition = "0s";
    nav.style.height = 50;
  });

  document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 50) {
      clearTimeout(stop);
      hover = true;
      nav.style.transition = "0s";
      nav.style.height = 50;
    }
  });
  ham.style.display = "none";
} else {
  let ham = document.querySelector("#ham");
  ham.addEventListener("click", () => {
    let headerContainer = document.querySelector(".navbar__menu");
    ham.style.display = "block";
    headerContainer.classList.toggle("show");
  });
}
//  TODO: Add a comment form
let mainForm = document.querySelector("form");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let textInput = document.querySelector("#commentText");
let submitBtn = document.querySelector("#commentBtn");
let commentsContainer = document.querySelector("#commentsContainer");

let localComments = JSON.parse(localStorage.getItem("comments"));
let comments = [];
if (localComments != null) {
  comments.push(...localComments);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  function error(element) {
    element.classList.add("error");
    let errorMsg = element.nextElementSibling;
    errorMsg.style.display = "block";
  }

  function rmvError(element) {
    element.classList.remove("error");
    let errorMsg = element.nextElementSibling;
    errorMsg.style.display = "none";
  }

  let emailReg = /(\w|\\.)+@\w+.\w+/i;
  if (emailReg.test(userEmail.value) && textInput.value !== "") {
    const comment = {
      userName: userName.value,
      userEmail: userEmail.value,
      comment: textInput.value,
    };

    comments.push(comment);

    localStorage.setItem("comments", JSON.stringify(comments));

    textInput.value = "";
    userEmail.value = "";
    userName.value = "";
  }
  if (!emailReg.test(userEmail.value)) {
    error(userEmail);
  } else if (emailReg.test(userEmail.value)) {
    rmvError(userEmail);
  }

  if (textInput.value == "") {
    error(textInput);
  } else if (textInput.value !== "") {
    rmvError(textInput);
  }

  if (userName.value == "") {
    error(userName);
  } else if (userName.value !== "") {
    rmvError(userName);
  }

  newComment();
});

function newComment() {
  commentsContainer.innerHTML = "";

  for (let user of comments) {
    let newComment = document.createElement("div");
    newComment.classList.add("comment");

    let headingContainer = document.createElement("div");
    headingContainer.classList.add("commentHeading");

    newComment.appendChild(headingContainer);
    let userImage = document.createElement("img");

    userImage.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png";
    headingContainer.appendChild(userImage);

    let commentHeadingTextContainer = document.createElement("div");
    headingContainer.appendChild(commentHeadingTextContainer);

    let header = document.createElement("h3");
    header.textContent = `${user.userName}`;
    commentHeadingTextContainer.appendChild(header);

    let time = document.createElement("time");
    let date = new Date();

    time.innerHTML = `${date.getDate()} - ${
      date.getMonth() + 1
    } - ${date.getFullYear()}`;
    commentHeadingTextContainer.appendChild(time);

    let commentInnerText = document.createElement("p");
    commentInnerText.innerHTML = `${user.comment}`;
    commentInnerText.classList.add("comment__inner");
    newComment.appendChild(commentInnerText);

    let commentsContainer = document.querySelector("#commentsContainer");
    commentsContainer.appendChild(newComment);
  }
}

newComment();

// Remove the no comments h3
let noComments = document.querySelector("#noComments");
if (commentsContainer.childElementCount > 1 && noComments != null) {
  document.querySelector("#noComments").remove();
}

// Scroll to top button
document.addEventListener("scroll", () => {
  let btn = document.querySelector("#totop");
  if (document.body.scrollTop > 300) {
    btn.style.display = "block";
    btn.addEventListener("click", () => {
      document.body.scrollTop = 0;
    });
  } else {
    btn.style.display = "none";
  }
});
