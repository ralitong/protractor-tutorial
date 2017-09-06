describe('Protractor Demo App', () => {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));


    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    })


    it('should have a title', () => {

        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', () => {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', () => {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');
    });

    it('should have a history', ()=> {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);
        
        add(5, 6);

        expect(history.count()).toEqual(3); 
    });

    it('history should contain the correct result', ()=>{
        add(1, 2);
        add(3, 4);
    
        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('3 + 4'); // This is wrong!
    })

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

})