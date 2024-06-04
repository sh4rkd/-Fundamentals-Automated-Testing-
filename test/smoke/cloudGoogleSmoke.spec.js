import { expect } from '@wdio/globals';
import homePage from '../pageobjects/cloud.google/home.page.js';
import searchPage from '../pageobjects/cloud.google/search.page.js';
import calculatorPage from '../pageobjects/cloud.google/calculator.page.js';

describe('Smoke Test Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await homePage.open('https://cloud.google.com/');
    });

    it('should verify the existence of the add instances button', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await searchPage.calculatorLinkElement.click();
        await calculatorPage.addEstimateElement.click();
        await calculatorPage.computeEngineElement.click();
        await expect(await calculatorPage.addInstancesButton).toBeDisplayed();
    });

    it('should verify the existence of the add GPUs button', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await searchPage.calculatorLinkElement.click();
        await calculatorPage.addEstimateElement.click();
        await calculatorPage.computeEngineElement.click();
        await expect(await calculatorPage.addGPUsButton).toBeDisplayed();
    });

    it('should verify the existence of the share button', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await searchPage.calculatorLinkElement.click();
        await calculatorPage.addEstimateElement.click();
        await calculatorPage.computeEngineElement.click();
        await expect(await calculatorPage.shareButton).toBeDisplayed();
    });
});
