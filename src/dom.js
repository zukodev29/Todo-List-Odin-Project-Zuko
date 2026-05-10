import {getTodos, toggleTodo, deleteTodo} from "./todo";
/*We imported function from todo.js and export enable us to import it */
import {format} from "date-fns";
/*We imported package that we have downloaded with terminal for date */
import calendarIcon from "../icons/icons8-calendar-48.png";
/*We imported image from icons folder */
import editIcon from "../icons/icons8-pencil-60.png";
/*We imported image from icons folder */
import binIcon from "../icons/icons8-trash-60.png";
/*We imported image from icons folder */
import workIcon from "../icons/icons8-work-50.png";
/*We imported image from icons folder */
import personalIcon from "../icons/icons8-name-tag-30.png";
/*We imported image from icons folder */
import studyIcon from "../icons/icons8-study-48.png";
/*We imported image from icons folder */


/*We created function that has two conditions todo and index they are in (),
we are selecting elements from dialog in index.html you se their names of id and classes and we are
assigning .value which is used to get or set the content of HTML form elements 
like <input>, <textarea>, and <select>. And at the end you have for an example todo.title which is
connected with functions in todo.js, visit it if you dont understand*/

export function openEditDialog(todo, index) {
    const dialog = document.getElementById("todo-dialog");

    document.getElementById("todo-title").value = todo.title;
    document.getElementById("todo-priority").value = todo.priority;
    document.getElementById("todo-description").value = todo.description;
    document.getElementById("todo-folder").value = todo.folder;
    document.getElementById("todo-date").value = format(todo.date, "yyyy-MM-dd");

    dialog.dataset.editIndex = index;
    /*This line keeps track of the time */
    dialog.showModal();
    /*The .showModal() method is a built-in JavaScript function used to display an HTML <dialog> element as a modal
     */
}
/*This functions renders our todos */
export function renderTodos(filter = "all") {
    const content = document.getElementById("content");
    content.innerHTML = "";
    /*First line selects id content from html and that is for plus button,
    and "" this ensures that html is always clear when it is called */

    /*This calls function getTodos from todo.js */

    let todos = getTodos();

    /*The .filter() method in JavaScript creates a new array containing only the elements that pass a specific test (condition)
    and this functions ensures that needs to happen with work, personal and study */

    if (filter === "completed") {
        todos = todos.filter(todo => todo.completed);
    }

    if (filter === "work") {
        todos = todos.filter(todo => todo.folder === "Work");
    }

    if (filter === "personal") {
        todos = todos.filter(todo => todo.folder === "Personal");
    }

    if (filter === "study") {
        todos = todos.filter(todo => todo.folder === "Study");
    }

    /*With .forEach function that executes a provided function once for every element in an array, this function executes elements
    from todos-previous function which calls todos from getTodos() function from todo.js */

    todos.forEach((todo) => {

        /*This code finds the positional index of a specific todo object within the array returned by getTodos().*/
        
        const realIndex = getTodos().indexOf(todo);

        /*Now we creating elements for dom card in our web page, first is div element
        and it's class card */

        const div = document.createElement("div");
        div.classList.add("card");

        /*Now we creating elements for dom card in our web page, second is div element
        and it's class card-header */

        const header = document.createElement("div");
        header.classList.add("card-header");

        /*Now we creating elements for dom card in our web page, third is h3 element
        and it's textContent which allows element to be displayed on web page*/

        const title = document.createElement("h3");
        title.textContent = todo.title;

        /*Now we creating elements for dom card in our web page, fourth is div element
        and it's class actions */

        const actions = document.createElement("div");
        actions.classList.add("actions");

        /*We are creating two elements of dom card button and img, and giving source for
        image to be displayed and giving class to it */

        const editBtn = document.createElement("button");
        const editImg = document.createElement("img");
        editImg.src = editIcon;
        editImg.classList.add("icon");

        /*We are creating interactive button which we be accessible to click via image, with arrow function
        and conditions are given in that function-todo and realIndex */

        editBtn.appendChild(editImg);
        editBtn.onclick = () => openEditDialog(todo, realIndex);

        /*We are two elements img and button same as in previous few lines above */

        const deleteBtn = document.createElement("button");
        const binImg = document.createElement("img");
        binImg.src = binIcon;
        binImg.classList.add("icon");

        /*In this part with appendChild we display delete button and the with onclick and arrow function we 
        are making it functional and with filter in () it has access to 'filter' function above */

        deleteBtn.appendChild(binImg);
        deleteBtn.onclick = () => {
            deleteTodo(realIndex);
            renderTodos(filter);
        };

        /*This displays buttons edit and delete into div actions */

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        /*This displays buttons edit and delete into card header div  */

        header.appendChild(title);
        header.appendChild(actions);

        /*We are creating p element amd giving it class in form of an array which contains todo.priority and $
        does The $ character is a legal "identifier" character. 
        This means you can start a variable or function name with it or include it anywhere in the name, and this lines
        executes which priority we can choose in card  */
     
        const priority = document.createElement("p");
        priority.textContent = todo.priority.toUpperCase();
        priority.classList.add(`priority-${todo.priority}`);

        /*We are creating p elements for description, similar as in previous lines it is referred  to todo.description */

        const description = document.createElement("p");
        description.textContent = todo.description;
        
        /*Same principal as in const priority */

        const folder = document.createElement("p");
        folder.textContent = todo.folder;
        folder.classList.add(`folder-${todo.folder}`);

        /*We are loading icons/images that we are going to use in dom, and todo is referred to 
        folder required unit in functions from todo.js and for which folder will that be given */

        let icon;
        if(todo.folder === "Work") icon = workIcon;
        if(todo.folder === "Personal") icon = personalIcon;
        if(todo.folder === "Study") icon = studyIcon;

        
        if (icon) {
            const img = document.createElement("img");
            img.src = icon;
            img.classList.add("folder-icon");
            folder.prepend(img);
        }

        /*Functions has icon condition and it creates image give is source and class name and with prepend does 
        this-adding content (elements, text, or data) to the beginning of a collection or container*/

        /*This creates div and its class date-container */

        const dateContainer = document.createElement("div");
        dateContainer.classList.add("date-container");

        /*This creates img and gives it source calendarIcon and class icon */

        const calIcon = document.createElement("img");
        calIcon.src = calendarIcon;
        calIcon.classList.add("icon");

        /*This creates p element for date which is referred to todo.date */

        const date = document.createElement("p");
        date.textContent = format(todo.date, "dd-MM-yyyy");

        /*With append we load calIcon and date and them will be in dateContainer div */

        dateContainer.appendChild(calIcon);
        dateContainer.appendChild(date);

        /*This creates button gives it class and displays it, and in textContent
        with todo.completed we are setting that either it can be done or to undone that task has been done */

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.textContent = todo.completed ? "Undo" : "Done";

        /* With arrow function we are making completebtn workable, and it is referred to toggleTodo() from todo.js 
        with condition realIndex and renderTodos() from this js with condition filter*/

        completeBtn.onclick = () => {
            toggleTodo(realIndex);
            renderTodos(filter);
        };

        /* If function has condition completed which is connected with values from todo.js functions*/
        /*title.style.textDecoration = "line-through" creates hr line and has class completed */

        if (todo.completed) {
            title.style.textDecoration = "line-through";
            div.classList.add("completed");
        }

        /*appendChild loads all this elements into divs that are in card and they all loaded
        in content id which we can access card with + button */

        div.appendChild(header);
        div.appendChild(priority);
        div.appendChild(description);
        div.appendChild(folder);
        div.appendChild(dateContainer);
        div.appendChild(completeBtn);


        content.appendChild(div);
    
    
    
    });
    
    }

