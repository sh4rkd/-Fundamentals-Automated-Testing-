import { browser } from '@wdio/globals'
import fs from 'fs';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://pastebin.com/`)
    }

    async takeScreenshot(filename) {
        const currentDate = new Date().toISOString().replace(/:/g, '-');
        const screenshotPath = `./screenshots/${filename}_${currentDate}.png`;
        try {
            if (!fs.existsSync('./screenshots')) {
                fs.mkdirSync('./screenshots', { recursive: true });
            }
            await browser.saveScreenshot(screenshotPath);
        } catch (error) {
            throw error;
        }
    }
}
