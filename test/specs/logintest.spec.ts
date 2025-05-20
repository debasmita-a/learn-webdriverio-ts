describe('Login Test', ()=>{
    it('login with correct creds', async()=>{
        await browser.url('/');
        console.log(await browser.getUrl());
        console.log(await browser.getTitle());
        const username = await $('input[data-test="username"]');
        await username.setValue('standard_user');
        const password = await $('input[data-test="password"]');
        await password.setValue('secret_sauce');
        const loginBtn = await $('input[data-test="login-button"]')
        await loginBtn.click();
        const inventoryPageTitle = await browser.getTitle();
        expect(inventoryPageTitle).toHaveTitle("Swag Labs");
    })
})