import UserAPI from "../api/UserApi";
import User from "../models/User";

export default class RegisterPage {

   private get FirstNameInput() {
        return '[data-testid="first-name"]';
    }
    private get LastNameInput() {
        return '[data-testid="last-name"]';
    }
    private get EmailInput() {
        return '[data-testid="email"]';
    }
    private get PasswordInput() {
        return '[data-testid="password"]';
    }
    private get ConfirmPasswordInput() {
        return '[data-testid="confirm-password"]';
    }
    private get SubmitButtonInput() {
        return '[data-testid="submit"]';
    }

    load() {
        cy.visit('/signup');
    }
    register(user: User) {
        cy.get(this.FirstNameInput).type(user.getFirstName());
        cy.get(this.LastNameInput).type(user.getLastName());
        cy.get(this.EmailInput).type(user.getEmail());
        cy.get(this.PasswordInput).type(user.getPassword());
        cy.get(this.ConfirmPasswordInput).type(user.getPassword());
        cy.get(this.SubmitButtonInput).click();
    }

    registerUsingApi(user: User){
        return new UserAPI().register(user).then(response => {
            user.setToken(response.body.access_token);
        });;
    }
}