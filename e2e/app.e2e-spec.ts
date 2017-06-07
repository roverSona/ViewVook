import { ViewVookPage } from './app.po';

describe('view-vook App', () => {
  let page: ViewVookPage;

  beforeEach(() => {
    page = new ViewVookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
