import React, { useState } from 'react';
import './Profile.css'

const Profile = () => {
    
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    
    const onChangeHandler = e => {
        setUsername(e.target.value)
    }
    
    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();

        const repositories = await fetch(profileJson.repos_url)
        const repoJson = await repositories.json();

        if(profileJson) {
            setData(profileJson)
            setRepositories(repoJson)
        }
    }
    
    
    return (
        <div>
            <input type='text' value={username} onChange={onChangeHandler} />
            <button type='submit' onClick={submitHandler}>Search</button>
        </div>
    )
}


export default Profile;