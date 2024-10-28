# TODO LIST APP

### Fonctional improvements to add :
- Add front-end side filtering : filtering on status
- Add back-end side filtering : filtering on type & order by
- Add css

### Technical improvements :
#### 1. Project Structure
The current structure of the projet is only suitable for basic fonctionalities. Create a structure more suited for projet growth.

#### 2. Component structure
The target component structure is the following :

---> Todos : takes care of loading the todos based on the defined filter\
------> TodoListFilter : holds the definition (state) of the filters to apply:\
----------> DateSortingOptionSelector\
----------> TypeFilteringSelector\
----------> StatusFilteringSelector\
----------> BusinessFilteringButton\
----------> ResetFilterButton\
------> TodoList : display the filtered todos\
----------> TodoListItem : summarize the todo\
----------> ToggleTodoStatusButton : update the todo status

---> TodoDetails\
------> ToggleTodoStatusButton\
------> BackToTodoListButton

#### 2. Error handling
1. Add an error page that allows to go back to index page for routing errors
2. Add a friendly display when the list of todos is empty
