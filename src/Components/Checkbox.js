import React, { useState } from 'react';
import MatchButton from './MatchButton';
import axios from 'axios';

const Checkbox = (props) => {

    const [technologies,] = useState(['java', 'hibernate', 'laravel', 'angular', 'jquery', 'reactjs', 'asp.net', 'spring', 'springboot', 'flutter', 'xamarin', 'kotlin', 'vuejs', 'plsql', 'oracle', 'expressjs', 'nodejs', 'mysql', 'swift', 'mariadb'])
    const [skills, setSkills] = useState([])
    
    const handleChange = (event) => {
        let updatedList = [...skills]
        if (event.target.checked) {
            updatedList = [...skills, event.target.value]
        } else {
            updatedList = [...skills].filter(skill => event.target.value != skill)
        }
        setSkills(updatedList)
    }

    const techs = technologies.map((tech) => {
        return (
            <label key={tech}>
                <input value={tech} type="checkbox" onChange={handleChange} />
                {tech}
            </label>
        )
    })

    const matching = (e) => {

        e.preventDefault()
        let param = skills.join(' , ')
        let url = 'http://localhost:8080/JavaProject/webapi/user/' + param

        axios.post(url)
            .then((response)=>response.data)
            .then((result)=>props.matchingData(result))
            .catch(function (error) {
                console.log(error);
            })

    }

    return (
        <form onSubmit={matching}>
            {techs}
            <MatchButton />
        </form>
    )
}

export default Checkbox;