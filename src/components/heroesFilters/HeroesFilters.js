import { useState, useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { heroesFiltred, heroesFetched } from "../../actions";


const HeroesFilters = () => {
    const {heroes} = useSelector(state => state)
    const dispatch = useDispatch()
    
    const filterEl = (type) => {
        dispatch(heroesFiltred(type));
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