import React, {useContext} from 'react';
import { FilterContext } from './FilterDetails.js';

export default function FilterTypesSelect() {
    const [filter, setFilter] = useContext(FilterContext);

	function handleChangeTypes(e) {
        if (filter.isBusinessOnly) return;

        let t = e.target.value;
        if (filter.types.find(type => type === t) === undefined) {
            setFilter({...filter, types: [...filter.types, t]});
        } else {
            setFilter({...filter, types: filter.types.filter(type => type !== t)});
        }     
	}

    return (
        <>
            <label>Type :
            <select name="selectedTypes" value={filter.types} multiple={true} onChange={handleChangeTypes}>
                <option value="RH">RH</option>
                <option value="Tech">Tech</option>
                <option value="Marketing">Marketing</option>
                <option value="Communication">Communication</option>
            </select>
            </label>
        </>
    );
}