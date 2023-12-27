describe("Admin_mod" ,()=>{
    before(()=>{
      cy.clearAllCookies() // Clear all cookies
      cy.Login();
    })
    it("ABCdef",()=>{
      //cy.Login();
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
      cy.get('.orangehrm-header-container > .oxd-button').click()
      //cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('[data-v-957b4417] .oxd-select-text-input').click({ multiple: true });
    });
}); 