export const renderGoods = (data, tasksData) => {
    const htmlUrl = window.location.href;

    if (htmlUrl === 'http://127.0.0.1:5500/pages/interesting.html') {
        const cardsWrapper = document.querySelector('.main__cards-wrapper');
        const goodsHTML = data.map(goods => 
            `
                <div class="main__card ${goods.categories}" id="${goods.id}">
                    <img src="/imgs/no_image.png" alt="img" class="main__card-img">
                    <div class="main__card-item">
                        <a href="${goods.authorNameLink}" class="main__card-author">${goods.author}</a>
                        <h1><a href="${goods.cardNameLink}" class="main__card-name">${goods.name}</a></h1>
                    </div>
                    <div class="main__card-btn">
                        <img src="../imgs/like_inactive.png" alt="" class="main__card-like">
                    </div>
                    <div class="main__admin-block">
                        <img src="../imgs/editIcon.png" alt="" id="main__admin-edit">
                        <img src="../imgs/delIcon.png" alt="" id="main__admin-delete">
                    </div> 
                </div>
            `
        );
        
        cardsWrapper.innerHTML += goodsHTML.join('');
    } else if (htmlUrl === 'http://127.0.0.1:5500/pages/tasks.html') {
        const tasksWrapper = document.querySelector('.progress');
        const taskHTML = tasksData.map(tasks => 
            `
                <div class="main__task-item" id="${tasks.taskId}">
                    <p class="main__item-name">${tasks.taskName}</p>
                    <p class="main__item-progress">Процесс выполнения: <span class="main__progress-percentage">15%</span></p>
                    <img src="../imgs/description-icon-before.png" alt="Описание">
                </div>
            `
        );
        tasksWrapper.innerHTML += taskHTML.join('');
    }

}