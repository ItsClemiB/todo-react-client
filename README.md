Fonctional improvements to add : 
- Add Filtering
- Add css

Technical improvements :
1. Project Structure : the current structure of the projet is only suitable for basic fonctionalities. Create a structure more suited for projet growth, this includes :
    a. Isolating graphQL requests in a specific folder

1. Component structure : the target component structure is the following 

Todos : takes care of loading the todos based on the defined filter
    |——>  TodoListFilter : holds the definition (state) of the filters to apply
			|——> DateSortingOptionSelector
			|——> TypeFilteringSelector
			|——> StatusFilteringSelector
			|——> BusinessFilteringButton
			|——> ResetFilterButton
	|——>  TodoList : display the filtered todos
			|——> TodoListItem : summarize the todo
					|—-> ToggleTodoStatusButton : update the todo status

TodoDetails
	|—> ToggleTodoStatusButton
	|—> BackToTodoListButton

3. Error handling
	a. Add an error page that allows to go back to index page for routing errors
	b. Add a friendly display when the list of todos is empty
