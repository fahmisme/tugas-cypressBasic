class verifyTable{
    loopData(data,list){
        for (let i=0; i < list.length; i++) {
            expect(list.eq(i)).to.contain(data[i]);
        };
    };

    verifyHead(data){
        cy.get('thead tr th').should($list => {
            this.loopData(data, $list)
        });
    };

    verifyColumnQuote(data){
        cy.get('[name=tableColumnQuote]').should($list => {
            this.loopData(data, $list)
        });
    };

    verifyColumnColor(data){
        cy.get('[name=tableColumnColor]').should($list => {
            this.loopData(data, $list)
        });
    };
}

export default verifyTable