import { expect } from '@wdio/globals';
import cloudGooglePage from '../pageobjects/cloud.google/cloudGoogle.page.js';
import results from '../../utils/results.json' assert { type: 'json' };;

describe('Automated Testing Suite for Google Cloud Platform Pricing Calculator', () => {
    beforeEach(async () => {
        await cloudGooglePage.open('https://cloud.google.com/');
    });

    it('should create a new estimate with specified attributes and validate the summary', async () => {
        const settings = {
            search: "Google Cloud Platform Pricing Calculator",
            numberOfInstances: 4,
            options: {
                "Operating System / Software": "Free: Debian, CentOS, CoreOS, Ubuntu",
                "Provisioning Model": "Regular",
                "Machine Family": "General Purpose",
                "Series": "N1",
                "Machine type": "n1-standard-8",
                "GPU Model": "NVIDIA Tesla P100",
                "Number of GPUs": "1",
                "Local SSD": "2x375 GB",
                "Region": "Netherlands (europe-west4)",
                "Committed use discount options": "1 year"
            }
        };

        await cloudGooglePage.createNewEstimate(settings);
        await cloudGooglePage.takeScreenshot("task_3");
        await expect(await cloudGooglePage.getResults()).toEqual(results);
    });
});
