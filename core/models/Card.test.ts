import {Card, ICard} from "./Card";

describe('Card', () => {
    let card: ICard;
    let fields: string[];
    let content;
    beforeEach(() => {
        fields = ['question', 'answer'];
        content = [
            {field: 'question', content: 'Dog'},
            {field: 'answer', content: 'Perro'}
        ];

        card = new Card(fields, content);
    });

    it('has fields', () => {
        expect(card.fields).toEqual(fields);
    });

    it('has content', () => {
        expect(card.content).toEqual(content);
    })
});