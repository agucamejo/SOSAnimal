import ButtonPrimary from '../../components/ButtonPrimary.jsx';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
  const canonicalUrl = `https://sos-animal.vercel.app/*`;
  const imgError = '/images/error404.png';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>No encontrado</title>
      </Helmet>
      <div className="error-container">
        <div className="container-img">
          <img src={imgError} alt="Error404" className="img" />
          <div className="img-text">
            <h4>
              Parece que esta página se ha escapado corriendo <br /> como un
              cachorro travieso.
            </h4>
            <h4>No podemos encontrar lo que buscas.</h4>
            <p>
              Tal vez el enlace esté roto, la página haya sido eliminada o{' '}
              <br /> simplemente hayas tecleado mal la dirección.
            </p>
          </div>
        </div>
        <Link to="/">
          <ButtonPrimary text="Volver al inicio" className="button-inicio" />
        </Link>
      </div>
    </div>
  );
};
export default Error;
