export interface ICard {
    fields: string[];
    content: Array<{field: string, content: any}>;
    due?: Date;
}

export class Card implements ICard {

    constructor(
        public fields: string[],
        public content: Array<{ field: string; content: any }>) {
    }
}