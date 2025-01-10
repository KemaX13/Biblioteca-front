import AddItemForm from "../../../components/molecules/Form/AddItemForm/AddItemForm";
import "./CreateBook.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");


  const navigate = useNavigate();

  const addBook = async (event) => {
    event.preventDefault();

    const newBook = {
      title: title,
      author: author,
      ISBN: isbn,
      description: description,
      genre: genre,
      cover: cover


    }

    await createBook(newBook);
    navigate("/app/books");
  }

  return (
    <>
      <AddItemForm />
    </>
  )
}

export default CreateBook