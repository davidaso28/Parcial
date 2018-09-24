var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.pause(1000);
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
      browser.pause(1000);
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891');
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click();

  });

  When('I fill a correct email and incorrect password',()=>
  {
    browser.pause(4000);
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('da.saavedra@uniandes.edu.co');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891');
  });

  When('I fill a correct email and correct password',()=>
  {
      browser.pause(4000);
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('da.saavedra@uniandes.edu.co');
    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123456789a');
  });
  When('I find {string}',(teacher)=>
  {
    browser.pause(1000);
    var inputFinder=browser.element('div=Busca un profesor o materia...');
    inputFinder.click();
    inputFinder.keys(teacher)
    browser.pause(3000);
    browser.keys("Enter");
  });
  When('I open qualification form',()=>
  {
    browser.waitForVisible('button=Califica a este profesor', 5000);
    var button=browser.element('button=Califica a este profesor');
    button.click();
  });
  When('I fill the qualification form',()=>
  {
    browser.pause(5000);
    var contenido= browser.element('textarea[name="contenido"]');
    contenido.click();
    contenido.keys("testds");
    var slider = $$('div[id="slider1"]');
    var value=slider[0].element('div[style="left: 50%;"');
    value.click()
      browser.pause(1000);
    var value1=slider[1].element('div[style="left: 50%;"');
    value1.click()
      browser.pause(1000);
    var value2=slider[2].element('div[style="left: 50%;"');
    value2.click()
    browser.pause(1000);
    var select=browser.element('select[name="idMateria"]');
    select.click();
    browser.pause(1000);
    var option=browser.element('option[value="ISIS4426"]');
    option.click();
    var send =browser.element('button=Publicar');
    send.click();

  });
  When('I delete qualification with text {string}',(qualText)=>
  {
    browser.pause(2000);
    var qual=browser.element('div=testds');
    var parntqual=qual.element('..');
    var optionButton=parntqual.element('button[id="opciones"]')
    optionButton.click();
    browser.pause(2000);
    browser.keys('ArrowDown');
    browser.keys('Enter');
    browser.pause(2000);
    var confelimienar=browser.element('button=Si, borrar!');
    confelimienar.click();
  });
  When('I click add professor button',()=>
  {
    browser.pause(3000);
      browser.element('a=Agregar profesor').click();
  });
  When('I fill the addition form correctly',()=>
  {
      browser.pause(3000);
    var nombre=browser.element('input[name="nombre"]');
    nombre.click();
    nombre.keys("Pepito"+new Date().toString());
    browser.pause(3000);
    var apellidos=browser.element('input[name="apellidos"]');
    apellidos.click();
    apellidos.keys("Perez");
    browser.selectByValue('select[name="sexo"]',"m");
    browser.element('button[type="submit"]').click();

  });
  When('I fill the addition form correctly repeated',()=>
  {
      browser.pause(3000);
    var nombre=browser.element('input[name="nombre"]');
    nombre.click();
    nombre.keys("Pepito");
    browser.pause(3000);
    var apellidos=browser.element('input[name="apellidos"]');
    apellidos.click();
    apellidos.keys("Perez");
    browser.selectByValue('select[name="sexo"]',"m");
    browser.element('button[type="submit"]').click();

  });
  When('I fill the addition form incorrectly',()=>
  {
    var nombre=browser.element('input[name="nombre"]');
    nombre.click();
    nombre.keys("Pepito");
    browser.pause(3000);
    var apellidos=browser.element('input[name="apellidos"]');
    apellidos.click();
    apellidos.keys("Perez");
    browser.element('button[type="submit"]').click();

  });
  Then('I expect to see my qualification',()=>
  {
    browser.pause(3000);
    expect(browser.isExisting('div=testds')).to.be.true;
  });
  Then('I expect to see that i can not rate the teacher again', () => {
    browser.pause(3000);
    expect(browser.isExisting('div=Error: Ya has calificado a este profesor en esta materia')).to.be.true;
  });
  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  Then('I expect to login', () => {
    browser.pause(3000);
    expect(browser.isExisting('a=Salir')).to.be.true;
  });
  Then('I expect not see my qualification with text {string}',(text)=>
  {
    browser.pause(3000);
    expect(browser.isExisting('div='+text)).to.be.false;
  });
  Then('I expect to see a confirmation message', () => {
    browser.pause(3000);
    expect(browser.isExisting('h2=Profesor Agregado!')).to.be.true;
  });
  Then('I expect to see an error message', () => {
    browser.pause(3000);
    expect(browser.isExisting('div=Selecciona el sexo del profesor')).to.be.true;
  });
  Then('I expect to see an repeated professor message',()=>
  {
    browser.pause(3000);
    expect(browser.isExisting('div=Ya existe este profesor')).to.be.true;
  });

});
