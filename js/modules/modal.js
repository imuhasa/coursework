// const toBase64 = file => new Promise((resolve, reject) => {
//     let reader = new FileReader();
//     reader.addEventListener('loadend', () => {
//         resolve(reader.result);
//     })

//     reader.addEventListener('error', err => {
//         reject(err);
//     })

//     reader.readAsDataURL(file);
// });

export const openModal = () => {
    const htmlUrl = window.location.href;
    const URL_GOODS = 'https://plaid-almondine-fisher.glitch.me/cards';

    console.log(URL_GOODS);

    if (htmlUrl === 'http://127.0.0.1:5500/index.html') {
        const modalWrapper = document.querySelector('.modal__wrapper');
        const modalReg = document.querySelector('.reg__wrapper');
        const modalAuth = document.querySelector('.auth__wrapper');

        window.addEventListener('click', ({target}) => {
            if (target.classList.contains('registration')) {
                modalWrapper.style.display = 'block';
                modalReg.style.display = 'flex';
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                modalReg.style.display = 'none';
            }
            if (target.classList.contains('authorization')) {
                modalWrapper.style.display = 'block';
                modalAuth.style.display = 'flex';
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                modalAuth.style.display = 'none';
            }
            if (target.classList.contains('auth__text-bold')) {
                modalReg.style.display = 'flex';
                modalAuth.style.display = 'none';
            } else if (target.classList.contains('reg__text-bold')) {
                modalAuth.style.display = 'flex';
                modalReg.style.display = 'none';
            }
        })
    } else if (htmlUrl === 'http://127.0.0.1:5500/pages/interesting.html') {
        const modalWrapper = document.querySelector('.modal__wrapper');
        const createCardModal = document.querySelector('.create__card-modal');
        const mainCardModal = document.querySelector('.main__card-modal-page');

        window.addEventListener('click', ({target}) =>{
            if (target.classList.contains('main__add-card')) {
                modalWrapper.style.display = 'block';
                createCardModal.style.display = 'block';
                
                const form = document.querySelector('.create__form-container');
                const author = document.getElementById('create__author-name');
                const name = document.getElementById('create__card-name');
                const description = document.getElementById('create__card-desc');
                const file = document.getElementById('create__card-file');
                const preview = document.querySelector('.preview-img');
                const authorNameLink = document.getElementById('create-card__author-name-link');
                const cardNameLink = document.getElementById('create-card__card-name-link');
                const addBooks = document.getElementById('add-books');
                const addArticles = document.getElementById('add-articles');
                const addConferences = document.getElementById('add-conferences');
                const addToPeoples = document.getElementById('add-toPeoples');
                const pageHeading = document.querySelector('.main__modal-heading');
                const pageName = document.querySelector('.main__modal-name');
                const pageDesc = document.querySelector('.main__modal-text');
                
                addBooks.addEventListener('input', () => {
                    addBooks.value;
                });
                addArticles.addEventListener('input', () => {
                    addArticles.value;
                });
                addConferences.addEventListener('input', () => {
                    addConferences.value;
                });
                addToPeoples.addEventListener('input', () => {
                    addToPeoples.value;
                });

                author.addEventListener('input', () => {
                    let value = author.value;
                    const regEx = /[^\s]/
        
                    if (value.trim() == '' || !regEx.test(value)) {
                        author.style.outline = 'none';
                        author.style.borderColor = '#f00';
                        author.value = '';
                        author.placeholder = 'Поле не может быть пустым'
                    }else{
                        value = value.trim();
                        author.style.border = '2px solid rgb(118,118,118)';
                    }
                });
                name.addEventListener('input', () => {
                    let value = name.value;
                    const regEx = /[^\s]/
        
                    if (value.trim() == '' || !regEx.test(value)) {
                        name.style.outline = 'none';
                        name.style.borderColor = '#f00';
                        name.value = '';
                        name.placeholder = 'Поле не может быть пустым'
                    }else{
                        value = value.trim();
                        name.style.border = '2px solid rgb(118,118,118)';
                    }
                });
                description.addEventListener('textarea', () => {
                    let value = description.value;
                    const regEx = /[^\s]/
        
                    if (value.trim() == '' || !regEx.test(value)) {
                        description.style.outline = 'none';
                        description.style.borderColor = '#f00';
                        description.value = '';
                        description.placeholder = 'Поле не может быть пустым'
                    }else{
                        value = value.trim();
                        cardDesc.style.border = '2px solid rgb(118,118,118)';
                    }
                });
                file.addEventListener('change', async( ) => {
                    if(file.files.length > 0 && file.files[0].size < 1048576){
                        const src = URL.createObjectURL(file.files[0]);
                        preview.style.display = 'block';
                        preview.style.width = "100px";
                        preview.style.height = "100px";
                        preview.style.border = "1px solid #A1D5FF";
                        preview.style.borderRadius = "5px";
                        preview.style.margin = "auto";
                        preview.style.marginTop = "10px";
                        preview.src = src;
                        
                    }else{
                        preview.removeAttribute('src');
                    }
                });
                authorNameLink.addEventListener('input', () => {
                    let value = authorNameLink.value;
                    const regEx = /[^\s]/
        
                    if (value.trim() == '' || !regEx.test(value)) {
                        authorNameLink.style.outline = 'none';
                        authorNameLink.style.borderColor = '#f00';
                        authorNameLink.value = '';
                        authorNameLink.placeholder = 'Поле не может быть пустым'
                    }else{
                        value = value.trim();
                        authorNameLink.style.border = '2px solid rgb(118,118,118)';
                    }
                });
                cardNameLink.addEventListener('input', () => {
                    let value = cardNameLink.value;
                    const regEx = /[^\s]/
        
                    if (value.trim() == '' || !regEx.test(value)) {
                        cardNameLink.style.outline = 'none';
                        cardNameLink.style.borderColor = '#f00';
                        cardNameLink.value = '';
                        cardNameLink.placeholder = 'Поле не может быть пустым'
                    }else{
                        value = value.trim();
                        cardNameLink.style.border = '2px solid rgb(118,118,118)';
                    }
                });

                form.addEventListener('submit', async(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.target);
                    const newGoods = Object.fromEntries(formData);
        
                    // newGoods.image = await toBase64(newGoods.image);
        
                    fetch(URL_GOODS,{
                        method:'POST',
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body:JSON.stringify(newGoods),
                    }).then(modalWrapper.style.display = 'none', 
                            createCardModal.style.display = 'none');
        
                    setTimeout(() => location.reload(), 1000);
                });


            
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                createCardModal.style.display = 'none';
            }
            if (target.classList.contains('main__card-img')) {
                modalWrapper.style.display = 'block';
                mainCardModal.style.display = 'flex';
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                mainCardModal.style.display = 'none';
            }
            
            
        });



    } else if (htmlUrl === 'http://127.0.0.1:5500/pages/tasks.html') {
        const modalWrapper = document.querySelector('.modal__wrapper');
        const modalNewTask = document.querySelector('.modal__new-task');
        const modalEditTask = document.querySelector('.modal__edit-task');

        window.addEventListener('click', ({target}) => {
            if (target.classList.contains('main__add-img')) {
                modalWrapper.style.display = 'block';
                modalNewTask.style.display = 'flex';
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                modalNewTask.style.display = 'none';
            }
            if (target.classList.contains('main__task-item')) {
                modalWrapper.style.display = 'block';
                modalEditTask.style.display = 'flex';
            } else if (target.classList.contains('modal__wrapper')) {
                modalWrapper.style.display = 'none';
                modalEditTask.style.display = 'none';
            } 
        })
    }

    
}