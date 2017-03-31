import { Ng2hybridPage } from './app.po';

describe('ng2hybrid App', () => {
  let page: Ng2hybridPage;

  beforeEach(() => {
    page = new Ng2hybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
