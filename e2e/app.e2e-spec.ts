import { Ng2PasswordPage } from './app.po';

describe('ng2-password App', function() {
  let page: Ng2PasswordPage;

  beforeEach(() => {
    page = new Ng2PasswordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
