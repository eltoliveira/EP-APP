import { useRouteError, Link } from "react-router-dom";

/* function name(params) {
  
} */

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Foo-deux!</h1>
      <p>Sua gambiarra não funcionou, abaixo o log:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <button  className="link-buttonAA">
        <Link to="/" >Voltar</Link>
      </button>
    </div>
  );
}
