import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
   const BookData = useLoaderData();
   // console.log(BookData.length)
   return (
      <div className="p-5 rounded ">
         <h1 className="text-3xl font-semibold text-center">Books</h1>
         <p className="font-light  mb-5 text-center">"Reading books opens the door to new worlds, ideas, and experiences, enriching the mind and soul."</p>
         <div className="grid md:grid-cols-3 gap-4">
            {
               BookData.map((B, idx) => <Book key={idx} Bookdata={B}></Book>)
            }
         </div>
      </div>
   );
};

export default Books;