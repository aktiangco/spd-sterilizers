import React, { } from 'react';
import Card from 'react-bootstrap/Card';

const Iuss = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
      };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid',
        height: '100%'
    };

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Immiediate-Use Steam Sterilizer (IUSS)</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        </div>
                    </Card.Text>
                    <Card.Text >
                        hi
                    </Card.Text>
                </ Card.Body>
            </ Card> 
        </div>
    );
  };
  
  export default Iuss;