import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function CustomerCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Kishan M Savaliya</Card.Title>
          <Card.Text>
            Private Client
            Project My House
          </Card.Text>
          <Button variant="primary">Ver Mas</Button>
        </Card.Body>
      </Card>
    )
  }