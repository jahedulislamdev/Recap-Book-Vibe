import { useLoaderData, useParams } from "react-router-dom";
import { saveWishlist, setReadBooks } from "../../utility";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const ViewDetails = () => {
   const loadBookData = useLoaderData();
   const { id } = useParams();
   let bookId = parseInt(id);
   const findBook = loadBookData.find(book => book.id === bookId);
   const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = findBook;
   const handleReadBooks = () => {
      setReadBooks(bookId);
   };
   const handleWishList = () => {
      saveWishlist(bookId);
   }
   return (
      <div className="md:flex bg-gray-100 p-5 rounded items-center text-lg mt-4">
         <div className="flex-1 flex justify-center mb-4">
            <img src={image} className="w-1/2 drop-shadow-2xl" />
         </div>
         <div className="flex-1">
            <p className="font-bold text-3xl ">{bookName}</p>
            <p className="font-light text-xl my-3">By : {author}</p>
            <hr />
            <p className="my-2 opacity-60">{category}</p>
            <hr />
            <p className="my-3 text-gray-500"><span className="font-semibold text-black me-2">Review :</span>{review}</p>
            <div className='flex-row md:flex justify-start my-3'>
               <span className="text-black me-2 font-semibold">Tag :</span>{
                  tags.map((tag, idx) => <p key={idx} className='text-lime-500 me-2 py-1 px-2 rounded text-sm'> #{tag}</p>)
               }
            </div>
            <hr />
            <div className="mt-1 grid grid-cols-2 font-semibold"><span className=" text-gray-500">Total Pages :</span> <p>{totalPages}</p></div>
            <div className="mt-1 grid grid-cols-2 font-semibold"><span className=" text-gray-500">Publisher : </span> <p>{publisher}</p></div>
            <div className="mt-1 grid grid-cols-2 font-semibold"><span className=" text-gray-500">Year Of Publishing :</span> <p>{yearOfPublishing}</p></div>
            <div className="mt-1 grid grid-cols-2 font-semibold"><span className=" text-gray-500">Reating :</span><p>{rating}</p></div>
            <div className="mt-4">
               <button onClick={handleReadBooks} className="bg-lime-200 hover:bg-gray-300 me-5 text-black transition-colors p-2 px-3 rounded">Read</button>
               <button onClick={handleWishList} className="bg-purple-500 hover:bg-gray-300 hover:text-black transition-colors p-2 px-3 text-white rounded">WishList</button>
            </div>
         </div>
         <Toaster
            position="top-right"
            reverseOrder={false}
         >
         </Toaster>
         <Helmet>
            <title>Book Vibe | View Book Details </title>
         </Helmet>
      </div>
   );
};

export default ViewDetails;