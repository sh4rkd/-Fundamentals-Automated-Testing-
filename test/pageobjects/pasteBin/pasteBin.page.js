import Page from '../../../utils/page.js';

class PasteBinPage extends Page {
    get inputCode() { return $('#postform-text'); }
    get selectExpiration(){ return $('#select2-postform-expiration-container'); }
    get optionsExpiration() { return $$('.select2-results__options li'); }
    get selectHighlighting(){ return $('#select2-postform-format-container'); }
    get inputTitle() { return $('[name="PostForm[name]"]'); }
    get btnCreate() { return $('.form-btn-container [type="submit"]'); }
    get pasteTitle() { return $('.info-top h1'); }
    get outputCode() { return $$('.source li'); }
    get confirmHighlighting() { return $('.top-buttons a[href*="archive"]'); }

    async findOptionByText(text) {
        const options = await this.optionsExpiration;
        const option = await options.find(async(element) => await element.getText() === text);
        return option
    }

    async dropdownClick(element, text){
        if(text){
            await element.click();
            const optionToClick = await this.findOptionByText(text);
            if(optionToClick) optionToClick.click();
        }
    }

    async createNewPaste(code, expiration, title, highlighting) {
        await this.inputCode.setValue(code);
        await this.dropdownClick(this.selectExpiration, expiration)
        await this.dropdownClick(this.selectHighlighting, highlighting);
        await this.inputTitle.setValue(title);
        await this.btnCreate.click();
    }

    getPasteTitle() {
        return this.pasteTitle;
    }

    getInputCode(){
        return this.inputCode;
    }

    getOutputTextCode(index){
        return this.outputCode[index-1];
    }

    getConfirmHighlighting(){
        return this.confirmHighlighting;
    }
}

export default new PasteBinPage();
