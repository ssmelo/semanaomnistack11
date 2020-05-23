import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css'
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId')

    function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value
        }

        try{
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            
            history.push('/profile')

        } catch(err){
            alert("Erro ao tentar adicionar novo incidente")
        }
        
    }

    return(
        <div className="newincident-container">
            <div class="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />

                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>

                    <input type="text" placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button onClick={handleNewIncident}className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}