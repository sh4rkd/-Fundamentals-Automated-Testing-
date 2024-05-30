import Page from '../../../utils/page.js';

class CloudGoogle extends Page {
    get searchIconElement() { return $('.YSM5S[jsname]'); }
    get inputSearchBoxElement() { return $('input[jsname]'); }
    get validateSearchBoxElement() { return $('[jsname="Z5wyCf"][aria-label="Search"]'); }
    get calculatorLinkElement() { return $('[track-name="google cloud pricing calculator"]:not([href*="legacy"])'); }
    get addEstimateElement() { return $('[jsname].UywwFc-vQzf8d'); }
    get computeEngineElement() { return $(`//*[contains(@class, 'honxjf') and contains(text(), 'Compute Engine')]`); }
    get addInstancesButton() { return $('.QiFlid [jsaction="JIbuQc:qGgAE"] button'); }
    get addGPUsButton(){ return $(`button[aria-label="Add GPUs"]`); }
    get shareButton(){ return $(`.FOBRw-vQzf8d[jsname]`); }
    get estimateSummaryButton(){ return $(`.v08BQe a[href*="estimate-preview"]`); }
    get numberOfInstancesValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Number of Instances']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get operatingSystemValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Operating System / Software']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get provisioningModelValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Provisioning Model']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get machineTypeValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Machine type']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get gpuModelValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'GPU Model']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get numberOfGPUsValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Number of GPUs']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get localSSDValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Local SSD']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get regionValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Region']/following-sibling::span[contains(@class, 'Kfvdz')]`)}
    get committedUseDiscountOptionsValue(){ return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Committed use discount options']/following-sibling::span[contains(@class, 'Kfvdz')]`)}



    async createNewEstimate({ search: inputSearch, options }) {
        try {
            await this.searchIconElement.waitForExist();
            await this.searchIconElement.click();
            await this.inputSearchBoxElement.setValue(inputSearch);

            await this.validateSearchBoxElement.waitForExist();
            await this.validateSearchBoxElement.click();

            await this.calculatorLinkElement.waitForExist();
            await this.calculatorLinkElement.click();

            await this.addEstimateElement.waitForExist();
            await this.addEstimateElement.click();

            await this.computeEngineElement.waitForExist();
            await this.computeEngineElement.click();

            for (let i = 0; i < options["Number of Instances"] - 1; i++) {
                await this.addInstancesButton.click();
            }

            for (const [label, option] of Object.entries(options)) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                if(label === 'Number of Instances')continue  
                if(label === 'Machine type')await this.addGPUsButton.click()
                if (label === 'Provisioning Model' || label === 'Committed use discount options') {
                    await this.buttonClickerElement({ label, option });
                } else {
                    await this.dropDownClickerElement({ label, option });
                }
            }

            
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.shareButton.click();
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.estimateSummaryButton.click();
            
            await this.switchToNewTab();
        } catch (error) {
            console.error('Error en la prueba:', error);
        }
    }

    async dropDownClickerElement({label, option}){
        let formattedOption = option
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
        
        if(label === 'Local SSD'){
            formattedOption = option.replace(/x.*/,"")
        }else if(label === 'Region'){
            formattedOption = option.match(/\(([^)]+)\)/)[1]
        }

        const selector = $(`//ul[contains(@aria-label,'${label}')]//li[contains(@data-value,'${formattedOption}')]//div`);
        await (await selector).scrollIntoView();
        try{
            await browser.execute((element) => {
                element.click();
            }, await selector);
        }catch{}
    }

    async buttonClickerElement({label, option}){
        let formattedOption = option
        .toLowerCase()
        .replace(/\(([^)]+)\)/g,"")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");

        const selector = $(`//div[contains(@class, 'XIfRlb') and descendant::div[contains(text(), '${label}')]]/following-sibling::div[contains(@class, 'Iykrdb')]//input[@id='${formattedOption}']`);
        await (await selector).scrollIntoView();
        try{
            await browser.execute((element) => {
                element.click();
            }, await selector);
        }catch{}
    }
    
    async switchToNewTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]); // Cambia al segundo handle que es la nueva pestaña
    }

    async getResults(){
        return {
            "Number of Instances": await this.numberOfInstancesValue.getText(),
            "Operating System / Software": await this.operatingSystemValue.getText(),
            "Provisioning Model": await this.provisioningModelValue.getText(),
            "Machine type": (await this.machineTypeValue.getText()).split(",")[0],
            "GPU Model": await this.gpuModelValue.getText(),
            "Number of GPUs": await this.numberOfGPUsValue.getText(),
            "Local SSD": await this.localSSDValue.getText(),
            "Region": await this.regionValue.getText(),
            "Committed use discount options": await this.committedUseDiscountOptionsValue.getText()
        }
    }

    
}

export default new CloudGoogle();