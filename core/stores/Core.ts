import {Deck, ICollection} from "../models";

export class Core implements ICollection {
    readonly decks: Deck[] = [];

    constructor(decks?: Deck[]) {
        if (decks) {
            this.decks = decks;
        }
    }
}