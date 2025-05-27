import { expect } from '@wdio/globals';
import SauceLabsLogin from '../../pages/saucelabsLogin.ts';

describe('Login Test', ()=>{
    it('login with correct creds', async()=>{
        await browser.url('/');
        await SauceLabsLogin.doLogin("standard_user","secret_sauce");
        const inventoryPageTitle:string = await browser.getTitle();
        console.log(inventoryPageTitle);
        await expect(inventoryPageTitle).toEqual("Swag Labs");
    })

})