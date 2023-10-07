import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Features() {
  return (
    <div className='features'>
      <Row xs={1} md={4} className="g-4">
        <Col key={1}>
          <Card>
            <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/345x379-upland-gear1.jpg" />
            <Card.Body>
              <Card.Title>UPLAND HUNTING GEAR</Card.Title>

            </Card.Body>
            <Card.Footer>
              <Button variant="primary">SHOP NOW</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/345x379_waterfowl.jpg" />
            <Card.Body>
              <Card.Title>WATERFOWL ITEM GEAR</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">SHOP NOW</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col key={3}>
          <Card>
            <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/345x379_ClayShooting.jpg" />
            <Card.Body>
              <Card.Title>CLAY SHOOTING GEAR</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">SHOP NOW</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col key={4}>
          <Card>
            <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/en-us/assets/39/7/345x379_rifleHunting.jpg" />
            <Card.Body>
              <Card.Title>BIG GAME HUNTING GEAR</Card.Title>

            </Card.Body>
            <Card.Footer>
              <Button variant="primary">SHOP NOW</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Features