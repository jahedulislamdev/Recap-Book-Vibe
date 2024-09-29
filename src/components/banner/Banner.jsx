import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/pngwing 1.png"
const Banner = () => {
   return (
      <div className="hero bg-purple-50 rounded relative mt-4">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img
               src="https://i.postimg.cc/T1GggTKh/pngwing-1.png"
               className="max-w-sm rounded-lg drop-shadow md:w-full w-3/4" />
            <div>
               <h1 className="md:text-5xl text-3xl font-semibold text-black">Books To Freshen Up <br className="md:block hidden" /> Your Bookshelf</h1>
               <p className="mt-3 text-black opacity-70">Dive into a world of literary wonders! At Book Review, we bring you the latest and greatest in book reviews, spanning all genres and styles. Whether a fan of thrilling mysteries, heartwarming romances, or insightful non-fiction, our reviews will guide you to your next great read. Join our community of book lovers. Happy reading!</p>
               <NavLink to={'/listedBooks'}><button className="bg-purple-500 p-3 rounded text-white mt-8">View the List</button></NavLink>
            </div>
         </div>
      </div>
   );
};

export default Banner;