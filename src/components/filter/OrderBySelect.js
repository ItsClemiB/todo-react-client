import React, { useContext } from 'react';
import { FilterContext } from './FilterDetails.js';

export default function OrderBySelect() {
    const [filter,setFilter] = useContext(FilterContext);

    function handleChange(e) {
        setFilter({...filter, orderBy: e.target.value === "" ? null : e.target.value });
	}

    return (
        <>
            <label>Trier par date :
            <select name="selectedOrderBy" value={filter.orderBy === null ? "" : filter.orderBy} onChange={handleChange}>
                <option value="">-</option>
                <option value="DATE_ASC">Du plus ancien au plus récent</option>
                <option value="DATE_DESC">Du plus récent au plus ancien</option>
            </select>
            </label>
        </>
    );
}

