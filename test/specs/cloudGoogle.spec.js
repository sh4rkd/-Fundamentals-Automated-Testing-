import { expect } from '@wdio/globals';
import cloudGooglePage from '../pageobjects/cloud.google/cloudGoogle.page.js';

describe('Automated Testing Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await cloudGooglePage.open('https://cloud.google.com/');
    });

    it('should create a new estimate with specified attributes and validate the summary', async () => {
        const {settings, environment} = global
        await cloudGooglePage.createNewEstimate(settings);
        await cloudGooglePage.takeScreenshot(`Framework_task_${environment}`);
        let results = settings.options
        delete results["Machine Family"]
        delete results["Series"]
        await expect(await cloudGooglePage.getResults()).toEqual(results);
    });
});
