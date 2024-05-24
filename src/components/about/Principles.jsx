import Subtitles from '../Subtitles'

const Principles = () => {
    return ( 
       <div className='principles-container'>
           <Subtitles text="Nuestros principios"/>
           <div className='cards-container'>
                <div className='cards'>
                    <h4 className='bg-green'>Misión</h4>
                    <div className='bg-green img-text-container'>
                        <img src="./perro-principles.png" alt="Imagen de un perro" />
                        <div className='text-container'><p>Rescatar y proteger animales en situación de riesgo, promoviendo su bienestar y conciencia sobre su cuidado.</p></div>
                    </div>
                </div>
                <div className='cards'>
                    <h4 className='bg-orange'>Visión</h4>
                    <div className='bg-orange img-text-container'>
                        <img src="./gato-principles.png" alt="Imagen de una gata" />
                        <div className='text-container'><p>Ser líderes en el rescate animal, construyendo un mundo donde cada ser vivo sea valorado, respetado y protegido.</p></div>
                    </div>
                </div>
                <div className='cards'>
                    <h4 className='bg-pink'>Valores</h4>
                    <div className='bg-pink img-text-container'>
                        <img src="./cachorrito-principles.png" alt="Imagen de un perro cachorro" />
                        <div className='text-container'>
                            <p>- Compasión - Compromiso</p>
                            <p>- Empatía - Respeto</p>
                            <p>- Solidaridad</p>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    );
}
   
export default Principles;