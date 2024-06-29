describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173/')
  })

  it("Encuentra el Titulo de la pagina", ()=>{
    cy.get("h1").contains("Pasantías")
  })

  it("Existe una card", ()=>{
    cy.get(':nth-child(2) > .relative > .mb-6 > p')
  })
})