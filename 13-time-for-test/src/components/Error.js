import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //   const { status, statusText } = err;  - destructuring
  return (
    <div>
      <h1>OOpssss ...!</h1>
      <h2>Something went wrong</h2>
      <h2>{err.status + " : " + err.statusText}</h2>

      {/* Destructuting */}
      {/* <h2>{status + " : " + statusText}</h2> */}
    </div>
  );
};
export default Error;
