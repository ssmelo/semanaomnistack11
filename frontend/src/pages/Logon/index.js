import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './style.css';

import api from '../../service/api';


import heroesImg from'../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();
        
        try{
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)            

            history.push('/profile')
        } catch(err){
            alert("Erro o login")
        }

    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;