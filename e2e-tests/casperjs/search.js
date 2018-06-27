casper.test.begin('Accessing search input', 4, (test) => {
  const URL = 'http://localhost:8080/';
  const VAL = 'Testing movie search...';
  const PLACEHOLDER = 'Search';
  const SEL = 'div.search-input > input';

  casper.start(URL, function () {
    this.waitForSelector(SEL);
  });

  casper.then(() => {
    test.assertExists(SEL);
  });

  casper.then(function () {
    const input = this.evaluate(sel => document.querySelector(sel), SEL);
    test.assertEquals(input.value, '');
    test.assertEquals(input.placeholder, PLACEHOLDER);
  });

  casper.then(function () {
    this.sendKeys(SEL, VAL);
    const input = this.evaluate(sel => document.querySelector(sel), SEL);
    test.assertEquals(input.value, VAL);
  });

  casper.run(() => {
    test.done();
  });
});

casper.test.begin('Accessing search scopes', 6, (test) => {
  const URL = 'http://localhost:8080/';
  const SEL = 'div.search-bar > div.button-group > button';

  casper.start(URL, function () {
    this.echo(SEL);
    this.waitForSelector(SEL);
  });

  casper.then(function () {
    test.assertExists(SEL);
    const buttons = this.evaluate(sel => document.querySelectorAll(sel), SEL);
    test.assertEquals(buttons.length, 2);
  });

  casper.then(function () {
    const sel1 = `${SEL}.btn.btn-info`;
    const sel2 = `${SEL}.btn.btn-outline-info`;

    const infoButton = this.evaluate(sel => document.querySelector(sel), sel1);

    const outlineInfoButton = this.evaluate(sel => document.querySelector(sel), sel2);

    test.assertEquals(infoButton.innerText, 'Title');
    test.assertEquals(outlineInfoButton.innerText, 'Genre');
  });

  casper.then(function () {
    const sel1 = `${SEL}.btn.btn-info`;
    const sel2 = `${SEL}.btn.btn-outline-info`;

    this.click(sel2);

    const infoButton = this.evaluate(sel => document.querySelector(sel), sel1);

    const outlineInfoButton = this.evaluate(sel => document.querySelector(sel), sel2);

    this.echo(infoButton.outerHTML);
    this.echo(outlineInfoButton.outerHTML);

    test.assertEquals(infoButton.innerText, 'Genre');
    test.assertEquals(outlineInfoButton.innerText, 'Title');
  });

  casper.run(() => {
    test.done();
  });
});
