import 'cypress-iframe';

describe('Tocheck the myinternethero app is working ', () => {
    
beforeEach(() => {

    cy.visit('https://the-internet.herokuapp.com/');
cy.get('.heading').should('have.text','Welcome to the-internet');

});

// it('A/B Testing', () => {

// cy.get(':nth-child(1) > a').should('have.text','A/B Testing');
// cy.get(':nth-child(1) > a').click();
// cy.get('p').contains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');

// });



// it('Add/Remove Elements', () => {

// cy.get('ul > :nth-child(2) > a').should('have.text','Add/Remove Elements');
// cy.get('ul > :nth-child(2) > a').click();
// cy.get('#content > h3:nth-child(1)').should('have.text', 'Add/Remove Elements');
// cy.get('.example > button:nth-child(1)').should('be.visible');
// cy.get('.added-manually').should('not.be.visible');
// cy.get('.example > button:nth-child(1)').click();
// cy.get('.added-manually').should('be.visible');
// cy.get('#elements > button').should('have.length',1);
// cy.get('.example > button:nth-child(1)').click();
// cy.get('#elements > button').should('have.length',2);

// });


// it('Basic Auth', () => {
    
// cy.get(':nth-child(3) > a').should('have.text','Basic Auth');
// cy.get(':nth-child(3) > a').click();

// cy.visit('https://the-internet.herokuapp.com/basic_auth', {
//     auth: {
//      username: 'admin',
//      password: 'admin'
//     }
//   });
//   cy.get('h3').should('have.text','Basic Auth');
//   cy.get('[data-layer="Content"]').should('contains','Congratulations! You must have the proper credentials');
// });
// it('brokenimages', () => {

//     cy.get(':nth-child(4) > a').should('have.text','Broken Images');
//     cy.get(':nth-child(4) > a').click();
//     cy.get('#content > div > h3').should('have.text','Broken Images');
//     cy.get('#content > div > h3').click();
//     cy.get('#content > div > img:nth-child(4)').should('be.visible').and('have.prop', 'naturalWidth')
//     .should('be.greaterThan', 0);
//     cy.get('#content > div > img:nth-child(2)').should('be.visible').and('have.prop', 'naturalWidth')
//     .should('be.greaterThan', 0);
//     cy.get('#content > div > img:nth-child(3)').should('be.visible').and('have.prop', 'naturalWidth')
//     .should('be.greaterThan', 0);

// });

// it('Challengingdom', () => {

//     cy.get(':nth-child(5) > a').should('have.text', 'Challenging DOM');
//     cy.get(':nth-child(5) > a').click();
//     cy.get('.example').children('h3').should('have.text', 'Challenging DOM');
//     cy.get('.example').children('p').should('have.text', "The hardest part in automated web testing is finding the best locators (e.g., ones that well named, unique, and unlikely to change). It's more often than not that the application you're testing was not built with this concept in mind. This example demonstrates that with unique IDs, a table with no helpful locators, and a canvas element.");
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(0).should('have.text','Lorem')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(1).should('have.text','Ipsum')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(2).should('have.text','Dolor')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(3).should('have.text','Sit')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(4).should('have.text','Amet')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(5).should('have.text','Diceret')
//     cy.get('div.large-10.columns >table >thead >tr >th').eq(6).should('have.text','Action')
//     cy.get('div.large-2.columns > a.button').eq(0).should('be.visible')
//     cy.get('div.large-2.columns > a.button').eq(1).should('be.visible')
//     cy.get('div.large-2.columns > a.button').eq(2).should('be.visible')
//     cy.get('div.large-10.columns >table>tbody>tr>td>a').eq(0).should('have.text','edit')
//     cy.get('div.large-10.columns >table>tbody>tr>td>a').eq(1).should('have.text','delete')  
//     cy.get('div.large-10.columns >table>tbody>tr>td>a').eq(0).click()
//     cy.get('div.large-10.columns >table>tbody>tr>td>a').eq(1).click()

// });


// it('checkboxes', () => {

//     cy.get(':nth-child(6) > a').should('contain', 'Checkboxes');
//     cy.get(':nth-child(6) > a').click();
//     cy.get('div.example > h3').should('contain', 'Checkboxes');
//     cy.get('#checkboxes > input').should('attr','type','checkbox');
//     cy.get('#checkboxes > :nth-child(1)').click();
//     // cy.get('#checkboxes > :nth-child(3)').click();
//     cy.get('#checkboxes > :nth-child(1)').should('be.checked')
//     // cy.get('#checkboxes > :nth-child(3)').should('be.checked')
// });

// it('Contextmenu', () => {

//     cy.get(':nth-child(7) > a').should('contain', 'Context Menu');
//    cy.get(':nth-child(7) > a').click();
//    cy.get('div.example > h3').should('contain', 'Context Menu');

//    cy.get('div.example div#hot-spot').should('be.visible');


//     const stub = cy.stub()
  
//     cy.on('window:alert', stub)
  
//     cy.get('div.example div#hot-spot').rightclick()
      
//       .then(() => {
//         expect(stub.getCall(0)).to.be.calledWith('You selected a context menu')
//     });

// });


// it('Digest Authentication', () => {

//    cy.get(':nth-child(8) > a').should('contain', 'Digest Authentication');

//   cy.get(':nth-child(8) > a').click();

//   cy.url( {
//             auth: {
//              username: 'admin',
//              password: 'admin'
//             }
//           });
//         });



// it('Disappearing Elements', () => {

//     cy.get(':nth-child(9) > a').should('contain', 'Disappearing Elements');
//     cy.get(':nth-child(9) > a').click();
//     cy.get('div.example > h3').should('contain', 'Disappearing Elements');
//     cy.get(':nth-child(1) > a').should('have.text', 'Home');

// cy.get(':nth-child(1) > a').click()
// cy.get(':nth-child(9) > a').should('contain', 'Disappearing Elements');


// });


// it('Draganddrop', () => {

//     cy.get(':nth-child(10) > a').should('contain', 'Drag and Drop');
//     cy.get(':nth-child(10) > a').click();
//     cy.get('div.example > h3').should('contain', 'Drag and Drop');
//     cy.get('#column-a')

// });


// it('Dropdown', () => {

// cy.get(':nth-child(11) > a').should('contain', 'Dropdown');
// cy.get(':nth-child(11) > a').click();
// cy.get('div.example > h3').should('contain', 'Dropdown');

// // cy.get('#dropdown').should('have.value','Please select an option');

// cy.get('#dropdown').select('Option 1');


// });

// it('Dynamic Content', () => {
// cy.get(':nth-child(12) > a').should('contain', 'Dynamic Content');
// cy.get(':nth-child(12) > a').click();
// cy.get('div.example > h3').should('contain', 'Dynamic Content');
    
// });





// it('Dynamic Controls', () => {
//     cy.get(':nth-child(13) > a').should('contain', 'Dynamic Controls');
//     cy.get(':nth-child(13) > a').click();
//     cy.get('.example > :nth-child(1)').should('contain', 'Dynamic Controls');
//     cy.get('#checkbox').should('not.be.checked')
//     cy.get('#checkbox').not('[disabled]').click()
//     cy.get('#checkbox-example > button').should('have.text','Remove');
//     cy.get('#checkbox-example > button').click()
//     cy.get('#checkbox-example > button').should('have.text','Add');
//     cy.get('#checkbox-example > button').click()
//     cy.get('#checkbox-example > button').should('have.text','Remove');

//     cy.get('#input-example > input').should('be.visible');

//     });


// it('Dynamic Loading', () => {

//     cy.get(':nth-child(14) > a').should('contain', 'Dynamic Loading');
//     cy.get(':nth-child(14) > a').click();
//     cy.get('.example > :nth-child(1)').should('contain', 'Dynamically Loaded Page Elements');
//     cy.get('.example > p').should('contain', "It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.");
//     cy.get('.example > a').eq(0).click();
//     cy.get('div#start button').click();
//     cy.get('#loading>img').should('be.visible');
//     cy.wait(6000);
//     cy.get('#finish > h4').should('be.visible');
//     cy.get('#finish > h4').should('have.text','Hello World!');
//     cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
//     cy.get('.example > a').eq(1).click();
//     cy.get('div#start button').click();
//     cy.get('#loading>img').should('be.visible');
//     cy.wait(6000);
//     cy.get('#finish > h4').should('be.visible');
    
//     cy.get('#finish > h4').should('have.text','Hello World!');

// });


// it('Entry Ad', () => {
//     cy.get(':nth-child(15) > a').should('contain', 'Entry Ad');
//     cy.get(':nth-child(15) > a').click();
//     cy.get('div.example > h3').should('contain', 'Entry Ad');
//     cy.get('.modal').should('be.visible');
//     cy.get('.modal-title > h3').should('be.visible');
//     cy.get('.modal-body > p').should('be.visible');
//     cy.get('.modal-footer > p').should('be.visible');
//     cy.get('.modal-footer > p').click();
//     cy.get('#restart-ad').click();
//     cy.get('.modal-footer > p').click();

// });

// it('Exit Intent', () => {
//     cy.get(':nth-child(16) > a').should('contain', 'Exit Intent');
//     cy.get(':nth-child(16) > a').click();
//     cy.get('div.example > h3').should('contain', 'Exit Intent');
//     cy.get('div.example > h3').trigger('mouseleave')
//     cy.get('.modal>div >h3').should('have.text', 'This is a modal window');
    
// });

// it('File Download', () => {
    
//     cy.get(':nth-child(17) > a').should('have.text', 'File Download');
//     cy.get(':nth-child(17) > a').click();
//     cy.get('div.example > h3').should('have.text', 'File Downloader');
//     cy.get('[href="download/SomeFile.txt"]').should('be.visible');
//     // cy.get('[href="download/56765.jpg"]').click();
//     // cy.url().should('eq', 'https://the-internet.herokuapp.com/download/')
//     cy.downloadFile('https://the-internet.herokuapp.com/download/SomeFile.txt','mydownloads','SomeFile.txt')
    
// }); 

// it('File Upload', () => {

//     cy.get(':nth-child(18) > a').should('have.text', 'File Upload');
//     cy.get(':nth-child(18) > a').click();
//     cy.get('h3').should('have.text', 'File Uploader');
//     cy.get('#file-upload').attachFile('example.json');
    
//     cy.get('#file-submit').click();
//     cy.get('.example > h3').should('have.text','File Uploaded!');
//     cy.get('[id="uploaded-files"]').should('contain','example.json');

// });


// it('Floating Menu', () => {
//     cy.get(':nth-child(19) > a').should('have.text', 'Floating Menu');
//     cy.get(':nth-child(19) > a').click();
//     cy.get('div.example > h3').should('have.text', 'Floating Menu');

//     cy.get('div#menu > ul > li > a').eq(0).should('have.text','Home');

//     cy.get('.scroll > p').eq(2).should('be.visible');
//     cy.get('.scroll > p').eq(2).click();

//     cy.get('div#menu > ul > li > a').eq(0).should('have.text','Home');
   
   
// });


// it('Forgot Password', () => {
//     cy.get(':nth-child(20) > a').should('have.text', 'Forgot Password');
//     cy.get(':nth-child(20) > a').click();
//     cy.get('h2').should('have.text', 'Forgot Password');
//     cy.get('#email').type('email@email.com');
//     cy.get('.icon-2x').click();
// });


// it('Form Authentication', () => {

//     cy.get(':nth-child(21) > a').should('have.text', 'Form Authentication');
//     cy.get(':nth-child(21) > a').click();
//     cy.get('h2').should('have.text', 'Login Page');
//     cy.get('#username').type('tomsmith');
//     cy.get('#password').type('SuperSecretPassword!')
//     cy.get('.fa').click()
//     cy.get('#flash').should('contain','You logged into a secure area!');
//     cy.get('.example > h2').should('have.text',' Secure Area');
//     cy.get('.button').click();

//     cy.get('#flash').should('contain','You logged out of the secure area!');
    
// });


// it('Frames', () => {

//     cy.get(':nth-child(22) > a').should('have.text', 'Frames');
//     cy.get(':nth-child(22) > a').click();
//     cy.get('h3').should('have.text', 'Frames');
//     cy.get('ul > :nth-child(2) > a').click();

// });


// it('Loginpage', () => {

// cy.visit('https://the-internet.herokuapp.com/');
// cy.get('li:nth-child(21) > a').should('have.text','Form Authentication');
// cy.get('li:nth-child(21) > a').click()
// cy.get('.example > h2').should('have.text','Login Page');
// cy.get('#username').should('be.visible');
// cy.get('#password').should('be.visible');
// cy.get('#username').type('tomsmith');
// cy.get('#password').type('SuperSecretPassword!');
// cy.get('.fa').click();

    
// });


// it('dropdown', () => {
// cy.get(' li:nth-child(11) > a').should('have.text','Dropdown');
// cy.get(' li:nth-child(11) > a').click();
// cy.get('.example > h3').should('have.text','Dropdown List');
// cy.get('#dropdown').should('be.visible');
// cy.get('#dropdown').select("Option 1");    
// });

it('Geolocation', () => {

    cy.get(':nth-child(23) > a').should('have.text','Geolocation');
    cy.get(':nth-child(23) > a').click();
    cy.get('button').click()
    cy.get('[id="lat-value"]').should('be.greaterThan',0)

});

it('Horizontal Slider', () => {

    cy.get('li:nth-child(24) > a').should('have.text','Horizontal Slider');
    cy.get('li:nth-child(24) > a').click();
    cy.get('html.no-js body div.row div#content.large-12.columns div.example h3').should('have.text','Horizontal Slider');
    cy.get('input').should('be.visible');
    cy.get('input').as('range').invoke('val', 2).trigger('change');
    cy.get('@range').siblings('#range').should('have.text', '2');


});

it('Hovers', () => {

    cy.get('li:nth-child(25) > a').should('have.text','Hovers');
    cy.get('li:nth-child(25) > a').click();
    cy.get('.example > h3').should('have.text','Hovers');
    cy.get(':nth-child(3) > img').should('be.visible');
    cy.get(':nth-child(3) > img').realHover();
    cy.get('div:nth-child(3) > div.figcaption').should('be.visible');
    cy.get(':nth-child(3) > img').siblings('div').should('be.visible');

    cy.get(':nth-child(4) > img').should('be.visible');
    cy.get(':nth-child(4) > img').realHover();
    cy.get('div:nth-child(4) > div.figcaption').should('be.visible');
    cy.get(':nth-child(4) > img').siblings('div').should('be.visible');

    cy.get(':nth-child(5) > img').should('be.visible');
    cy.get(':nth-child(5) > img').realHover();
    cy.get('div:nth-child(5) > div.figcaption').should('be.visible');
    cy.get(':nth-child(5) > img').siblings('div').should('be.visible');
    

});

it('Infinite Scroll', () => {

    cy.get('li:nth-child(26) > a').should('have.text','Infinite Scroll');
    cy.get('li:nth-child(26) > a').click();
    cy.get('.example > h3').should('have.text','Infinite Scroll');
    cy.wait(4000)
    cy.get('.jscroll-inner').should('have.length.greaterThan', 0);
    const scrollTimes = 8;
    const scrollAndWait = () => {
        cy.window().scrollTo('bottom',{duration:1000});
        cy.get('#loader').should('not.be.visible');
        cy.scrollTo('bottom', { duration: 1000 });
      };
      for (let i = 0; i < scrollTimes; i++) {
        scrollAndWait();
        cy.wait(1000); // Adjust the wait time as needed
      }
     // Final assertion to check more items are loaded
    //   cy.get('#loader').should('have.length.greaterThan', 20); 
      cy.scrollTo('top', {duration:5000})
    });


it('Inputs', () => {

    cy.get('li:nth-child(27) > a').should('have.text','Inputs');
    cy.get('li:nth-child(27) > a').click();
    cy.get('h3').should('have.text','Inputs');
    cy.get('input').click()
    cy.get('input').type('{downArrow}{upArrow}{upArrow}');

});


it('JQuery UI Menus', () => {
    cy.get('li:nth-child(28) > a').should('have.text','JQuery UI Menus');
    cy.get('li:nth-child(28) > a').click();
    cy.get('h3').should('have.text','JQueryUI - Menu');
    cy.get('#ui-id-2').realHover();
    cy.get('#ui-id-2').click();
    // cy.get('#ui-id-4 > a').should('be.visible');
    cy.get('#ui-id-4').realHover();
    cy.get('#ui-id-4').click();
    cy.get('#ui-id-5').click();
    cy.get('li > a').should('be.visible');
    cy.get('li > a').click();
});

it('JavaScript Alerts', () => {

    cy.get('li:nth-child(29) > a').should('have.text','JavaScript Alerts');
    cy.get('li:nth-child(29) > a').click();
    cy.get('h3').should('have.text','JavaScript Alerts');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > button').should('be.visible');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > button').should('have.text','Click for JS Alert');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > button').click()
    cy.on('window:alert', (alerttext) => {

        expect(alerttext).to.equal('I am a JS Alert');
    })
    cy.get('#result').should('have.text','You successfully clicked an alert');
    cy.get('.example > ul:nth-child(3) > li:nth-child(2) > button').should('be.visible');
    cy.get('.example > ul:nth-child(3) > li:nth-child(2) > button').should('have.text','Click for JS Confirm');
    cy.get('.example > ul:nth-child(3) > li:nth-child(2) > button').click();
    cy.on('window:confirm', (alertconfirm) => {
        expect(alertconfirm).to.equal('I am a JS Confirm');
        return true;
        })
        cy.get('#result').should('have.text','You clicked: Ok');

    cy.get('.example > ul:nth-child(3) > li:nth-child(3) > button').should('be.visible');
    cy.get('.example > ul:nth-child(3) > li:nth-child(3) > button').should('have.text','Click for JS Prompt');
    cy.get('.example > ul:nth-child(3) > li:nth-child(3) > button').click({force:true});
    
 
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('gfg');
      });
      cy.get('.example > ul:nth-child(3) > li:nth-child(3) > button').click({force:true});
    cy.get('#result').should('have.text','You entered: gfg');

});

it('JavaScript onload event error', () => {

    cy.get('li:nth-child(30) > a').should('have.text','JavaScript onload event error');
    cy.get('li:nth-child(30) > a').click();
    cy.wait(6000);
    cy.get('p').should('contain',"This page has a JavaScript error in the onload event.");
    
});

it('Key Presses', () => {

    cy.get('li:nth-child(31) > a').should('have.text','Key Presses');
    cy.get('li:nth-child(31) > a').click();
    cy.get('.example > h3').should('have.text','Key Presses');
    const obj = {"A":"A","S":"S", "D":"D", "F":"F", "G":"G", "H":"H", "J":"J", "K":"K", "L":"L", "Z":"Z", "X":"X", "C":"C", "V":"V", "B":"B", "N":"N", "M":"M", "Q":"Q", "W":"W", "E":"E", "R":"R", "T":"T", "Y":"Y", "U":"U", "I":"I", "O":"O", "P":"P", ",":"COMMA", ".":"PERIOD", "/":"SLASH", "[":"OPEN_BRACKET", "]":"CLOSE_BRACKET", "1":"1", "2":"2", "3":"3", "4":"4", "5":"5", "6":"6", "7":"7", "8":"8", "9":"9", "0":"0", "{shift}":"SHIFT", "{ctrl}":"CONTROL", "{alt}":"ALT", "{del}":"DELETE", "{insert}":"INSERT", "{upArrow}":"UP", "{downArrow}":"DOWN", "{rightArrow}":"RIGHT", "{leftArrow}":"LEFT", "{home}":"HOME", "{end}":"END", "{pageup}":"PAGE_UP", "{pagedown}":"PAGE_DOWN", "{esc}":"ESCAPE", "{cmd}":"WIN", "{shift}`":"BACK_QUOTE"}
    Object.entries(obj).forEach(([key, value]) => {
        cy.get('#target').type(key)
        cy.get('#result').contains(`You entered: ${value}`);
        cy.get('#target').clear();
        cy.wait(1000)
      });
});

it('Large & Deep DOM', () => {
     cy.get('li:nth-child(32) > a').should('have.text','Large & Deep DOM');
     cy.get('li:nth-child(32) > a').click();
     cy.get('.example > h3').should('have.text','Large & Deep DOM');
     cy.get('#no-siblings').should('have.text','No siblings');
     cy.get('.example > :nth-child(5)').should('have.text','Siblings');
     cy.get('[class="large-12 tier-6 item-2"]').should('have.text','6.2');
    cy.get(':nth-child(1) > :nth-child(1) > h4').should('have.text','Table');
    cy.get('.row-22 > .column-14').should('have.text','22.14');
    });


it('Multiple Windows', () => {
     cy.get('li:nth-child(33) > a').should('have.text','Multiple Windows');
     cy.get('li:nth-child(33) > a').click();
     cy.get('.example > h3').should('have.text','Opening a new window');
     cy.get('.example > a').should('be.visible');
     cy.get('.example > a').click();
    
});


it('Nested Frames', () => {
     cy.get('li:nth-child(34) > a').should('have.text','Nested Frames');
     cy.get('li:nth-child(34) > a').click(); 

    cy.frameLoaded("html > frameset > frame:nth-child(2)").should('be.visible');

});

it('Notification Messages', () => {
    cy.get('li:nth-child(35) > a').should('have.text','Notification Messages');
    cy.get('li:nth-child(35) > a').click(); 
    cy.get('.example > h3').should('have.text','Notification Message');
    cy.get('.example > p:nth-child(2) > a').click({force:true});
    cy.get('.example > p:nth-child(2) > a').click({force:true});
    cy.get('#flash').contains('Action successful');

});




it('Redirect Link', () => {

    cy.get('li:nth-child(36) > a').should('have.text','Redirect Link');
    cy.get('li:nth-child(36) > a').click(); 
    cy.get('.example > h3').should('have.text','Redirection');
    cy.get('#redirect').should('be.visible');
    cy.get('#redirect').click();
    cy.get('.example > h3').should('have.text','Status Codes');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > a').should('have.text','200');
    cy.get('.example > ul:nth-child(3) > li:nth-child(2) > a').should('have.text','301');
    cy.get('.example > ul:nth-child(3) > li:nth-child(3) > a').should('have.text','404');
    cy.get('.example > ul:nth-child(3) > li:nth-child(4) > a').should('have.text','500');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > a').click();
    cy.get('.example > h3').should('have.text','Status Codes');
    cy.get('.example > p').should('contain','This page returned a 200 status code.');
    cy.get('.example > p:nth-child(2) > a').click();

});

it('Secure File Download', () => {
    
    cy.get('li:nth-child(37) > a').should('have.text','Secure File Download');
    cy.get('li:nth-child(37) > a').click(); 
    cy.visit('https://the-internet.herokuapp.com/download_secure', {
        auth: {
            username: 'admin',
            password: 'admin',       
         }
    })
    cy.get('[href="download_secure/not_empty.txt"]').click();

});


it('Shadow DOM', () => {

    cy.get('li:nth-child(38) > a').should('have.text','Shadow DOM');
    cy.get('li:nth-child(38) > a').click(); 
    cy.get('h1').should('have.text','Simple template');
    cy.get('#content > my-paragraph:nth-child(4) > span').should('be.visible');
    cy.get('#content > my-paragraph:nth-child(4) > span').should('have.text',"Let's have some different text!");
    cy.get('#content > my-paragraph:nth-child(5) > ul:nth-child(1) > li').eq(0).should('have.text',"Let's have some different text!");
    cy.get('#content > my-paragraph:nth-child(5) > ul:nth-child(1) > li').eq(1).should('have.text',"In a list!");

});



it('Shifting Content', () => {

    cy.get('li:nth-child(39) > a').should('have.text','Shifting Content');
    cy.get('li:nth-child(39) > a').click(); 
    cy.get('h3').should('have.text','Shifting Content');

cy.get('.example > a').eq(0).should('have.text','Example 1: Menu Element');
cy.get('.example > a').eq(1).should('have.text','Example 2: An image');
cy.get('.example > a').eq(2).should('have.text','Example 3: List');
cy.get('.example > a').eq(0).click();
cy.get('.example > h3:nth-child(1)').should('have.text','Shifting Content: Menu Element');
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/menu');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('have.text','Home');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('have.text','About');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('have.text','Contact Us');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('have.text','Portfolio');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('have.text','Gallery');

// Get the initial position of the menu element
cy.get('.shift.shift')  // Replace with the appropriate selector for your menu
.then(($menu) => {
  const initialPosition = $menu.position(); // Get the initial position (left)
  // Trigger the action that causes the menu to move (e.g., clicking a button)
  cy.get('.example > p:nth-child(4) > a').click(); // Replace with your actual button or action
  // Wait for the animation or transition to complete
  cy.wait(500); // Adjust based on your menu's transition duration
  // Get the final position of the menu after the move
  cy.get('.shift.shift')
    .should('have.css', 'position', 'relative') // Ensure the menu has 'absolute' or 'relative' positioning
    .then(($menuAfterMove) => {
      const finalPosition = $menuAfterMove.position();
      // Assert that the menu moved to the right by comparing its initial and final position
      expect(finalPosition.left).to.be.lessThan(initialPosition.left); // Ensure the menu moved right
    });
});


// mode=random
cy.get('.example > :nth-child(3) > a').click();
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/menu?mode=random');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('have.text','Home');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('have.text','About');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('have.text','Contact Us');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('have.text','Portfolio');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('have.text','Gallery');

//pixel value

cy.get('.example > :nth-child(4) > a').click();
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/menu?pixel_shift=100');
cy.get('.example > ul >li').should('have.length','5');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('have.text','Home');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('have.text','About');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('have.text','Contact Us');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('have.text','Portfolio');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('have.text','Gallery');

//random and pixel

cy.get('.example > :nth-child(5) > a').click();
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/menu?mode=random&pixel_shift=100');
cy.get('.example > ul >li').should('have.length','5');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('be.visible');
cy.get('.example > ul:nth-child(7) > li:nth-child(1) > a').should('have.text','Home');
cy.get('.example > ul:nth-child(7) > li:nth-child(2) > a').should('have.text','About');
cy.get('.example > ul:nth-child(7) > li:nth-child(3) > a').should('have.text','Contact Us');
cy.get('.example > ul:nth-child(7) > li:nth-child(4) > a').should('have.text','Portfolio');
cy.get('.example > ul:nth-child(7) > li:nth-child(5) > a').should('have.text','Gallery');


cy.visit('https://the-internet.herokuapp.com/shifting_content')
cy.get('.example > a').eq(1).click();
cy.get('h3').should('have.text','Shifting Content: Image');
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/image');


 // Get the initial position of the image
 cy.get('.shift') // Replace with the correct selector for your image
 .then(($img) => {
   const initialPosition = $img.position(); // Get the position of the image (e.g., left and top)
   // Reload the page
//    cy.reload();

cy.get(':nth-child(4) > a').click();
   // After the page reloads, check that the image's position has changed
   cy.get('.shift')
     .should('have.css', 'position', 'relative') // or 'relative', depending on your CSS
     .then(($imgAfterReload) => {
       const newPosition = $imgAfterReload.position();
       // Ensure that the position has changed (within a tolerance if needed)
       expect(newPosition.left).to.not.equal(initialPosition.left);
    //    expect(newPosition.top).to.not.equal(initialPosition.top);
     });
 });



 cy.get('.example > p:nth-child(6) > a').click();
//  cy.visit('https://the-internet.herokuapp.com/shifting_content/image?image_type=simple')
 cy.wait(2000)
 cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/image?image_type=simple');
 cy.get('.shift').should('be.visible');





// content 

cy.visit('https://the-internet.herokuapp.com/shifting_content')
cy.get('.example > a').eq(2).click();
cy.get('h3').should('have.text','Shifting Content: List');
cy.url().should('eq','https://the-internet.herokuapp.com/shifting_content/list');

// cy.get('.large-6')

cy.get('.large-6').then(($container) => {
  // Split the content by <br> to get each list item as an array
  const itemsBeforeReload = $container.html()
    .split('<br>')                    // Split by <br> tags to get each list item
    .map(item => item.trim())         // Trim extra spaces
    .filter(item => item !== "");     // Remove any empty values

  // Log and capture the initial list order
  cy.log('Initial List Order:', itemsBeforeReload);

  // Step 2: Reload the page
  cy.reload();

  // Step 3: Capture the list items again after reload
  cy.get('.large-6').then(($containerAfterReload) => {
    const itemsAfterReload = $containerAfterReload.html()
      .split('<br>')
      .map(item => item.trim())
      .filter(item => item !== "");

    // Log the new order of list items
    cy.log('List Order After Reload:', itemsAfterReload);

    // Step 4: Assert that the list values are the same but the order may be different
    expect(itemsBeforeReload).not.equal(itemsAfterReload);
    expect(itemsBeforeReload.sort()).to.deep.equal(itemsAfterReload.sort());
    // Sorting the lists ensures that we are only checking if the same values are present,
    // regardless of the order.
  });
});
});

it('Slow Resources', () => {
    cy.get('li:nth-child(40) > a').should('have.text','Slow Resources');
    cy.get('li:nth-child(40) > a').click();
    cy.get('.example > h3:nth-child(1)').should('be.visible');
    cy.get('p').should('have.text','At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');
cy.reload();
cy.get('.example > h3:nth-child(1)').should('be.visible');
cy.get('p').should('have.text','At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');
});

it('Sortable Data Tables', () => {
    cy.get('li:nth-child(41) > a').should('have.text','Sortable Data Tables');
    cy.get('li:nth-child(41) > a').click();
    cy.get('.example > h3:nth-child(1)').should('have.text','Data Tables');

    //example 1 No Class or ID attributes to signify groupings of rows and columns

    cy.get('#table1 > tbody:nth-child(2) > tr:nth-child(2) > td').eq(4).should('have.text','http://www.frank.com');
    cy.get('#table1 > tbody:nth-child(2) > tr:nth-child(2) > td').eq(4).as('table')
    cy.get('@table').siblings('td').children('a:nth-child(1)').click({force: true})
    cy.wait(1000);
    cy.url().should('contains','https://the-internet.herokuapp.com/tables#edit');

    cy.get('#table1 > tbody:nth-child(2) > tr:nth-child(2) > td').eq(4).should('have.text','http://www.frank.com');
    cy.get('#table1 > tbody:nth-child(2) > tr:nth-child(2) > td').eq(4).as('table')
    cy.get('@table').siblings('td').children('a:nth-child(2)').click({force: true})
    cy.wait(1000);
    cy.url().should('contains','https://the-internet.herokuapp.com/tables#delete');



//example 2 Class or ID attributes to signify groupings of rows and columns

cy.get('#table2 > tbody:nth-child(2) > tr:nth-child(2) > td').should('have.class','web-site');
    cy.get('#table2 > tbody:nth-child(2) > tr:nth-child(2) > td').should('have.class','web-site').as('table')
    cy.get('@table').siblings('td').children('a:nth-child(1)').click({force: true})
    cy.wait(1000);
    cy.url().should('contains','https://the-internet.herokuapp.com/tables#edit');

    cy.get('#table2 > tbody:nth-child(2) > tr:nth-child(2) > td').should('have.class','web-site');
    cy.get('#table2 > tbody:nth-child(2) > tr:nth-child(2) > td').should('have.class','web-site').as('table');
    cy.get('@table').siblings('td').children('a:nth-child(2)').click({force: true});
    cy.wait(1000);
    cy.url().should('contains','https://the-internet.herokuapp.com/tables#delete');
  
});

it('Status Codes', () => {

    cy.get('li:nth-child(42) > a').should('have.text','Status Codes');
    cy.get('li:nth-child(42) > a').click(); 
    cy.get('.example > h3').should('have.text','Status Codes');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > a').should('have.text','200');
    cy.get('.example > ul:nth-child(3) > li:nth-child(2) > a').should('have.text','301');
    cy.get('.example > ul:nth-child(3) > li:nth-child(3) > a').should('have.text','404');
    cy.get('.example > ul:nth-child(3) > li:nth-child(4) > a').should('have.text','500');
    cy.get('.example > ul:nth-child(3) > li:nth-child(1) > a').click();
    cy.get('.example > h3').should('have.text','Status Codes');
    cy.get('.example > p').should('contain','This page returned a 200 status code.');
    cy.get('.example > p:nth-child(2) > a').click();

});

it('Typos', () => {
    cy.get('li:nth-child(43) > a').should('have.text','Typos');
    cy.get('li:nth-child(43) > a').click(); 
    cy.get('.example > h3').should('have.text','Typos');
    cy.get('.example > :nth-child(3)').should('contain',"Sometimes you'll see a typo, other times");
  
});


it('WYSIWYG Editor', () => {
  
  cy.get('li:nth-child(44) > a').should('have.text','WYSIWYG Editor');
  cy.get('li:nth-child(44) > a').click(); 
  cy.get('.example > h3:nth-child(1)').should('have.text','An iFrame containing the TinyMCE WYSIWYG Editor');
  cy.get('button.tox-mbtn:nth-child(1) > span').click(); 


});



});