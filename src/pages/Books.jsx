import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Books() {

  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    axios
      .get("https://openlibrary.org/search.json?q=programming")

      .then((response) => {

        setBooks(response.data.docs);

        setLoading(false);

      })

      .catch((error) => {

        console.log(error);

        setError("Error loading books");

        setLoading(false);

      });

  }, []);


  if (loading) {
    return (
      <h2 className="text-center mt-5">
        Loading books...
      </h2>
    );
  }


  if (error) {
    return (
      <h2 className="text-center mt-5 text-danger">
        {error}
      </h2>
    );
  }


  return (
    <Container className="my-5">

      <h1 className="text-center mb-4">
        Books
      </h1>

      <Row>
        {books.slice(0, 21).map((book, index) => {

          const id = book.key.split("/").pop();

          return (

            <Col
              key={`${id}-${index}`}
              md={4}
              sm={6}
              className="mb-4"
            >

              <Card className="book-card h-100">

                {book.cover_i ? (

                  <Card.Img
                    variant="top"
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="book-image"
                  />

                ) : (

                  <div className="no-cover">
                    No Cover
                  </div>

                )}


                <Card.Body>

                  <Card.Title>

                    <Link
                      to={`/books/${id}`}
                      className="book-link"
                    >
                      {book.title}
                    </Link>

                  </Card.Title>


                  <Card.Text>

                    {book.author_name
                      ? book.author_name.join(", ")
                      : "Unknown Author"}

                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          );

        })}

      </Row>

    </Container>
  );
}

export default Books;