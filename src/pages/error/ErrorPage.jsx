import { Helmet } from 'react-helmet';

const Error = () => {
    const canonicalUrl = `https://sos-animal.vercel.app/*`;

    return (
       <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <title>No encontrado</title>
            </Helmet>
           <h2>Error</h2>
       </div>
    );
   }
   
export default Error;