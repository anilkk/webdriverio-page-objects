// wdio.page.js
import Page from './page'

class WdioPage extends Page {

    get search() { return $('#search_input_react') }
    get helpLink() { return $('header > div > nav > ul > li:nth-child(3) > a') }

    async open() {
        super.open('docs/gettingstarted.html')
    }

    async navigateToHelp() {
        const helpLink = await this.helpLink;
        await helpLink.click();
    }

}

export default new WdioPage()