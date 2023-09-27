const Page = require('./page');

class PreretirePage extends Page {

    get currentAge(){
        return $('#current-age');
    }

    get retirementAge(){
        return $('#retirement-age');
    }
    
    get currentIncome(){
        return $('//input[@id="current-income"]');
    }

    get spouseIncome(){
        return $('#spouse-income');
    }

    get currentTotalSavings(){
        return $('#current-total-savings');
    }

    get currentAnnualSavings(){
        return $('#current-annual-savings');
    }

    get savingsIncreaseRate(){
        return $('#savings-increase-rate');
    }

    get yesSocialBenefits(){
        return $('#yes-social-benefits');
    }

    get noSocialBenefits(){
        return $('#no-social-benefits');
    }
    get maritalStatusSingle(){
        return $('#single');
    }
    get maritalStatusMarried(){
        return $('#married');
    }

    get socialOverrideAmmount(){
        return $('#social-security-override');
    }

    get calculate(){
        return $("//*[@data-tag-id='submit']");
    }

    get clearForm(){
        return $("//*[text()='Clear form']");
    }

    get errorMessage(){
        return $('#calculator-input-alert-desc')
    }

    open () {
        return super.open('');
    }

    clickonCalc() {
        this.calculate.click();
    }



}

module.exports = new PreretirePage();