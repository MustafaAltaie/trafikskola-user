'use client';
import '../styles/section3.css';
import { useReadEducationsQuery } from '../../../features/schoolsApi';
import Section3Card from './Section3Card';

const Section3 = () => {
    const { data } = useReadEducationsQuery();

    return (
        <section className="section3">
            <h1>Våra Utbildningar</h1>
            <div>
                <div className="sec3CardWrapper">
                    {/* Card */}
                    {data?.map(education => (
                        <Section3Card key={education._id} education={education} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section3;