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

// readMoreBtn.innerHTML === 'Więcej'

/*
readMoreBtn.innerHTML = readLessBtn;
moreText.style.display = 'block';*/
