import { P1Page } from './app.po';

describe('p1 App', () => {
  let page: P1Page;

  beforeEach(() => {
    page = new P1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
