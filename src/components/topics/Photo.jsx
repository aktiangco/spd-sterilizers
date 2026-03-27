import React, { useMemo } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Photo() {
  const photos = useMemo(() => {
    const arr = Array.from(
      { length: 29 },
      (_, i) => `${process.env.PUBLIC_URL}/images/${i + 1}.png`
    );
  
    return arr.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <Card
        className="custom-card"
        style={{
          width: "100%",
          maxWidth: "800px",
          marginTop: "20px",
        }}
      >
        <Card.Body >
          <h1 style={{ textDecoration: "underline", color: "#ffffff", justifyContent: "center" }}>
            Medtek Students (Batch Feb.2026)
          </h1>

          <div
            style={{
              backgroundColor: "black",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Carousel interval={3000} pause="hover">
              {photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <div
                    style={{
                      width: "100%",
                      height: "700px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "black",
                    }}
                  >
                    <img
                      src={photo}
                      alt={`Slide ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Photo;