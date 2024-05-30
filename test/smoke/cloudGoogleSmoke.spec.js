import { expect } from '@wdio/globals';
import cloudGooglePage from '../pageobjects/cloud.google/cloudGoogle.page.js';

describe('Smoke Test Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await cloudGooglePage.open('https://cloud.google.com/');
    });

    it('should verify the existence of the add instances button', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await cloudGooglePage.addEstimateElement.click();
        await cloudGooglePage.computeEngineElement.click();
        await expect(await cloudGooglePage.addInstancesButton).toBeDisplayed();
    });

    it('should verify the existence of the add GPUs button', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await cloudGooglePage.addEstimateElement.click();
        await cloudGooglePage.computeEngineElement.click();
        await expect(await cloudGooglePage.addGPUsButton).toBeDisplayed();
    });

    it('should verify the existence of the share button', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await cloudGooglePage.addEstimateElement.click();
        await cloudGooglePage.computeEngineElement.click();
        await expect(await cloudGooglePage.shareButton).toBeDisplayed();
    });
});
