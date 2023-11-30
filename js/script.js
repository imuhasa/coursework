import { getData } from "./modules/getData.js";
import { renderGoods } from "./modules/renderCards.js";
import { openModal } from "./modules/modal.js";
import { like } from "./modules/like.js";
import { renderFavorites } from "./modules/favorites.js";
import { checkLocalStorage } from "./modules/localStorage.js";
import { auth } from "./modules/authorization.js";
import { logout } from "./modules/logout.js";

const popki = localStorage.getItem('popki');
const urlGoods = 'http://localhost:3000/cards';
const data = await getData(urlGoods);
const urlTasks = 'http://localhost:3000/progress';
const tasksData = await getData(urlTasks);



openModal();
renderGoods(data, tasksData);
like(); 
renderFavorites(popki);
checkLocalStorage();
auth();



logout();
