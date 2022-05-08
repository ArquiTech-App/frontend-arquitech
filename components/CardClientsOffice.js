import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Router from 'next/router'

export default function CardClientsOffice({officeData}) {
    console.log(officeData.clients);
    let clients = officeData.clients;

    function addClient(){
        Router.push('/AddClients')
    }
    
  return (
    <Card>
        
        {!clients ?null:clients.map(client=>{
            <h1>{client}</h1>
        })}
        <Button onClick={addClient}>Agregar Cliente</Button>
    </Card>
  )
}
