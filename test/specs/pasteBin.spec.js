import { expect } from '@wdio/globals';
import PasteBinPage from '../pageobjects/pasteBin/pasteBin.page.js';

describe('PasteBin Automation', () => {
    it('should create a new paste with specified attributes', async () => {
        await PasteBinPage.open();
        await PasteBinPage.createNewPaste('Hello from WebDriver', '10 Minutes', 'helloweb');
        await PasteBinPage.takeScreenshot('evidence')
        await expect(PasteBinPage.getPasteTitle()).toHaveText('helloweb');
    });
});
