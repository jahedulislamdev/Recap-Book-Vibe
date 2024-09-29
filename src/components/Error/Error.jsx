import { useRouteError } from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   return (
      <div className="flex justify-center items-center h-dvh">
         {
            err.status === 404 ?
               <h1>404 Not found !  </h1> :
               <h1 className="text-red-500">Unexpected Application Error!</h1>
         }

      </div>
   );
};

export default Error;