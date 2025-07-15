import '../styles/section1.css';
// import { useReadHomeImageQuery } from '../features/schoolsApi';

const Section1 = () => {
    return (
        <section className="section1">
            <div className='Sec1ImageWrapper'>
            <img src='/images/mohanad.jpg' alt='Mohanad' />
            </div>
            <div className="sec1DetailsWrapper">
                <h1>Välkommen till katrineholm-Eskilstuna trafikskolan i katrineholm</h1>
                <p>Skaffa ditt körkort snabbt och smidigt hos oss. Erfaren lärare, flexibla tider och personligt stöd hela vägen.</p>
            </div>
        </section>
    )
}

export default Section1;