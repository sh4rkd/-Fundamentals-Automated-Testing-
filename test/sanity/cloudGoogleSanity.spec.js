import { expect } from '@wdio/globals';
import cloudGooglePage from '../pageobjects/cloud.google/cloudGoogle.page.js';

describe('Sanity Test Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await cloudGooglePage.open('https://cloud.google.com/');
    });

    it('should verify the existence of the search icon element', async () => {
        await expect(await cloudGooglePage.searchIconElement).toBeDisplayed();
    });

    it('should verify the existence of the input search box element', async () => {
        await cloudGooglePage.searchIconElement.click();
        await expect(await cloudGooglePage.inputSearchBoxElement).toBeDisplayed();
    });

    it('should verify the existence of the validate search box element', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await expect(await cloudGooglePage.validateSearchBoxElement).toBeDisplayed();
    });

    it('should verify the existence of the calculator link element', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await expect(await cloudGooglePage.calculatorLinkElement).toBeDisplayed();
    });

    it('should verify the existence of the add estimate element', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await expect(await cloudGooglePage.addEstimateElement).toBeDisplayed();
    });

    it('should verify the existence of the compute engine element', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await cloudGooglePage.addEstimateElement.click();
        await expect(await cloudGooglePage.computeEngineElement).toBeDisplayed();
    });

    it('test the screenshot for error', async () => {
        await cloudGooglePage.searchIconElement.click();
        await cloudGooglePage.inputSearchBoxElement.setValue('Google Cloud Pricing Calculator');
        await cloudGooglePage.validateSearchBoxElement.click();
        await cloudGooglePage.calculatorLinkElement.click();
        await cloudGooglePage.addEstimateElement.click();
        await expect(await cloudGooglePage.computeEngineElements).toBeDisplayed();
    });
});


