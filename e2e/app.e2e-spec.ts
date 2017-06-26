import { Angular2RebootPage } from './app.po';

describe('angular2-reboot App', function() {
  let page: Angular2RebootPage;

  beforeEach(() => {
    page = new Angular2RebootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
