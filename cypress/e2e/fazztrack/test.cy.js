import examplePage from '../page/examplePage.js';
import verifyTable from '../page/verifyTable.js';

describe('Cypress Basic 1', () => {
    context('Homepage', () => {
        it('Correct Text', () => {
            //visit
            cy.visit('/')
            //verify h1 = koligrum web playground
            cy.get('h1')
            .should('have.text', 'Koligrum Web Playground');
            //verify progress bar
            cy.get('[role=progressbar]')
            .should('be.visible')
            .and($text => {
                expect($text).to.contain('1 / 10')
            });
            cy.get('#inputQuote')
            .should('be.visible');
        });
    });
});

describe('Cypress Basic 2', () => {
    it('Verify list of options', () => {
        cy.visit('/');
        const optionList = ['White', 'Yellow', 'Cyan', 'Magenta', 'Blue'];
        cy.get('select.form-control > option')
        .should($list => {
            //total list 5
            expect($list).to.have.length(5)
            
            //verify all value
            for (let i=0; i < $list.length; i++) {
                expect($list.eq(i)).to.contain(optionList[i]);
            };
        });
    });

    it('Check Input', () => {
        const ExamplePage = new examplePage();
        cy.visit('/');

        const quote = ['fahmi','idris','bogor'];
        const color = ['Blue', 'White', 'Cyan'];

        for (let i=0; i < quote.length; i++) {
            ExamplePage.inputQuote(quote[i]);
            ExamplePage.selectColor(color[i]);
            ExamplePage.clickButton();
        };

        // cy.get('p[name=quoteText]').then($listQuotes)
    });

    it("Delete data 'You can do it!!!'", () => {
        cy.get('[name=quotePanel] .panel-body [name=quoteText]')
        .first()
        .should('have.text','You Can do it!!!').click();
    });

    it('Check hover function', () => {
        cy.get('#tableView').click();
        cy.get('#buttonShowTable').trigger('mouseover');
    })
});

describe('Cypress verify table view section', () => {
    context('Verify table visible', () =>{
        const verifytable = new verifyTable();

        it('Verify Head Column', () => {
            const headColumn = ['Quotes', 'Color'];
            
            verifytable.verifyHead(headColumn);            
        });

        it('Verify Quote Column', () => {
            const quote = ['fahmi','idris','bogor'];
            
            verifytable.verifyColumnQuote(quote);
        });
        
        it('Verify Color Column', () => {
            const color = ['Blue', 'White', 'Cyan'];

            verifytable.verifyColumnColor(color);
        });
    });
});

describe('Check function of hide button',() => {
    it('Hover hide button',() => {
        cy.get('#buttonHideTable.btn-info').trigger('mouseover');
    });
});

describe('Check function click show table after 10 seconds',() => {
    it('Click the button',() => {
        cy.get('#buttonShowAfterTen').click();
    });
    it('Wait 10 seconds or 10.000 miliseconds', () =>{
        cy.wait(10000);
    });
    context('Verify table visible', () =>{
        const verifytable = new verifyTable();

        it('Verify Head Column', () => {
            const headColumn = ['Quotes', 'Color'];
            
            verifytable.verifyHead(headColumn);            
        });

        it('Verify Quote Column', () => {
            const quote = ['fahmi','idris','bogor'];
            
            verifytable.verifyColumnQuote(quote);
        });
        
        it('Verify Color Column', () => {
            const color = ['Blue', 'White', 'Cyan'];

            verifytable.verifyColumnColor(color);
        });
    });
});