export class LoginPage {
    constructor(page) {
        this.page = this.page
        this.usernameField = page.getByRole('textbox', { name: 'username' })
        this.passwordField = page.locator("[type='password']")
        this.loginButton = page.locator("[type='submit']")
    }

    async loginWithUser() {
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()
    }
}
