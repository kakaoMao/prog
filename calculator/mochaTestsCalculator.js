describe("Calculator testing", function() {

    describe("Calculator.NumImput", function() {
    
        before(() => console.log("Тестирование началось"));
        // beforeEach(() => alert(`Перед тестом – начинаем выполнять тест: число Х в степени 3`));
        
        function makeTest(x, y) {
            let expected = x + y;
            it(`${x} + 10 equals to ${expected}`, function() {
                assert.equal(calculator.calculating(x, 10), expected);
            });
        }
        

        for (let x = 1; x <= 5; x++) {
            makeTest(x, 10);
        }

    }); 
});