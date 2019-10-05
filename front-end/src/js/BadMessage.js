import {Message} from './Message';
import {map} from 'lodash';

export class BadMessage {
    constructor() {
        this.message = new Message('This is Bad Message');
    }

    print() {
        console.log(this.message.message);
        map([1,2,3], (i) => (i + 1));
    }
}