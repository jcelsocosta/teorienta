import { defineSupportCode} from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
declare var  require : any;

function timeout(){
    setTimeout(function(){
        timeout();
    },3000,60)
}

defineSupportCode(function ({ Given, When,Then}) {
   Given(/^I am at the home page$/,async()=>{
       await browser.get("http://localhost:4200/");
       await $("a[name='login']").click();
       

   });

   //admin admin
   When(/^I try fill username with "([^\"]*)" and  password with "([^\"]*)"$/, async(username,password)=>{
    await $("input[name='username']").sendKeys(<string> username);
    await $("input[name='password'").sendKeys(<string> password);
    await element(by.buttonText('Login')).click();
   });
   
   Given(/^I can see menu with announcements$/, async()=>{
       timeout()
    await $("a[name='navbarAnnouncement']").click();
   });

   When(/^I try insert announcements$/, async()=>{
      
    await element(by.buttonText('Adicionar edital')).click();
   });
})
