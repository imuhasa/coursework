export const renderFavorites = (popki) => {
    const htmlUrl = window.location.href;
    if (htmlUrl === 'http://127.0.0.1:5500/pages/tasks.html') {
        const favoritesWrapper = document.querySelector('.main__favorites-wrapper');
        const array = JSON.parse(popki);
        array.forEach(item => {
            const card = 
            `<div class="main__card books">
                <img src="${item.file}" alt="" class="main__card-img">
                <div class="main__card-item">
                    <p class="main__card-author">${item.author}</p>
                    <h1 class="main__card-name">${item.name}</h1>
                </div>
                <div class="main__card-btn">
                    <img src="../imgs/like_active.png" alt="" class="main__card-like">
                </div>
            </div>`;
        favoritesWrapper.innerHTML += card;
        })
    };
}