describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173/')
  })

  it("Encuentra el Titulo de la pagina", ()=>{
    cy.get("h1").contains("Pasantías")
  })

  it("Existe una card", ()=>{
    cy.get('._card_1f0u9_24 > :nth-child(1)')
  })
  it("Inicio de sesion y cierre de sesion", ()=>{
    cy.get('._buttonInvert_108bn_12').click()
    cy.get('#email').type("chimona@outlook.com")
    cy.get('#password').type("ASDasd1234")
    cy.get('._butttonDefault_108bn_1').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-logout-id="logout"]').click()
  })
  it("Cambio de datos del perfil", ()=>{
    cy.get('._buttonInvert_108bn_12').click()
    cy.get('#email').type("chimona@outlook.com")
    cy.get('#password').type("ASDasd1234")
    cy.get('._butttonDefault_108bn_1').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-perfil-id="perfil"]').click()
  })
})