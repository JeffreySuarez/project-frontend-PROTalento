import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import booksTable from './booksTable.css'
const BooksTable = ({books}) => {

  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No.</th>
              <th className="border border-slate-600 rounded-md">Titulo</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Autor
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Año de publicación
              </th>
              <th className="border border-slate-600 rounded-md">
                Operaciones
              </th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8 ">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/detalle/${book._id}`}>
                      <BsInfoCircle className="icono  text-green-500" />
                    </Link>
                    <Link to={`/books/editar/${book._id}`}>
                      <AiOutlineEdit className=" icono  text-yellow-500" />
                    </Link>
                    <Link to={`/books/eliminar/${book._id}`}>
                      <MdOutlineAddBox className=" icono  text-red-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default BooksTable