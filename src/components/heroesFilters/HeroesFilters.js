import { useState, useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { heroesFiltred, heroesFetched } from "../../actions";


const HeroesFilters = () => {
    const [current, setCurrent] = useState("all")

    const {heroes} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(heroes);
        
        dispatch(heroesFetched(heroes));
    }, [])

    useEffect(() => {
        switch(current) {
            case "all":
                dispatch(heroesFiltred(heroes));
                break;

            case "fire":
                dispatch(heroesFiltred(heroes.filter(item => item.element == "fire")));
                break;
            
            case "water":
                dispatch(heroesFiltred(heroes.filter(item => item.element == "water")));
                break;

            case "wind":
                dispatch(heroesFiltred(heroes.filter(item => item.element == "wind")));
                break;

            case "earth":
                dispatch(heroesFiltred(heroes.filter(item => item.element == "earth")));
                break;
        }
    }, [current])
    
    
    const filterEl = (type) => {
        setCurrent(type)
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button onClick={() => {filterEl("all")}} className="btn btn-outline-dark active">Все</button>
                    <button onClick={() => {filterEl("fire")}} className="btn btn-danger">Огонь</button>
                    <button onClick={() => {filterEl("water")}} className="btn btn-primary">Вода</button>
                    <button onClick={() => {filterEl("wind")}} className="btn btn-success">Ветер</button>
                    <button onClick={() => {filterEl("earth")}} className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;