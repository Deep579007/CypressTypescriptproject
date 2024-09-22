
import User from '../models/User';
import NewTodoPage from '../pages/NewtodoPage';
import RegisterPage from '../pages/RegisterPages';
import TodoPage from '../pages/TodoPage';


describe('Todo test cases', () => {

    let user: User;
    let registerPage: RegisterPage;
    let newtodoPage : NewTodoPage;
    let todoPage : TodoPage;

    beforeEach(() => {
        newtodoPage = new NewTodoPage();
        registerPage = new RegisterPage();
        todoPage = new TodoPage();
        user = new User();
        registerPage.registerUsingApi(user);
    })
    it('should be able to add todo', () => {
        newtodoPage.load();
        newtodoPage.addTodo("Learn Cypress");
        todoPage.getTodoItem().should('contain.text', 'Learn Cypress');
    });

    it('should be able to delete a todo', () => {
        newtodoPage.addtodousingApi(user);
        todoPage.load();
        todoPage.deleteTodo();
        todoPage.getNoTodoMessage().should('be.visible');
    })
})

