import Page from './page.js';

class PasteBinPage extends Page {
    get inputCode() { return $('#postform-text'); }
    get selectExpiration(){ return $('#select2-postform-expiration-container'); }
    get optionsExpiration() { return $$('.select2-results__options li'); }
    get inputTitle() { return $('[name="PostForm[name]"]'); }
    get btnCreate() { return $('.form-btn-container [type="submit"]'); }
    get pasteTitle() { return $('.info-top h1'); }

    async findOptionByText(text) {
        const options = await this.optionsExpiration;
        const option = await options.find(async(element) => await element.getText() === text);
        return option
    }

    async createNewPaste(code, expiration, title) {
        await this.inputCode.setValue(code);
        await this.selectExpiration?.click();
        const optionToClick = await this.findOptionByText(expiration)
        if(optionToClick) optionToClick?.click()
        await this.inputTitle?.setValue(title);
        await this.btnCreate?.click();
    }

    getPasteTitle() {
        return this.pasteTitle;
    }
}

export default new PasteBinPage();
