import { BlogTypePage } from './app.po';

describe('blog-type App', () => {
  let page: BlogTypePage;

  beforeEach(() => {
    page = new BlogTypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
