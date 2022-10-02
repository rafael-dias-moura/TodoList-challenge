import React, { FC } from "react";

interface Props {
    applyFilter: (arg: string) => void;
}

const TodoFilter: FC<Props> = ({ applyFilter }) => {
    /* const [selectedFilter, setSelectedFilter] = useState("active");

    useEffect(() => {
        applyFilter(selectedFilter)
    }, [applyFilter, selectedFilter]);  */
    
    return (
        <div className="selector">
            <button type="button" onClick={(event) => {applyFilter(event.currentTarget.value)}} className="button" value="all">Todos </button>
           <button type="button" onClick={(event) => applyFilter(event.currentTarget.value)} className="button" value="done">Feitos</button>
            <button type="button" onClick={(event) => applyFilter(event.currentTarget.value)} className="button" value="active">Pendentes</button> 
        </div>
    );
};

export default TodoFilter;

