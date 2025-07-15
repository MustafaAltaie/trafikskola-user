'use client';
import React, { useEffect, useState } from 'react';
import '../styles/section4.css';
import { useSendMessageMutation, useReadSec4SocialLinksQuery } from '../../../features/schoolsApi';
import { motion } from 'framer-motion';

const Section4 = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [sendMessage] = useSendMessageMutation();
    const { data: mediaLinks, isLoading } = useReadSec4SocialLinksQuery();
    const [links, setLinks] = useState({
        link1: '',
        link2: '',
        link3: '',
        link4: '',
    });

    useEffect(() => {
        if(name.trim() && (mobile.trim() || email.trim())) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, [name, mobile, email]);

    useEffect(() => {
        if(mediaLinks) {
            setLinks({
                link1: mediaLinks?.link1 || '',
                link2: mediaLinks?.link2 || '',
                link3: mediaLinks?.link3 || '',
                link4: mediaLinks?.link4 || '',
            });
        }
    }, [mediaLinks]);

    const handleMessage = async () => {
        const isValidEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
        if (!isValidEmail(email) && !mobile) {
            alert('Please enter a valid email address or mobile number');
            return;
        }

        const newMessage = {
            name,
            mobile: mobile.trim() ? Number(mobile) : null,
            email,
            message,
        }

        try {
            await sendMessage(newMessage).unwrap();
            clearFields();
            alert('Tack för att du kontaktade oss, vi hör av oss så snart som möjligt.');
        } catch (err) {
            console.error(err);
            alert('Kunde inte skicka meddelandet');
        }
    }

    const clearFields = () => {
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        setIsFilled(false);
    }

    const icons = [
        { key: 'link1', perfix: 'https://www.facebook.com/', icon: 'fa-brands fa-facebook' },
        { key: 'link2', perfix: 'https://m.me/', icon: 'fa-brands fa-facebook-messenger' },
        { key: 'link3', perfix: 'https://www.instagram.com/', icon: 'fa-brands fa-instagram' },
        { key: 'link4', perfix: 'tel:', icon: 'fa-solid fa-mobile-screen-button' },
    ];

    return (
        <section className='section4'>
            <h1>Kontakta oss</h1>
            <div className="sec4MainWrapper">
                <div className='sec4Contact flexColumn'>
                    <p><i className="fa-solid fa-phone"></i>0737025139</p>
                    <p><i className="fa-solid fa-envelope"></i>kholmtrafikskolan@gmail.com</p>
                </div>
                <h1>Låt oss kontakta dig. Lämna oss ett meddelande så att vi kontaktar dig så snabb som möjligt.</h1>
                <motion.div
                    className="sec4Form flexColumn"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div>
                        <p>Ditt Namn</p>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Mobilnummer</p>
                        <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Email</p>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Meddelande</p>
                        <textarea  value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button onClick={handleMessage} disabled={!isFilled}>Skicka</button>
                </motion.div>
                <div className='sec4SocialMediaWrapper'>
                    <h1>Du kan också kontakta oss på sociala medier.</h1>
                    <div className='ec4SocialMedia'>
                        {isLoading && <p>Loading...</p>}
                        {icons.map(icon => (
                            <motion.div
                                key={icon.key}
                                style={{ pointerEvents: links[icon.key] ? 'all' : 'none' }}
                                initial={{ opacity: 0, scale: 2, y: -100, x: -100 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <a href={links[icon.key] ? icon.perfix + links[icons[0].key] : '#'} target='_blank' rel='noopener noreferrer'>
                                    <i className={icon.icon}></i>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4;