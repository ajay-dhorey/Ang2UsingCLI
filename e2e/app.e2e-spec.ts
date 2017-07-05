import { Ang2UsingCLIPage } from './app.po';

describe('ang2-using-cli App', () => {
  let page: Ang2UsingCLIPage;

  beforeEach(() => {
    page = new Ang2UsingCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
