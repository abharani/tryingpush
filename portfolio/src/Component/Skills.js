import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Skills() {
    return (
      <Container>
        <Row>
          <Col><Card style={{ width: '10rem' }}>
                              <Card.Img variant="top" className='skill-card-img' src="https://miro.medium.com/max/600/1*hwAsUagd9XQ3gAhpOu7UPQ.png"
                              />
                              <Card.Body>
                                  <Card.Title><h4>JavaScript</h4></Card.Title>
                              </Card.Body>
                          </Card></Col>
          <Col><Card style={{ width: '10rem' }}>
                              <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.AbpVYoLwPGTqiP0PpqwpWAAAAA?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                              <Card.Body>
                                  <Card.Title><h4>Angular JS</h4></Card.Title>
                              </Card.Body>
                          </Card></Col>
          <Col><Card style={{ width: '10rem' }}>
                          <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.ZXsHb9aiendBhYLWCYw2bQHaGm?w=197&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                          <Card.Body>
                              <Card.Title><h4>React JS</h4></Card.Title>
                          </Card.Body>
                      </Card></Col>
        </Row>
        <Row>
          <Col><div> <Card style={{ width: '10rem' }}>
                          <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.mZnBqMNHuBxctd-WdmTEwwHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                          <Card.Body>
                              <Card.Title><h4>JQuery</h4></Card.Title>
                          </Card.Body>
                      </Card></div></Col>
          <Col><Card style={{ width: '10rem' }}>
                          <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                          <Card.Body>
                              <Card.Title><h4>HTML</h4></Card.Title>
                          </Card.Body>
                      </Card></Col>
           <Col><Card style={{ width: '10rem' }}> 
                          <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                          <Card.Body>
                              <Card.Title><h4></h4></Card.Title>
                          </Card.Body>
    </Card></Col>
        </Row>
      </Container>
    );
  }
export default Skills;

/*function Skills() {
    return (
        <div className='skill-main'>
            <div className='skill-text'> <h1>Skills</h1></div>
            <div className='Container skill-cards'>
                <Row>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" className='skill-card-img' src="https://miro.medium.com/max/600/1*hwAsUagd9XQ3gAhpOu7UPQ.png"
                            />
                            <Card.Body>
                                <Card.Title><h4>JavaScript</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.AbpVYoLwPGTqiP0PpqwpWAAAAA?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                            <Card.Body>
                                <Card.Title><h4>Angular JS</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </col>
                <col><div className='card-3'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.ZXsHb9aiendBhYLWCYw2bQHaGm?w=197&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        <Card.Body>
                            <Card.Title><h4>React JS</h4></Card.Title>
                        </Card.Body>
                    </Card>
                </div></col>
                <col><div className='card-4'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.mZnBqMNHuBxctd-WdmTEwwHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        <Card.Body>
                            <Card.Title><h4>JQuery</h4></Card.Title>
                        </Card.Body>
                    </Card>
                </div></col>
                <col><div className='card-4'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        <Card.Body>
                            <Card.Title><h4>HTML</h4></Card.Title>
                        </Card.Body>
                    </Card>
                </div></col>
                <col><div className='card-5'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" className='skill-card-img' src="https://th.bing.com/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        <Card.Body>
                            <Card.Title><h4>CSS</h4></Card.Title>
                        </Card.Body>
                    </Card>
                </div></col></Row>
            </div>
        </div>
    );
}
export default Skills;*/