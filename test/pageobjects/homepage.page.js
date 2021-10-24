class Internet {
    get pageheader () { return $('h1.heading')}
    get subheader () { return $('h2')}
    get pagefooter () { return $('//*[@id="page-footer"]')}
    get parent () { return $('ul')}
    get childElements () { return this.parent.$$('li')}
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)}
    
    /*getSpecificElementText(index) {
        this.specificChildElement(index).getText()
            console.log(text)
        }
    
    getLiText(){ 
        this.childElements.filter((element) => {
        console.log(element.getText())
        })
    }*/
  
}

module.exports = new Internet()
