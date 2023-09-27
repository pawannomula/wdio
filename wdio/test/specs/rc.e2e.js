const { expect } = require('@wdio/globals')
const PreRetirePage = require('../pageobjects/preretire.page');
const preretirePage = require('../pageobjects/preretire.page');
import { Key } from 'webdriverio'

describe('retirement caluclator valiadtion',function(){

    xit("error validation", async function(){
        await PreRetirePage.open();
        await browser.maximizeWindow();
        await PreRetirePage.currentAge.setValue(28);
        await PreRetirePage.calculate.click();
        await browser.pause(30000);
        //console.log(await PreRetirePage.errorMessage.getText());
        await browser.pause(30000);
    });

    it('form fillup when ssn benefits yes', async function(){
       await PreRetirePage.open();
       await PreRetirePage.currentAge.setValue(28);
       await PreRetirePage.retirementAge.setValue(45);
       await browser.pause(20000);
       await PreRetirePage.currentIncome.click();
       await PreRetirePage.currentIncome.setValue(1000);
       await PreRetirePage.spouseIncome.addValue(90000);
       await PreRetirePage.currentTotalSavings.addValue(200000);
       await PreRetirePage.savingsIncreaseRate.addValue(20);
       await PreRetirePage.currentAnnualSavings.addValue(20);
       await PreRetirePage.noSocialBenefits.click();
    //    await PreRetirePage.maritalStatusSingle.click();
    //    await PreRetirePage.socialOverrideAmmount.setValue(500);
       await PreRetirePage.calculate.click();
       await browser.pause(60000);



    });

    


});