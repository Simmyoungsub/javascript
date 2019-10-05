import {Message} from './Message';
import {map} from 'lodash';

export class GoodMessage {
    constructor() {
        this.message = new Message('This is Good Message');
    }

    print() {
        console.log(this.message.message);
    }
}