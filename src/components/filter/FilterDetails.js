import { useState, createContext } from 'react';

export const FilterContext = createContext(); 

export function FilterProvider(props) {
    const [filter, setFilter] = useState({
        orderBy : null,
        types : [],
        isDone : null,
        isBusinessOnly : false
      });

    return (
        <FilterContext.Provider value={[filter, setFilter]}>
            {props.children}
        </FilterContext.Provider>
    );
    
}
