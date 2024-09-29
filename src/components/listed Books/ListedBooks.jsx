import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBooks, getWishlist } from '../../utility';
import { Helmet } from 'react-helmet';

const ListedBooks = () => {
   const savedData = useLoaderData();
   const [readBooks, setReadBooks] = useState([]);
   const [wishlist, setWishlist] = useState([]);
   const [displaySortReadBooks, setDisplaySortReadBooks] = useState([]);
   const [displaySortWishlist, setDisplaySortWishlist] = useState([]);

   const handleSorting = (filterTxt) => {
      if (filterTxt === "Rating") {
         // Sorting read books by rating
         const sortedReadBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
         setDisplaySortReadBooks(sortedReadBooks);

         // Sorting wishlist by rating
         const sortedWishlist = [...wishlist].sort((a, b) => b.rating - a.rating);
         setDisplaySortWishlist(sortedWishlist);
      } else if (filterTxt === "publish") {
         // Sorting read books by publishing year
         const sortedReadBooks = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
         setDisplaySortReadBooks(sortedReadBooks);

         // Sorting wishlist by publishing year
         const sortedWishlist = [...wishlist].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
         setDisplaySortWishlist(sortedWishlist);
      } else if (filterTxt === "page") {
         // Sorting read books by total pages
         const sortedReadBooks = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
         setDisplaySortReadBooks(sortedReadBooks);

         // Sorting wishlist by total pages
         const sortedWishlist = [...wishlist].sort((a, b) => b.totalPages - a.totalPages);
         setDisplaySortWishlist(sortedWishlist);
      }
   };

   useEffect(() => {
      if (savedData) {
         // Load read books
         const getReadBooksData = getReadBooks();
         const findReadBooks = savedData.filter(book => getReadBooksData.includes(book.id));
         setReadBooks(findReadBooks);
         setDisplaySortReadBooks(findReadBooks);

         // Load wishlist books
         const getWishlistData = getWishlist();
         const findWishlistBooks = savedData.filter(book => getWishlistData.includes(book.id));
         setWishlist(findWishlistBooks);
         setDisplaySortWishlist(findWishlistBooks);
      }
   }, [savedData]);

   return (
      <div className="mt-4 grid grid-cols-7 gap-x-5 p-1 sm:p-0">
         <Tabs className="col-span-6">
            <TabList className="border-b-0 bg-blue-100">
               <Tab>Read Books</Tab>
               <Tab>Wishlist</Tab>
            </TabList>
            <TabPanel>
               {displaySortReadBooks.map((RB, idx) => (
                  <div key={idx}>
                     <div className="md:grid grid-cols-3 mb-8 gap-5 mt-8">
                        <div className="flex justify-center rounded-lg items-center col-span-1 bg-purple-50">
                           <img src={RB.image} className="w-1/3 h-[200px] md:h-[150px] p-3" />
                        </div>
                        <div className="col-span-2 bg-gray-100 p-3 rounded">
                           <p className="font-semibold text-2xl">{RB.bookName}</p>
                           <p><span>By:</span> {RB.author}</p>
                           <div className="md:flex mt-3">
                              <p>
                                 <span className="font-semibold me-3">Tag: </span>
                                 {RB.tags.map((tag, idx) => (
                                    <span key={idx} className="me-6 text-lime-600"> #{tag}</span>
                                 ))}
                              </p>
                              <div className="flex mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                 </svg>
                                 <p>Year of Publishing: {RB.yearOfPublishing}</p>
                              </div>
                           </div>
                           <div className="flex text-gray-500 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                              </svg>
                              <p>Publisher: {RB.publisher}</p>
                           </div>
                           <div className="flex mt-2 text-xs md:text-sm">
                              <p className="me-2 md:me-12 text-purple-600 bg-purple-200 py-1 px-2 rounded">Category: {RB.category}</p>
                              <p className="me-2 md:me-12 text-yellow-500 bg-yellow-100 py-1 px-2 rounded">Rating: {RB.rating}</p>
                              <Link to={`/books/${RB.id}`}>
                                 <button className="bg-lime-200 px-2 py-1 rounded">View Details</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </TabPanel>
            <TabPanel>
               {displaySortWishlist.map((WB, idx) => (
                  <div key={idx}>
                     <div className="md:grid grid-cols-3 mb-8 gap-5 mt-8">
                        <div className="flex justify-center rounded-lg items-center col-span-1 bg-purple-50">
                           <img src={WB.image} className="w-1/3 h-[200px] md:h-[150px] p-3" />
                        </div>
                        <div className="col-span-2 bg-gray-100 p-3 rounded">
                           <p className="font-semibold text-2xl">{WB.bookName}</p>
                           <p><span>By:</span> {WB.author}</p>
                           <div className="md:flex mt-3">
                              <p>
                                 <span className="font-semibold me-3">Tag: </span>
                                 {WB.tags.map((tag, idx) => (
                                    <span key={idx} className="me-6 text-lime-600"> #{tag}</span>
                                 ))}
                              </p>
                              <div className="flex mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                 </svg>
                                 <p>Year of Publishing: {WB.yearOfPublishing}</p>
                              </div>
                           </div>
                           <div className="flex text-gray-500 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                              </svg>
                              <p>Publisher: {WB.publisher}</p>
                           </div>
                           <div className="flex mt-2 text-xs md:text-sm">
                              <p className="me-2 md:me-12 text-purple-600 bg-purple-200 py-1 px-2 rounded">Category: {WB.category}</p>
                              <p className="me-2 md:me-12 text-black bg-blue-100 py-1 px-2 rounded">Rating: {WB.rating}</p>
                              <Link to={`/books/${WB.id}`}>
                                 <button className="bg-lime-200 px-2 py-1 rounded">View Details</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </TabPanel>
         </Tabs>

         <div className="col-span-1 text-white">
            <select className="p-2 bg-blue-100 text-black rounded cursor-pointer shadow outline-0 md:w-3/4 w-11/12" onChange={(e) => handleSorting(e.target.value)}>
               <option selected>Sort By </option>
               <option className='' value="Rating">Rating</option>
               <option className='' value="publish">Publishing year</option>
               <option className='' value="page">Number of pages</option>
            </select>
         </div>
         <Helmet>
            <title>Book Vibe | ListedBooks</title>
         </Helmet>
      </div>
   );
};

export default ListedBooks;
