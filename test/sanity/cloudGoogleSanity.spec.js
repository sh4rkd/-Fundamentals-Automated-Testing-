import { expect } from '@wdio/globals';
import homePage from '../pageobjects/cloud.google/home.page.js';
import searchPage from '../pageobjects/cloud.google/search.page.js';
import calculatorPage from '../pageobjects/cloud.google/calculator.page.js';

describe('Sanity Test Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await homePage.open('https://cloud.google.com/');
    });

    it('should verify the existence of the search icon element', async () => {
        await expect(await homePage.searchIconElement).toBeDisplayed();
    });

    it('should verify the existence of the input search box element', async () => {
        await homePage.searchIconElement.click();
        await expect(await homePage.inputSearchBoxElement).toBeDisplayed();
    });

    it('should verify the existence of the validate search box element', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await expect(await homePage.validateSearchBoxElement).toBeDisplayed();
    });

    it('should verify the existence of the calculator link element', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await expect(await searchPage.calculatorLinkElement).toBeDisplayed();
    });

    it('should verify the existence of the add estimate element', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await searchPage.calculatorLinkElement.click();
        await expect(await calculatorPage.addEstimateElement).toBeDisplayed();
    });

    it('should verify the existence of the compute engine element', async () => {
        await homePage.searchIconElement.click();
        await homePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await homePage.validateSearchBoxElement.click();
        await searchPage.calculatorLinkElement.click();
        await calculatorPage.addEstimateElement.click();
        await expect(await calculatorPage.computeEngineElement).toBeDisplayed();
    });
});


