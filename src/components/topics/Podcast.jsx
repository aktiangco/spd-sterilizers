import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../assets/images/or-spd.png";
import { Youtube } from "react-bootstrap-icons";

function Podcast() {
  return (
    <div>
      <div>
        <Card className="container custom-card">
          <Card.Body>
            <Card.Title className="font-weight-bold">
              <h1>Podcast Report</h1>
            </Card.Title>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={profile}
                alt="Allan Kris Tiangco"
                className="section-image"
              />
              <div>
                <h6>
                  OR/SPD Collaboration and the 2018 OR Today Live Conference
                  (featuring David Taylor)
                </h6>
                <div style={{ padding: "5px" }}>
                  <a
                    className="rounded custom-btn"
                    style={{
                      backgroundColor: "#52dcc5",
                      border: "none",
                      color: "black",
                    }}
                    href="https://youtu.be/kQ32uov5Z_g?si=dKgdnjDrU0ZQDadb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={40} style={{ padding: "5px" }} />
                    <div style={{ padding: "5px" }}>Link here</div>
                  </a>
                </div>
              </div>
            </div>
                      <Card.Text>
                          paragraph 1
                      </Card.Text>
                      <Card.Text>
                          paragraph 2
                      </Card.Text>
                      <Card.Text>
                          paragraph 3
                      </Card.Text>
                      <Card.Text>
                          paragraph 4
                      </Card.Text>
                      <Card.Text>
                          paragraph 5
                      </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Podcast;
