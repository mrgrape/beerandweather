import { BeerandweatherPage } from './app.po';

describe('beerandweather App', () => {
  let page: BeerandweatherPage;

  beforeEach(() => {
    page = new BeerandweatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
