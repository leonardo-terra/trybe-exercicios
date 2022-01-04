const sum = require('./soma');

describe('Testa valores de soma - Grupo 1', () => {
    it('Testa se a soma de 4 e 5 = 9', () => {
        expect(9).toBe(sum(4, 5));
    })

    it('Testa se a soma de 0 e 0 = 0', () => {
        expect(0).toBe(sum(0, 0));
    })

    it('Lança erro se parâmetros tem string', () => {
        expect(() => { sum(4, "5") }).toThrow;
    })

    it('Lança erro se parâmetros tem string', () => {
        expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
    })
});