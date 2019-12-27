import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
const path = require('path');
const e = process.env.NODE_ENV;
const dir = path.join(__dirname, '../../.env.' + e);
// const dir = path.join(__dirname, '../../.env');
console.log(dir);
const val = require('dotenv').config({ path: dir, debug: true});
console.log(val);
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('dot-env-analysis app is running!');
    // expect(process.env.NODE_ENV).toEqual('dev');
    // expect(process.env.DEV_TEST).toEqual('HI');
    expect(process.env.NODE_ENV).toEqual('staging');
    expect(process.env.DEV_TEST).toEqual('LOW');

    // expect(process.env.NODE_ENV).toEqual('devtest');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
