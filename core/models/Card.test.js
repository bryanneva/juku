"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
describe('Card', function () {
    var card;
    var fields;
    var content;
    beforeEach(function () {
        fields = ['question', 'answer'];
        content = [
            { field: 'question', content: 'Dog' },
            { field: 'answer', content: 'Perro' }
        ];
        card = new Card_1.Card(fields, content);
    });
    it('has fields', function () {
        expect(card.fields).toEqual(fields);
    });
    it('has content', function () {
        expect(card.content).toEqual(content);
    });
});
