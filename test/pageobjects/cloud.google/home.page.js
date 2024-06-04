import Page from '../../../utils/page.js';

class HomePage extends Page {
    get searchIconElement() { return $('.YSM5S[jsname]'); }
    get inputSearchBoxElement() { return $('input[jsname]'); }
    get validateSearchBoxElement() { return $('[jsname="Z5wyCf"][aria-label="Search"]'); }

    async searchForCalculator(searchTerm) {
        await this.searchIconElement.waitForExist();
        await this.searchIconElement.click();
        await this.inputSearchBoxElement.setValue(searchTerm);
        await this.validateSearchBoxElement.waitForExist();
        await this.validateSearchBoxElement.click();
    }
}

export default new HomePage();
