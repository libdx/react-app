casper.test.begin("Accessing search input", 4, function(test) {

    const URL = 'http://localhost:8080/'
    const VAL = "Testing movie search..."
    const PLACEHOLDER = "Search"
    const SEL = 'div.search-input > input'

    casper.start(URL, function() {
        this.waitForSelector(SEL)
    })

    casper.then(function() {
        test.assertExists(SEL)
    })

    casper.then(function() {
        var input = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, SEL)
        test.assertEquals(input.value, '')
        test.assertEquals(input.placeholder, PLACEHOLDER)
    })

    casper.then(function() {
        this.sendKeys(SEL, VAL)
        var input = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, SEL)
        test.assertEquals(input.value, VAL)
    })

    casper.run(function() {
        test.done()
    })
})

casper.test.begin("Accessing search scopes", 6, function(test) {
    const URL = 'http://localhost:8080/'
    const SEL = 'div.search-bar > div.button-group > button'

    casper.start(URL, function() {
        this.echo(SEL)
        this.waitForSelector(SEL)
    })

    casper.then(function() {
        test.assertExists(SEL)
        var buttons = this.evaluate(function(sel) {
            return document.querySelectorAll(sel)
        }, SEL)
        test.assertEquals(buttons.length, 2)
    })

    casper.then(function() {
        var sel1 = SEL + '.btn.btn-info'
        var sel2 = SEL + '.btn.btn-outline-info'

        var infoButton = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, sel1)

        var outlineInfoButton = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, sel2)

        test.assertEquals(infoButton.innerText, 'Title')
        test.assertEquals(outlineInfoButton.innerText, 'Genre')
    })

    casper.then(function() {
        var sel1 = SEL + '.btn.btn-info'
        var sel2 = SEL + '.btn.btn-outline-info'

        this.click(sel2)

        var infoButton = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, sel1)

        var outlineInfoButton = this.evaluate(function(sel) {
            return document.querySelector(sel)
        }, sel2)

        this.echo(infoButton.outerHTML)
        this.echo(outlineInfoButton.outerHTML)

        test.assertEquals(infoButton.innerText, 'Genre')
        test.assertEquals(outlineInfoButton.innerText, 'Title')
    })

    casper.run(function() {
        test.done()
    })
})
