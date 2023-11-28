import { getData } from "./modules/getData.js";
import { renderGoods } from "./modules/renderCards.js";
import { openModal } from "./modules/modal.js";
import { like } from "./modules/like.js";

const urlGoods = 'https://plaid-almondine-fisher.glitch.me/cards';
const data = await getData(urlGoods);
const urlTasks = 'https://plaid-almondine-fisher.glitch.me/tasks';
const tasksData = await getData(urlTasks);

openModal();
renderGoods(data, tasksData);
like(); 

