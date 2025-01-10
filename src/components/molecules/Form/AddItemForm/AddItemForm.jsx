import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBook from "../../../../hooks/useBook/useBook";
import "./AddItemForm.css";

const AddItemForm = () => {
    const { addBook } = useBook();
    const initialState = {
        title: "",
        author: "",
        isbn: "",
        description: "",
        genre: "",
        cover: "",
    };
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //decidir si se deja los siguientes comandos de los errores para que deje añadir los nuevos libros

        /* const errors = {};
        if (!formData.title) errors.title = "Title is required";
        if (!formData.author) errors.author = "Author is required";
        if (!/^\d{13}$/.test(formData.isbn)) errors.isbn = "ISBN must be 13 digits long";
        if (!formData.description) errors.description = "Description is required";
        if (!formData.genre) errors.genre = "Genre is required";
        if (!formData.cover) errors.cover = "Cover is required";
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        } */

        try {
            await addBook(formData);
            navigate("/dashboard/books");
        } catch (error) {
            console.error("Error adding book: ", error);
        }

    };

    const handleCancel = () => {
        setFormData(initialState);
        navigate("/books");
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="title">
                            <label htmlFor="title">Título del libro</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="author-cover-row">
                        <div className="author-item">
                            <label htmlFor="author">Autora</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>
                        <div className="isbn-item">
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                id="isbn"
                                name="isbn"
                                type="text"
                                value={formData.isbn}
                                onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="description-row">
                        <div className="description-item">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="genre-item">
                            <label htmlFor="genre">Genre</label>
                            <input
                                id="genre"
                                name="genre"
                                value={formData.genre}
                                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                            />
                        </div>
                        <div className="cover-item">
                            <label htmlFor="cover">Portada</label>
                            <input
                                id="cover"
                                name="cover"
                                type="text"
                                onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="button-row">
                        <button className="SaveButton" type="submit">
                            Guardar
                        </button>
                        <button
                            className="CancelButton"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default AddItemForm;