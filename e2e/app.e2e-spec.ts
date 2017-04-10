import { BasketballStatsPage } from './app.po';

describe('basketball-stats App', () => {
  let page: BasketballStatsPage;

  beforeEach(() => {
    page = new BasketballStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
