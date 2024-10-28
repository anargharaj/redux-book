import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<>
<Navbar id='nav' style={{backgroundColor:"brown",color:"white"}}>
        <Container >
          <Navbar.Brand href="#home"   >
            {/* <i className="fa-solid fa-chart-simple text-primary" /> */}
            {/* <i className="fa-solid fa-book fa-2xl " ></i> */}
            <i className="fa-solid fa-book fa-2xl" ></i>
            {' '}
            Books
          </Navbar.Brand>
        </Container>
      </Navbar>


    


</> 

)
}

export default Header