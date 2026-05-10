import './style.css';
/*We have imported style.css so it can load on page */
import {addTodo} from "./todo";
/*We have imported addTodo function from todo.js and export feature have enable us to do it */
import {renderTodos} from "./dom";
/*We have imported renderTodos function from dom.js and export feature have enable us to do it */
import {editTodo} from "./todo";
/*We have imported editTodo function from todo.js and export feature have enable us to do it */

const titleInput = document.getElementById("todo-title");
/*We are declaring const and selecting id todo-title from dialog-index.html */
const prioritySelect = document.getElementById("todo-priority");
/*We are declaring const and selecting id todo-priority from dialog-index.html */
const descriptionInput = document.getElementById("todo-description");
/*We are declaring const and selecting id todo-description from dialog-index.html */
const folderSelect = document.getElementById("todo-folder");
/*We are declaring const and selecting id todo-folder from dialog-index.html */
const dateInput = document.getElementById("todo-date");
/*We are declaring const and selecting id todo-date from dialog-index.html */
const dialog = document.getElementById("todo-dialog");
/*We are declaring const and selecting id todo-dialog from dialog-index.html */
const openBtn = document.getElementById("open-dialog");
/*We are declaring const and selecting id open-dialog from dialog-index.html */
const closeBtn = document.getElementById("close-dialog");
/*We are declaring const and selecting id close-dialog from dialog-index.html */
const form = document.getElementById("todo-form");
/*We are declaring const and selecting id todo-form from dialog-index.html */

const allTasks = document.getElementById("all-tasks");
/*We are declaring const and selecting id all-tasks from all-tasks button */
const done = document.getElementById("done");
/*We are declaring const and selecting id done from done button */
const work = document.getElementById("work");
/*We are declaring const and selecting id work from work button */
const personal = document.getElementById("personal");
/*We are declaring const and selecting id personal from personal button */
const study = document.getElementById("study");
/*We are declaring const and selecting id study from study button */

let currentFilter = "all";
/*We are declaring variable currentFilter and declaring string value all */

openBtn.onclick = () => {
    delete dialog.dataset.editIndex;
    dialog.showModal();
};
/*We are making open button workable with arrow function
It removes any previously stored edit index (via delete dialog.dataset.editIndex) 
and displays the modal using dialog.showModal()  */

closeBtn.onclick = () => {
    dialog.close();
};
/*It makes close button workable, with arrow function which calls dialog.close function */

allTasks.onclick = () => {
    currentFilter = "all";
    renderTodos(currentFilter);
};
/*It makes all tasks button workable which loads all tasks that we have created calls string value all and 
renderTodos function with condition currentFilter-all*/

done.onclick = () => {
    currentFilter = "completed";
    renderTodos(currentFilter);
};

/*Also when you declare for an example done.onclick you are giving done button onclick element which you
probably declared in html but you can in js, it's similar like in previous functions just
for currentFilter it's completed condition*/

work.onclick = () => {
    currentFilter = "work";
    renderTodos(currentFilter);
};

/*It's similar as previous it just have work condition */

personal.onclick = () => {
    currentFilter = "personal";
    renderTodos(currentFilter);
};

/*It's similar as previous it just have study condition */

study.onclick = () => {
        currentFilter = "study";
        renderTodos(currentFilter);
};

/*The line of code e.preventDefault(); inside a form's submit event listener is used to stop the browser's default behavior, 
which is to refresh the page and send form data to the server via the URL or request body and
form.addEventListener("submit", (e) => { ... }); is the standard way to capture and handle a form submission. */

form.addEventListener("submit", (e) => {
     e.preventDefault();

     /*This JavaScript code line safely retrieves a numerical index from an HTML element's data-edit-index attribute 
     (e.g., data-edit-index="5") 
     and converts it to a number, or sets it to undefined if the attribute is missing. */

     const editIndex = dialog.dataset.editIndex !== undefined ? Number(dialog.dataset.editIndex) : undefined;

    /* This code snippet is a conditional check used to handle updates to an existing item in a web application. 
    It ensures that the editTodo function only runs if a specific item has been selected for editing*/
     
     if (editIndex !== undefined) {
        editTodo(
            editIndex,
            titleInput.value,
            prioritySelect.value,
            descriptionInput.value,
            folderSelect.value,
            dateInput.value,
        );

        delete dialog.dataset.editIndex;

        /*You can delete dialog with this line */

     } else {
        addTodo(
           titleInput.value,
           prioritySelect.value,
           descriptionInput.value,
           folderSelect.value,
           dateInput.value,
        );
     }

     /*This part of code allows you to addTodo in web page and 
     in JavaScript, the term .value usually refers to a property used to interact with data in HTML form elements */


     form.reset();
     dialog.close();

     renderTodos(currentFilter);
});

renderTodos(currentFilter);

/*This JavaScript code snippet handles closing a modal dialog after a form submission. It clears the input fields, hides 
the dialog box using the HTML5 dialog.close() method, and updates the UI by re-rendering the todo list based on the current filter */

