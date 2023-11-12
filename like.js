const likeButton = document.querySelectorAll('.main__card-like');
console.log(likeButton);

likeButton.onclick = function() {
    for (let i = 0; i < likeButton.length; i++) {
        likeButton.classList.toggle('main__card-like-active');
        console.log(i);
    }
    
}

likeButton.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('main__card-like-active');
}));