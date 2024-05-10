import { expect } from '@wdio/globals';
import PasteBinPage from '../pageobjects/pasteBin/pasteBin.page.js';

describe('PasteBin Automation', () => {
    beforeEach(async() => {
        await PasteBinPage.open('https://pastebin.com/');
    });

    it.skip('should create a new paste with specified attributes', async () => {
        const message = 'Hello from WebDriver';
        const expiration = '10 Minutes';
        const title = 'helloweb';

        await PasteBinPage.createNewPaste(message, expiration, title);
        await PasteBinPage.takeScreenshot('wdio_task1')
        await expect(PasteBinPage.getPasteTitle()).toHaveText('helloweb');
    });
    
    it('should create a new paste with specified attributes', async () => {
        const code =`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
        const expiration = '10 Minutes';
        const title = 'how to gain dominance among developers';
        const highLighting = "Bash";

        await PasteBinPage.createNewPaste(code, expiration, title, highLighting);
        await PasteBinPage.takeScreenshot('wdio_task2')
        await expect(PasteBinPage.getPasteTitle()).toHaveText(title);
        await expect(PasteBinPage.getConfirmHighlighting()).toHaveText(highLighting)
        await expect(PasteBinPage.getOutputTextCode(2)).toHaveText('git reset $(git commit-tree HEAD^{tree} -m "Legacy code")');
    });
});

