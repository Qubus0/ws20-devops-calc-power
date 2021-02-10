const power = require('./power');

describe('check operator', () => {
    it('operator should be "p"', () => {
        expect(power.operator).toBe('p');
    });
});

describe('check function', () => {

    it('2 p 3 should be 8', () => {
        // Arrange
        const x = 2;
        const y = 3;

        // Act
        const result = power.fn(x, y);

        // Assert
        expect(result).toBe(8);
    });

    it('-2 p 3 should be -8', () => {
        // Arrange
        const x = -2;
        const y = 3;

        // Act
        const result = power.fn(x, y);

        // Assert
        expect(result).toBe(-8);
    });

    it('16 p 0.5 should be 4', () => {
        // Arrange
        const x = 16;
        const y = 0.5;

        // Act
        const result = power.fn(x, y);

        // Assert
        expect(result).toBe(4);
    });

    it('2 p -3 should be 0.125', () => {
        // Arrange
        const x = 2;
        const y = -3;

        // Act
        const result = power.fn(x, y);

        // Assert
        expect(result).toBe(0.125);
    });

});