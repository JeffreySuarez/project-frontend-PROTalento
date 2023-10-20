# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



     {books.map((item) => {
      
        <div key={item._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {item.author}
         
          </h2>
          <h4 className="my-2 text-gray-500">{item._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2x1" />
            <h2 className="my-1">{item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2x1" />
            <h2 className="my-1">{item.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <Link to={`/books/detalle/${item._id}`}>
              <BsInfoCircle className="text-2x1 text-green-800 hover:text-black" />
            </Link>

            <Link to={`/books/editar/${item._id}`}>
              <AiOutlineEdit className="text-2x1 text-yellow-600 hover:text-black" />
            </Link>

            <Link to={`/books/eliminar/${item._id}`}>
              <MdOutlineDelete className="text-2x1 text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>;
      })} 