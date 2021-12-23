describe('getMiddleChar', () => {
    it('문자열 길이가 홀수일 때', () => {
        expect(getMiddleChar('abcde')).toBe('c')
    });

    it('문자열 길이가 짝수일 때', () => {
        expect(getMiddleChar('qwer')).toBe('we')
    });
})
