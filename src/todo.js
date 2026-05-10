import { loadTodos, saveTodos } from "./storage";

/*We are importing two functions from storage.js-loadTodos and saveTodos */

let todos = loadTodos();

/*We are setting let declaration todos so it calls loadTodos function */

export function getTodos() {
    return todos;
}

/*We are exporting function getTodos which return let declaration todos*/

/* We are exporting function addTodo with all elements which are in ()- then with push we are
adding it to todos let declaration, writing again al elements and declaring date with condition
to export if true and if it is false, and also completed false is set as boolean so it can
change whether is it true or false*/

export function addTodo(title, priority, description, folder, date) {
  todos.push({
       title,
       priority,
       description,
       folder,
       date: date ? new Date(date) : new Date(),
       /*condition ? exprIfTrue : exprIfFalse */
       completed: false,
       /*not finished */
    /*initialize an object property,  */
  });
   
  saveTodos(todos);

  /*Saving the function into storage.js-calling the function */

}

/*This function updates a specific todo item within an array named todos at a given index. 
It uses the spread operator (...) to create a new object, updating the title, priority, description, folder, and date, 
while saving the changes to persistent storage using saveTodos. The date is only updated if a new date is provided */
/*YOu can see that we have similar declarations like in previous function */

export function editTodo(index, title, priority, description, folder, date){
   todos[index] = {
        ...todos[index],
        title,
        priority,
        description,
        folder,
        date: date ? new Date(date) : todos[index].date,
   };
   saveTodos(todos);

  /*Saving the function into storage.js-calling the function */
}

/*In this function we are changing whether todo is completed or not-is it saved or it wasn't */

export function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;

    saveTodos(todos);
}

/*This is where we call function which deletes todo with splice declaration-splice removes or replace existing elements */

export function deleteTodo(index) {
    todos.splice(index, 1);

    saveTodos(todos);
}