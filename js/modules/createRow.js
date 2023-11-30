export const row = () => {
    const htmlUrl = window.location.href;
    if (htmlUrl === 'http://127.0.0.1:5500/pages/tasks.html') {
        const rowHTML = `
        <li class="modal__new-task-item">
            <div class="modal__item-wrapper">
                <label class="modal__item-label">
                    <input type="checkbox" class="modal__item-checkbox" name="modalItemCheckbox">
                </label>
                <label class="modal__item-text">
                    <input type="text" class="modal__item-name" name="modalTaskName" placeholder="Подзадача...">
                </label>
            </div>
            <button class="modal__del-btn">
                <img src="../imgs/delIcon.png" alt="удалить задачу" class="del-icon">
            </button>
        </li>
        `
    return rowHTML;
    }
}