import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { BookContext } from "../../../context/BookContext/BookContext";
import useBook from "../../../hooks/useBook/useBook";

function Table() {
  const {books, shortenDescription} = useBook(BookContext);
  return (
    <table>
        <thead>
            <tr>
                <th>Acción</th>
                <th>Id</th>
                <th>Título</th>
                <th>Autora</th>
                <th>Portada</th>
                <th>Sinopsis</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody>
        {
            books.map((book) => (
              <tr key={book.id} >
                <td>
                  <section className="icon-section">
                    <FaEye />
                    <FaPen />
                    <FaTrashAlt />
                  </section>
                </td>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.cover}</td>
                <td>{shortenDescription(book.description)}</td>
                <td>{book.ISBN}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}

export default Table