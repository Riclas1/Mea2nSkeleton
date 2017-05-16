import { Mea2nStartUpPage } from './app.po';

describe('mea2n-start-up App', function() {
  let page: Mea2nStartUpPage;

  beforeEach(() => {
    page = new Mea2nStartUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
