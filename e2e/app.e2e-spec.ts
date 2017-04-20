import { ClasePage } from './app.po';

describe('clase App', () => {
  let page: ClasePage;

  beforeEach(() => {
    page = new ClasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
