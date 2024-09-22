
import User from '../models/User';
import RegisterPage from '../pages/RegisterPages';
import TodoPage from '../pages/TodoPage';

it("Should be able to register",() => {
    const user = new User();
    const registerPage = new RegisterPage();
    registerPage.load();
    registerPage.register(user);
    const todoPage = new TodoPage();
    todoPage.getWelcomeMessage().should('be.visible');
})