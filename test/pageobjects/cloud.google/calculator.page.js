import Page from '../../../utils/page.js';

class CalculatorPage extends Page {
    get addEstimateElement() { return $('[jsname].UywwFc-vQzf8d'); }
    get computeEngineElement() { return $(`//*[contains(@class, 'honxjf') and contains(text(), 'Compute Engine')]`); }
    get addInstancesButton() { return $('.QiFlid [jsaction="JIbuQc:qGgAE"] button'); }
    get addGPUsButton() { return $(`button[aria-label="Add GPUs"]`); }
    get shareButton() { return $(`.FOBRw-vQzf8d[jsname]`); }
    get estimateSummaryButton() { return $(`.v08BQe a[href*="estimate-preview"]`); }

    async createNewEstimate(options) {
        await this.addEstimateElement.waitForExist();
        await this.addEstimateElement.click();
        await this.computeEngineElement.waitForExist();
        await this.computeEngineElement.click();

        for (let i = 0; i < options["Number of Instances"] - 1; i++) {
            await this.addInstancesButton.click();
        }

        for (const [label, option] of Object.entries(options)) {
            await browser.pause(500);
            if (label === 'Number of Instances') continue;
            if (label === 'Machine type') await this.addGPUsButton.click();
            if (label === 'Provisioning Model' || label === 'Committed use discount options') {
                await this.buttonClickerElement({ label, option });
            } else {
                await this.dropDownClickerElement({ label, option });
            }
            await browser.pause(500);
        }
    }

    async dropDownClickerElement({ label, option }) {
        let formattedOption = option
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "");

        if (label === 'Local SSD') {
            formattedOption = option.replace(/x.*/, "");
        } else if (label === 'Region') {
            formattedOption = option.match(/\(([^)]+)\)/)[1];
        }

        const selector = $(`//ul[contains(@aria-label,'${label}')]//li[contains(@data-value,'${formattedOption}')]//div`);
        await selector.scrollIntoView();
        try{
            await browser.execute((element) => {
                element.click();
            }, await selector);
        }catch{}
    }

    async buttonClickerElement({ label, option }) {
        let formattedOption = option
            .toLowerCase()
            .replace(/\(([^)]+)\)/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "");

        const selector = $(`//div[contains(@class, 'XIfRlb') and descendant::div[contains(text(), '${label}')]]/following-sibling::div[contains(@class, 'Iykrdb')]//input[@id='${formattedOption}']`);
        await selector.scrollIntoView();
        try{
            await browser.execute((element) => {
                element.click();
            }, await selector);
        }catch{}
    }
}

export default new CalculatorPage();
