import React from 'react'
import { Button, Card } from 'react-bootstrap'
const Cardd = ({ film }) => {
  return (
    <div>
      <Card bg='warning' style={{ width: '19rem', height: '45rem' }}>
        <Card.Body>
          <Card.Img variant='top' src={film.posterUrl} style={{ width: '15rem', height: '20rem' }} />
          <Card.Title>
            <h2>{film.title}</h2>
          </Card.Title>
          <Card.Text>
            <p>{film.description}</p>
          </Card.Text>
          <Card.Text>
            <p>{film.rate}</p>
          </Card.Text>
          <Button variant='primary'>Regarder le film</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardd
