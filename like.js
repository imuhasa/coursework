const likeButton = document.querySelectorAll('.main__card-like');
console.log(likeButton);

likeButton.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('main__card-like-active');
}));