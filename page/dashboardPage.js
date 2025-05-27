export class DashboardPage {
    constructor (page) {
        this.page = page
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb-module')
    }
    async checkDashboardPage() {
        this.dashboardHeader.waitFor()
    }
}