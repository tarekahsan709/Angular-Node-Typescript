import { browser, logging } from 'protractor';
import { CefaloEcommercePages } from './app.po';

describe('Component: App', () => {
  let page: CefaloEcommercePages;

  beforeEach(() => {
    page = new CefaloEcommercePages();
  });

  it('should display the expanded navbar for high resolutions', async () => {
    browser.manage().window().setSize(1024, 768);
    await page.navigateTo();
    expect(await page.getNavbarElement(0)).toEqual('Login');
    expect(await page.getNavbarElement(1)).toEqual('Register');
    expect(await page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', async () => {
    browser.manage().window().setSize(640, 480);
    await page.navigateTo();
    expect(await page.getNavbarButton()).toEqual('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
