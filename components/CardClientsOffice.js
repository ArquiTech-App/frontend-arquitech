import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Router from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import avatarDefault from '../public/abstract-user-flat-4.svg'
import back from '../public/background-client.svg'
import plus from '../public/ftadd.svg'


export default function CardClientsOffice(props) {
    
    const {data, toClick, setPhotoUser} = props
    

let clients = data.clients;

    
    function addClient(){
        Router.push('/AddClients')
    }
    const ImageContainer = styled.div`
    position:relative;
    top: -170px;
    left:70px;
    
    width: 170px
    `  
    const ImagePlus = styled.div`
    position:relative;
    width: 40px;
    top: -210px;
    left:180px;
    cursor: pointer;
    
    `
    function handleClick(id){
        setPhotoUser(['client', id]);
        toClick();
    }
    
  return (
    <Card >
        <div className="container-card">

        {!clients ?<p>Sin clientes por el momento...</p>: clients.map(el => {
            let avatar = avatarDefault;
            avatar = avatar.src
            if(el.avatar){
                avatar = el.avatar
            }
            let id = el._id;
            
            return (
                
                <div className="container-clients card d-flex" key={el._id}>
                    <div className="client-container-photo">
                    <Image
                    className="image"
                    src={back}
                    alt="back"
                    />
                    <ImageContainer>

                    <img className="avatar" src={avatar} alt="avatar" width={150} height={150}/>
                    </ImageContainer>
                    <ImagePlus>
                    <Image
                    className="btn-plus"
                    src={plus}
                    alt="plus"
                    onClick={()=>{
                        
                        handleClick(id);
                    }}
                    />
                    </ImagePlus>
                    </div>
                    <div className="info-client">

                    <p className="name-client">{el.name} {el.lastName}</p>
                    <p className="cliente-privado">CLIENTE PRIVADO</p>
                    
                    <p className="projects"><span>Proyecto: </span>{(el.projects > 0)? el.projects.map(el =>{
                        <span>{el.proyects}</span>
                    }) : <span>Sin Proyectos</span>} </p>
                    <button className="btn-ver-mas">Ver Más...</button>
                    </div>
                </div>
            )
        })}
        </div>
        <div className="div-btn">

        <Button className="btn-client" onClick={addClient}>Agregar Cliente</Button>
        </div>
    </Card>
  )
}
