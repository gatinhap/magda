function readMore(goToParent) {
    let readMoreBtn = goToParent.parentNode.querySelector('.moreBtn');
    const moreText = goToParent.parentNode.querySelector('.more');
    let readLessBtn = readMoreBtn.dataset.title;

    if (moreText.style.display === 'none') {
        readMoreBtn.innerHTML = 'Więcej';
        moreText.style.display = 'none';
    } else {
        readMoreBtn.innerHTML = readLessBtn;
        moreText.style.display = 'block';
    }
}

function showNav() {
    const x = document.getElementById("aside");
    if (x.className === "aside") {
        x.className += " responsive";
    } else {
        x.className = "aside";
    }
}

function hideNav() {
    const element = document.getElementById("aside");
    element.classList.remove("responsive");
}

const menuItems = document.querySelectorAll(".nav__list li");

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", hideNav);
});

const exitMenu = document.querySelector('.nav_mobile--exit');

exitMenu.addEventListener("click", hideNav);

function showArrow() {
    if (window.pageYOffset >= 200) {
        document.getElementById("sticky").style.display = "block";
    } else document.getElementById("sticky").style.display = "none";
}

document.addEventListener("scroll", showArrow);


// readMoreBtn.innerHTML === 'Więcej'

/*
readMoreBtn.innerHTML = readLessBtn;
moreText.style.display = 'block';*/
