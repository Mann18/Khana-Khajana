import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Oops!!</h1>
        <h2 className="text-xl md:text-2xl">Something went wrong!!</h2>
        <h2 className="text-lg fon-semibold md:text-xl text-red-600">
          {err.status + " : " + err.statusText}
        </h2>
      </div>
    </div>
  );
};
export default Error;
