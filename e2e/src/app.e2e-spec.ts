import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(async () => {
      await browser.wait(browser.waitForAngularEnabled(true));
      await browser.get('/');
      // await page.navigateTo('/start');
      // await browser.wait(protractor.ExpectedConditions.presenceOf(by.css('.btn--start')))
    });
    it('should create partie', async () => {
      await element(by.css('.btn--start')).click();
      await browser.get('/play');
      expect(await element(by.css('body')).getText()).toContain('status');
      await element(by.css('[tab="status"]')).click();
      await browser.get('/play/status');
      expect(await element(by.css('#container')).getText()).toContain('status');

    });
  });
});
