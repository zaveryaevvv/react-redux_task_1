import {useHttp} from '../../hooks/http.hook';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { heroesFetched, heroesFiltred } from '../../actions';
import { v4 as uuidv4 } from 'uuid';


const HeroesAddForm = () => {

    const [info, setInfo] = useState({})
    const [filterList, setFilterList] = useState([])

    const { addNewHero, getFilter } = useHttp();

    const heroes = useSelector(state => state.heroes)
    const dispatch = useDispatch();

    useEffect(() => {
        getFilter("http://localhost:3001/filters")
            .then(data => setFilterList(data))
            .catch(error => {
                throw new error;
            })
    }, []) 


    const fetchNewHero = (e) => {
        e.preventDefault()
        const newHero = { id: uuidv4(), ...info };
        dispatch(heroesFetched([...heroes, newHero]))

        const options = {
            url: "http://localhost:3001/heroes",
            body: JSON.stringify(newHero),
        };

        addNewHero(options)
    }

    const changeInfo = (e) => {
        switch(e.target.name) {            
            case "name":
                setInfo({
                    ...info,
                    [e.target.name] : e.target.value
                })
                break;

            case "text":                
                setInfo({
                    ...info,
                    "description" : e.target.value
                })
                break;

            case "element":      
                setInfo({
                    ...info,
                    [e.target.name] : e.target.value
                })
                break;

            default:
                console.log('here default');
                
        }

    }

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={(event) => changeInfo(event)}
                    value={info.name}/>
                    
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={(event) => changeInfo(event)}
                    value={info.skills}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(event) => changeInfo(event)}
                    value={info.element}>
                    
                    <SelectOptions arr={filterList}/>
                </select>
            </div>

            <button onClick={(event) => fetchNewHero(event)} type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

const SelectOptions = ({arr}) => {
    const template = {
        all : "Я владею элементом...",
        fire : "Огонь",
        water : "Вода",
        wind : "Ветер",
        earth : "Земля"
    }
    
    return (
        arr.map((element, index) => {
            return <option key={index} value={element}>{template[element]}</option>
        })
    )
}

export default HeroesAddForm;