import { Helmet } from "react-helmet";
import Banner from "../banner/Banner";
const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Helmet>
            <title>Book Vibe | Home</title>
         </Helmet>
      </div>
   );
};

export default Home;