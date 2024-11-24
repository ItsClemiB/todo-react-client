import React, {useContext} from 'react';
import {FilterContext} from './FilterDetails.js';
import OrderBySelect from './OrderBySelect.js'
import FilterTypesSelect from './FilterTypesSelect.js';
import FilterIsDoneSelect from './FilterIsDoneSelect.js';
import FilterTodoBusinessButton from './FilterTodoBusinessButton.js';

export default function TodoFilter() {
	const [, setFilter]= useContext(FilterContext);;

	function resetFilter(event) {
		event.preventDefault();
		setFilter({
			orderBy : null,
			types : [],
			isDone : null,
			isBusinessOnly : false
		  });
	}

	return (
		<>
			<FilterTypesSelect/>
			<FilterIsDoneSelect/>
			<OrderBySelect />
			<FilterTodoBusinessButton />
			<button onClick={ resetFilter }>Réinitialiser les filtres</button>
		</>
	);
}
