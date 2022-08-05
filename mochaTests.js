describe("pow", function() {

    describe("возводит x в степень 3", function() {
    
        before(() => console.log("Тестирование началось"));
        // beforeEach(() => alert(`Перед тестом – начинаем выполнять тест: число Х в степени 3`));
        
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
        
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    }); 
});