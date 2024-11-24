import React, {useContext} from 'react';
import { FilterContext } from './FilterDetails.js';

export default function FilterTodoBusinessButton() {
    const [filter, setFilter] = useContext(FilterContext);

    function handleClick(e) {
        e.preventDefault();
        if (!filter.isBusinessOnly) {
            setFilter({...filter, types: ['RH', 'Marketing'], isBusinessOnly : true})
        } else {
            setFilter({...filter, types: [], isBusinessOnly : false})
        }
    }

    return (
		<button onClick={handleClick}>Todos Business</button>
    );
}

