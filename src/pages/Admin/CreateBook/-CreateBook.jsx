import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createBook } from '../../services/ApiBooksService';

const CreateBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  const navigate = useNavigate();

  const addBook = async (event) => {
    event.preventDefault();

    const newBook = {
      title: title,
      author: author,
      cover: cover,
      ISBN: isbn,
      description: description,
      language: language
    }

    await createBook(newBook);
    navigate("/app/books");
  }

  return (
    <form onSubmit={addBook}>
      <div>
        <label>Título</label>
        <input 
          type="text"
          value={ title }
          onChange={(event) => setTitle(event.target.value)} 
        />
      </div>
      <div>
        <label>Autora</label>
        <input 
          type="text"
          value={ author }
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div>
        <label>Portada</label>
        <input 
          type="file"
          value={ cover }
          onChange={(event) => setCover(event.target.files[0])}  
        />
      </div>

      <div>
        <label>ISBN</label>
        <input 
          type="text"
          value={ isbn }
          onChange={(event) => setIsbn(event.target.value)} 
        />
      </div>
      <div>
        <label>Sinopsis</label>
        <textarea 
          value={ description }
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label>Idioma</label>
        <input 
          type="select"
          value={ language }
          onChange={(event) => setLanguage(event.target.value)} 
        />
      </div>
      <button type="submit">Guardar</button>
      <Link to={ "/app/books" }><button>Cancelar</button></Link>
    </form>
  )
}

export default CreateBook