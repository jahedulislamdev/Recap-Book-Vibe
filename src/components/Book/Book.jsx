import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
const Book = ({ Bookdata }) => {
   const { id, bookName, author, image, rating, category, tags } = Bookdata;
   return (
      <Link to={`/books/${id}`}>
         <div className='border rounded px-7 py-2 h-[380px] truncate box'>
            <div className='flex justify-center items-center'><img src={image} alt="img" className="h-[200px] w-[150px] object-cover rounded-xl py-3 drop-shadow-2xl" /></div>
            <div className="flex">{tags.map((tag, idx) => <p key={idx} className="bg-gray-50 tex me-2 mt-2 font-sm text-green-400 p-1 rounded">#{tag}</p>)}</div>
            <p className="text-lg font-semibold">{bookName}</p>
            <p className=" border-b pb-3 border-dashed">By : {author}</p>
            <div className="flex items-center justify-between">
               <p className="mt-3">{category}</p>
               <div className="flex items-center">{rating}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ms-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </div>
            </div>
         </div>
      </Link>
   );
};
Book.proptypes = {
   Bookdata: PropTypes.object
}
export default Book;