import {Card} from "./Card";

export interface IDeck {
    name: string;
    cards: Card[];
}

export class Deck implements IDeck {
    name: string;
    cards: Card[];

    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }

}