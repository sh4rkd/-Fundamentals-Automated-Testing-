import Page from '../../../utils/page.js';

class SummaryPage extends Page {
    get numberOfInstancesValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Number of Instances']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get operatingSystemValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Operating System / Software']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get provisioningModelValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Provisioning Model']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get machineTypeValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Machine type']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get gpuModelValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'GPU Model']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get numberOfGPUsValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Number of GPUs']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get localSSDValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Local SSD']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get regionValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Region']/following-sibling::span[contains(@class, 'Kfvdz')]`); }
    get committedUseDiscountOptionsValue() { return $(`//span[contains(@class, 'Z7Pe2d')]/span[contains(@class, 'zv7tnb') and normalize-space(text()) = 'Committed use discount options']/following-sibling::span[contains(@class, 'Kfvdz')]`); }

    async getResults() {
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
        };
    }
}

export default new SummaryPage();
