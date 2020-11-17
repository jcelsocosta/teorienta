import { defineSupportCode} from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
declare var  require : any;

function timeout(){
    setTimeout(function(){
        timeout();
    },1000,60)
}

defineSupportCode(function ({ Given, When,Then}) {
   Given(/^I am at the home page$/,async()=>{
       await browser.get("http://localhost:4200/");
       await $("a[name='login']").click();
   });
   When(/^I try fill username with "([^\"]*)" and  password with "([^\"]*)"$/, async(username,password)=>{
        await $("input[name='username']").sendKeys(<string> username);
        await $("input[name='password'").sendKeys(<string> password);
        await element(by.buttonText('Login')).click();
   });   
   Given(/^I can see menu with announcements$/, async()=>{
        timeout();
        await $("a[name='navbarAnnouncement']").click();
   });
   When(/^I try insert announcements$/, async()=>{
        await element(by.buttonText('Adicionar edital')).click();
   });
   When(/^I can fill title with "([^\"]*)" objective with "([^\"]*)" fomentation with "(\d*)" category with "([^\"]*)" date Submission with "([^\"]*)" cnpj with  cpf with available with and url with "([^\"]*)"$/, async(title,objective,fomentation,category,dateSubmission,url)=>{
        timeout()
        await $("input[name='titleRegister']").sendKeys(<string>title);
        await $("input[name='objectiveRegister']").sendKeys(<string>objective);
        await $("input[name='fomentationRegister']").sendKeys(<string>fomentation);
        await $("input[name='categoryRegister']").sendKeys(<string>category);
        await $("input[name='dateSubmissionRegister']").sendKeys(<string>dateSubmission);
        await $("input[name='cnpjRegister']").click();
        await $("input[name='cpfRegister']").click();
        await $("input[name='availableRegister']").click();
        await $("input[name='urlRegister']").sendKeys(<string>url);
        await element(by.buttonText('Salvar Edital')).click();
   });
   Then(/^I can see title with "([^\"]*)" objective with "([^\"]*)" fomentation with "(\d*)" category with "([^\"]*)" date Submission with "([^\"]*)" cnpj with "([^\"]*)" cpf with "([^\"]*)" and url with "([^\"]*)"$/, async(title,objective,fomentation,category,dateSubmission,cnpj,cpf,url)=>{
        await $("label[name='titleCard']").getText().then(text => text == title)
        await $("label[name='objectiveCard']").getText().then(text => text == objective)
        await $("label[name='fomentationCard']").getText().then(text => text == fomentation)
        await $("label[name='categoryCard']").getText().then(text => text == category)
        await $("label[name='dateCard']").getText().then(text => text == dateSubmission)
        await $("label[name='cnpjCard']").getText().then(text => text == cnpj)
        await $("label[name='cpfCard']").getText().then(text => text == cpf)
        await $("label[name='urlCard']").getText().then(text => text == url)
   })
})
