import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";


function BooksDetails() {

  const { id } = useParams();

  const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {

    axios
      .get(`https://openlibrary.org/works/${id}.json`)

      .then((response) => {

        setBook(response.data);

        setLoading(false);

      })

      .catch((error) => {

        console.log(error);

        setError("Error loading book details");

        setLoading(false);

      });

  }, [id]);


  if (loading) {
    return (
      <h2 className="text-center mt-5">
        Loading book details...
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


  if (!book) {
    return null;
  }


  let description = "No description available.";


  if (typeof book.description === "string") {

    description = book.description;

  } else if (
    book.description &&
    typeof book.description === "object"
  ) {

    description = book.description.value;

  }


  return (

    <Container className="book-details">

      <h1 className="text-center mb-4">
        {book.title}
      </h1>


      <div className="description">

        <strong>Description:</strong>

        <p>
          {description}
        </p>

      </div>


      {book.covers && book.covers.length > 0 ? (

        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          className="details-image"
        />

      ) : (

        <p className="text-center">
          No cover available.
        </p>

      )}

    </Container>

  );
}

export default BooksDetails;