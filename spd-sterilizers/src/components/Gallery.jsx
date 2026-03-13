import React, { } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const Gallery = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
      };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid',
        height: '100%',
    };

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Sterilizers</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        </div>
                    </Card.Text>
                    <Link className="nav-item" style={linkStyle} to="/Steam">
                  <button className="nav-link rounded">Steam</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Eo">
                  <button className="nav-link rounded">Ethylene Oxide (EO)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Ltgp">
                  <button className="nav-link rounded">Low-Temp Gas Plasma(LTGP)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Vpro">
                  <button className="nav-link rounded">Low-Temp Hydrogen Peroxide (V-PRO)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Ozone">
                  <button className="nav-link rounded">Hydrogen Peroxide Ozone</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Iuss">
                  <button className="nav-link rounded">IUSS</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Dryheat">
                  <button className="nav-link rounded">DRY HEAT</button>
                </Link> 
                    <Card.Text >
                       
                    </Card.Text>
                </ Card.Body>
            </ Card> 
        </div>
    );
  };
  
  export default Gallery;