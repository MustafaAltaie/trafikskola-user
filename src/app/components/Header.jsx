'use client';
import { useState, useEffect } from 'react';
import '../styles/header.css';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024) {
                setToggleBtn(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <div>
                <a href='/' className='logoWrapper'>
                    <img src="/images/logo1.png" alt="Katrineholm" />
                </a>
                <div className='navToggleButton' onClick={() => setToggleBtn(!toggleBtn)}>
                    <div style={{ transform: `translateY(${toggleBtn ? '400%' : '0'}) rotate(${ toggleBtn ? '45' : '0' }deg)` }}></div>
                    <div style={{ opacity: toggleBtn ? '0' : '1' }}></div>
                    <div style={{ transform: `translateY(${toggleBtn ? '-400%' : '0'}) rotate(${ toggleBtn ? '-45' : '0' }deg)` }}></div>
                </div>
            </div>
            <nav className={toggleBtn ? 'navOpened' : 'navClosed'}>
                <ul>
                    <li><a href="/" className={`${pathname === '/' ? 'active' : ''}`}>Hem</a></li>
                    <li><a href="priser" className={`${pathname.includes('priser') ? 'active' : ''}`}>Priser</a></li>
                    <li><a href="riskutbildning" className={`${pathname.includes('riskutbildning') ? 'active' : ''}`}>Riskutbildning</a></li>
                    <li><a href="handledarutbildning" className={`${pathname.includes('handledarutbildning') ? 'active' : ''}`}>Handledarutbildning</a></li>
                    <li><a href="intensivkurs" className={`${pathname.includes('intensivkurs') ? 'active' : ''}`}>Intensivkurs</a></li>
                    <li><a href="/omOss" className={`${pathname.includes('omOss') ? 'active' : ''}`}>Om Oss</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;