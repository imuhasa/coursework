export const like = () => {
    const likeButton = document.querySelectorAll('.main__card-like');

    likeButton.forEach(e => e.addEventListener('click', () => {
        e.classList.add('active');
    }));
}
