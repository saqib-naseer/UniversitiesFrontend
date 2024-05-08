import React, { useState } from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

function App() {
    const [country, setCountry] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    

    const handleClick = async () => {
        try {
            setLoading(true);
            setData(null)
            if(country==''){
            setLoading(false);
            setError(true);
                return;
            }
            setError(false);
            const data = await (await fetch(`http://universities.hipolabs.com/search?country=${country}`)).json()
            setLoading(false);
            setData(data);

        } catch (err) {
            console.log(err.message)
            setLoading(false);

        }
    }

    function checkResponse(data) {
        if (data) {
            console.log(data)
            
        } else {
            return null;
        }

    }

    return (

        <Container>
             <Row>
             <Col>
             <Form>
            
            <Form.Group>
          
              <Form.Label>Country Name</Form.Label>
          
           
              <Form.Control size="lg" required="required" placeholder='Enter Country' value={country} onChange={e => setCountry(e.target.value)} />
              
      
          
              <a>
               Number Of Universities : {data && data.length}
              </a>
             
      
            </Form.Group>
      </Form>
      </Col>
      <Col className="d-flex align-items-center justify-content-center"> 
       <Button style={{ marginRight: "auto" }} type="submit" onClick={handleClick} as="a" variant="primary">Search</Button></Col>
      </Row>

      <Row>
      <div>
        
            {checkResponse(data)}

            <div class="text-right">
            {loading && <h5 style={{ color: 'green' }}>Loading...</h5>}
            {error && <h5 style={{ color: 'red' }}>Please input some value for country</h5>}
</div>
        {data && data.map((university) => (

        

         
            <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{university.name}</Accordion.Header>
          <Accordion.Body>
          {university['name']}

          {university['state-province']}
          {university.country}
          {/* {university.domains && university.domains.map(university =>{ }} */}

          </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>
            
       
        ))}



    
      
        </div>
      </Row>
    </Container>


  
    )

}

export default App;