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
        // browser.get('http://juliemr.github.io/protractor-demo/');
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', () => {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');

    });

})