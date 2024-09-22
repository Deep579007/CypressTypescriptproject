import TodoAPI from "../api/TodoApi";
import User from "../models/User";

export default class NewTodoPage {

    private get getnewtodoInput() {
        return '[data-testid="new-todo"]';
    }

    private get sebmitNewButtonInput() {
        return '[data-testid="submit-newTask"]';
    }

    load() {
        cy.visit('/todo/new');
    }

    addTodo(task: string) {
        cy.get(this.getnewtodoInput).type(task);
        cy.get(this.sebmitNewButtonInput).click();
    }
    addtodousingApi(user: User){
        return new TodoAPI().addTodo(user);
    }







}