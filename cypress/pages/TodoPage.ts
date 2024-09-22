export default class TodoPage{

    private get welcomeMessage(){
        return '[data-testid="welcome"]';
    }

    private get deleteTodoList(){
        return '[data-testid="delete"]';
    }

    private get noTodomessage(){
        return '[data-testid="no-todos"]';
    }

    private get todoItem(){
        return '[data-testid="todo-item"]';
    }

    load(){
         cy.visit('/todo');
    }

    getWelcomeMessage(){
        return cy.get(this.welcomeMessage);
    }

    deleteTodo(){
        cy.get(this.deleteTodoList).click();
    }
    getNoTodoMessage(){
        return cy.get(this.noTodomessage);
    }
    getTodoItem(){
        return cy.get(this.todoItem)
    }

}