import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  //TODO: buscar como controlar mejor el type de "error" ya que typescript infiere unknown y lo type como any

  type Error = any;

  const error: Error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
