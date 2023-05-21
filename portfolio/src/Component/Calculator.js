import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

const Calculator = () => {
  return (
    <>
    <Card className='pos-ctr' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Speed Converter</Card.Title>
        <Card.Subtitle>Convert Kmph to Mph</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
              </Card.Body>
    </Card></>
  )
}
const KmphInput =()=>{

}
const MphInput =()=>{

}
export default Calculator