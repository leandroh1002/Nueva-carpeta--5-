describe('Landing', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173/')
  })

  it("Encuentra el Titulo de la pagina", ()=>{
    cy.get("h1").contains("Pasantías")
    cy.get("#imageHero")
    cy.get('._butttonDefault_gtnxa_1').click()
  })

  it("Existe Carrousel", ()=>{
    cy.get('#carrousel')
  })

  it("Existen Objetivos", ()=>{
    cy.get('#objetivos')
    cy.get('#imageObjetivos')
    cy.get('#herramientas')
    cy.get('#compass')
    cy.get('#arrow')
    cy.get('#diagrama')
    cy.get("h4").contains("Experiencia")
    cy.get("h4").contains("Mentoría")
    cy.get("h4").contains("Desarrollo")
    cy.get("h4").contains("Oportunidades")
  })

  it("Existe una card", ()=>{
    cy.get("h5").contains("Nuestras pasantías")
    cy.get('#tarjetas > .flex > :nth-child(1)')
  })

  it("Existen Testimonios", ()=>{
    cy.get("h5").contains("Testimonios de nuestros alumnos")
    cy.get("#cardTestimonial")
    cy.get("#imageTestimonial")
    cy.get('#cardTestimonial > .h-full')
  })

  it("Existen Cedes", ()=>{
    cy.get("#cedes")
    cy.get("h2").contains("Sede Central UNSTA")
    cy.get("h2").contains("Campus UNSTA Yerba Buena")
    cy.get("h2").contains("Campus UNSTA Concepción")
  })
  it("Existe un Footer", ()=>{
    cy.get("span").contains("UNSTA")
    cy.get("p").contains("Unsta")
    cy.get("#facebook")
    cy.get("#x")
    cy.get("#instagram")
    cy.get("#linkedin")
  })

  // it("Inicio de sesion y cierre de sesion", ()=>{
  //   cy.get('._buttonInvert_gtnxa_11').click()
  //   cy.get('#email').type("chimona@outlook.com")
  //   cy.get('#password').type("ASDasd1234")
  //   cy.get('._butttonDefault_gtnxa_1').click()
  //   cy.get('[button-menu-id="menu"]').click()
  //   cy.get('[button-logout-id="logout"]').click()
  // })
  // it("Cambio de datos del perfil", ()=>{
  //   cy.get('._buttonInvert_gtnxa_11').click()
  //   cy.get('#email').type("chimona@outlook.com")
  //   cy.get('#password').type("ASDasd1234")
  //   cy.get('._butttonDefault_gtnxa_1').click()
  //   cy.get('[button-menu-id="menu"]').click()
  //   cy.get('[button-perfil-id="perfil"]').click()
  // })
})