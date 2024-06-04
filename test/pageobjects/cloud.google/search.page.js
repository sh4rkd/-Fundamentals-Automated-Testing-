import Page from '../../../utils/page.js';

class SearchPage extends Page {
    get calculatorLinkElement() { return $('[track-name="google cloud pricing calculator"]:not([href*="legacy"])'); }

    async goToCalculator() {
        await this.calculatorLinkElement.waitForExist();
        await this.calculatorLinkElement.click();
    }
}

export default new SearchPage();
