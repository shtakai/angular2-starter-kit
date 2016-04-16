'use strict';

describe('Angular 2 Starter Kit', function() {

  describe('Home page', function() {
    beforeEach(function() {
      browser.get('/');
    });

    it('should contain homepage header', function() {
      const header = element(by.css('h1'));

      expect(header.isPresent()).toBeTruthy();
      expect(header.getText()).toBe('Save yourself countless hours on perfecting your stack – it\'s already done.');
    });
  });
});
