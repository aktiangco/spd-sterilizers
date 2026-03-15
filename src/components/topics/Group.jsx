import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import group from "../../assets/images/group.png";
import me from "../../assets/images/me.png";
import adiel from "../../assets/images/adiel.png";
import vinessa from "../../assets/images/vinessa.png";
import john from "../../assets/images/john.png";
import cesar from "../../assets/images/cesar.png";
//import eric from "../../assets/images/eric.png";

const Group = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textAlign: "center" }}>Sterilizer's Group Project</h1>
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Image
              style={{
                width: "75%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px black solid",
              }}
              src={group}
              fluid
            />
            <br></br>
            <h2>The Clean Team</h2>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <img src={john} className="section-image group-image" style={{ height: " 150px", width: "150px" }} />
              <div>
                <h2>Steam Sterilizer</h2>
                <h5>Alcala, Eric</h5>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>

          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              <img src={adiel} className="section-image group-image" style={{ height: " 150px", width: "150px" }}  />
              <div>
                <h2>Ethylene Oxide</h2>
                <h4>Valquez Gonzalez, Adiel</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "blue",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "#50c878", color: "black" }}
            >
              <img src={john} className="section-image group-image" style={{ height: " 150px", width: "150px" }}  />
              <div>
                <h2>Low-Temperature Gas Plasma</h2>
                <h4>Bejarin, John</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "#50c878",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "red", color: "black" }}
            >
              <img src={cesar} className="section-image group-image" style={{ height: " 150px", width: "150px" }}  />
              <div>
                <h2>Low-Temperature Hydrogen Peroxide(V-Pro)</h2>
                <h4>Trejo, Cesar</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "red",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "pink", color: "black" }}
            >
              <img src={vinessa} className="section-image group-image" style={{ height: " 150px", width: "150px" }}  />
              <div>
                <h2>Hydrogen Peroxide Ozone Sterilization</h2>
                <h4>Cofield, Vinessa</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "pink",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "#7852a9", color: "white" }}
            >
              <img src={me} className="section-image group-image" style={{ height: " 150px", width: "150px" }}  />
              <div>
                <h2>Dry Heat and IUSS</h2>
                <h4>Tiangco, Allan</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#7852a9",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Open Google Slides Presentation
                </a>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Group;
