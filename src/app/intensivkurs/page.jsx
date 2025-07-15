'use client';
import { useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/intensivePage.css';
import '../styles/section3.css';
import Section3Card from './Section3Card';
import { useReadIntensiveQuery } from '../../../features/schoolsApi';

const IntensivePage = () => {
    const { data: intensiveCards, isLoading: isCardsLoading } = useReadIntensiveQuery();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            <Header />
            <div className="intensivePageWrapper navPage">
                <div className="flexColumn">
                    <h1>PAKET</h1>
                    <hr />
                    <h2>Delbetala ditt paket med <img src="/images/klarna.png" alt="Klarna" /></h2>
                    <b>Man måste betala i förskott, minst halv summan en vecka innan. Om man vill avboka eller sluta med kursen måste man meddela oss en vecka innan annars debiteras man halv summan.</b>
                    <hr />
                    <b>För att börja en intensivkurs krävs det att man klarar av olika utbildningsnivåer enligt trafikskolans undervisningsplan, som är godkänd av Transportstyrelse. Därför måste man först göra en testlektion (körtest) med en av våra trafiklärare.</b>
                    <p>Våra elever som går på intensivkurser skall vara väl förbereda inför körprovet och för att klara av att alla möjliga situationer i framtiden. Det är vårt mål!</p>
                    <hr />
                    <button onClick={() => {
                        window.open('https://korkortsjakten.se/trafikskolor/eskilstuna/eskilstuna-trafikskola-1475', '_blank', 'noopener,noreferrer');
                    }} style={{ fontSize: '1.3rem' }}>BOKA HÄR</button>
                    <hr />
                    {intensiveCards?.length > 0 &&
                    <div className="intensivePageEducationWrapper flexColumn">
                        {isCardsLoading && <p>Laddning...</p>}
                        {intensiveCards?.map(education =>
                            <Section3Card key={education._id} education={education} />
                        )}
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IntensivePage;