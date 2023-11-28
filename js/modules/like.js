export const like = () => {
    const likeButton = document.querySelectorAll('.main__card-like');

    likeButton.forEach(e => e.addEventListener('click', () => {
        e.classList.toggle('main__card-like-active');
    }));
}
