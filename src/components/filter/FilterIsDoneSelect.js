import React, { useContext } from 'react';
import { FilterContext } from './FilterDetails.js';

export default function FilterIsDoneSelect() {
    const [filter, setFilter] = useContext(FilterContext);

    function handleChange(e) {
        if (e.target.value === "")
            setFilter({...filter, isDone: null});
        if (e.target.value === "true")
            setFilter({...filter, isDone: true});
        if (e.target.value === "false")
            setFilter({...filter, isDone: false});
    }
    
    return (
        <>
            <label>Statut :
            <select name="selectedIsDone" value={ filter.isDone === null ? "" : filter.isDone.toString()} onChange={ handleChange }>
                <option value="">-</option>
                <option value="true">Complété</option>
                <option value="false">En cours</option>
            </select>
            </label>
        </>
    );
}