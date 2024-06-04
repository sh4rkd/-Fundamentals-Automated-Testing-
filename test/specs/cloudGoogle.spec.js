import { expect } from '@wdio/globals';
import homePage from '../pageobjects/cloud.google/home.page.js';
import searchPage from '../pageobjects/cloud.google/search.page.js';
import calculatorPage from '../pageobjects/cloud.google/calculator.page.js';
import summaryPage from '../pageobjects/cloud.google/summary.page.js';

describe('Automated Testing Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await homePage.open('https://cloud.google.com/');
    });

    it('should create a new estimate with specified attributes and validate the summary', async () => {
        const { settings, environment } = global;
        
        await homePage.searchForCalculator(settings.search);
        await searchPage.goToCalculator();
        await calculatorPage.createNewEstimate(settings.options);

        await browser.pause(2000);
        await calculatorPage.shareButton.click();
        await browser.pause(2000);
        await calculatorPage.estimateSummaryButton.click();
        await browser.switchToWindow((await browser.getWindowHandles())[1]);

        await homePage.takeScreenshot(`Framework_task_${environment}`);

        let results = settings.options;
        delete results["Machine Family"];
        delete results["Series"];
        await expect(await summaryPage.getResults()).toEqual(results);
    });
});

