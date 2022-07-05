import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/iceage.jpeg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Ice Age</Card.Text>
         <Card.Text>Bagus 8.0/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/dilan.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Dilan 1990</Card.Text>
         <Card.Text>Bagus 8.5/10</Card.Text>
         </div>
       
      

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/aftermeetyou.jpeg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>After Meet You</Card.Text>
         <Card.Text>Bagus 7.8/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/residentevil.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Residen Evil: Retribution</Card.Text>
         <Card.Text>Bagus 8.5/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
