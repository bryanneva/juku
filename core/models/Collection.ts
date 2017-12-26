import {Deck} from "./Deck";

export interface ICollection {
    decks: Deck[];
}

export class Collection implements ICollection {
    decks: Deck[];
}