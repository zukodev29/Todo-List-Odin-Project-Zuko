export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));

}
/*This function stores todos items in our webpage */
/*json.stringify converts JS object or values in JSON string and .set item is method to store
web page storage */

/*This function loadTodos, via getItem it gets item that is stored in saveTodos function
json.parse converts json elements into js elements and that is data,
.map is used for saving elements  */

/*... it exports elements as individual */

export function loadTodos() {
    const data = localStorage.getItem("todos");

   if (!data) return [];

   const parsed = JSON.parse(data);


   return parsed.map (todo => ({
        ...todo,
        date: new Date(todo.date),

   }));
   /*This returns the date in todo list */

}