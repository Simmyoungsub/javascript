import {GoodMessage} from './js/GoodMessage';
import {BadMessage} from './js/BadMessage';

const gm = new GoodMessage();
const bm = new BadMessage();

gm.print();
bm.print();

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    import('./js/lazy-load').then(module => {
        module.lazy();
    })
});
