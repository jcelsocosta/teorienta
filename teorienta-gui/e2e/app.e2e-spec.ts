import { TeOrientaFrontendPage } from './app.po';

describe('te-orienta-frontend App', function() {
  let page: TeOrientaFrontendPage;

  beforeEach(() => {
    page = new TeOrientaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
