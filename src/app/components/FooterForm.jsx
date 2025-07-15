'use client';
import { useSendMessageMutation } from '../../../features/schoolsApi';
import { useState } from 'react';

const FooterForm = () => {
    const [sendMessage] = useSendMessageMutation();
    const [errors, setErrors] = useState({});
    const [newMessage, setNewMessage] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });

    const validateInputs = () => {
        const newErrors = {};
        
        // Name validation (2-30 characters)
        if (!newMessage.name.trim()) {
            newErrors.name = 'Namn krävs';
        } else if (newMessage.name.length < 2) {
            newErrors.name = 'Namn måste vara minst 2 tecken';
        } else if (newMessage.name.length > 30) {
            newErrors.name = 'Namn får inte vara längre än 30 tecken';
        }

        // Mobile validation (Swedish format)
        const mobileRegex = /^(\+46|0)[-\s]?7[02369][-\s]?\d{4}[-\s]?\d{3}$/;
        if (!newMessage.mobile.trim()) {
            newErrors.mobile = 'Telefonnummer krävs';
        } else if (!mobileRegex.test(newMessage.mobile.replace(/\s/g, ''))) {
            newErrors.mobile = 'Ange ett giltigt svenskt telefonnummer';
        }

        // Email validation (optional but must be valid if provided)
        if (newMessage.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newMessage.email)) {
            newErrors.email = 'Ogiltig e-postadress';
        }

        // Message validation
        if (!newMessage.message.trim()) {
            newErrors.message = 'Meddelande krävs';
        } else if (newMessage.message.length < 10) {
            newErrors.message = 'Meddelandet är för kort';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePrepareMessage = (e) => {
        const { name, value } = e.target;
        // Special handling for mobile number
        const processedValue = name === 'mobile' 
            ? value.replace(/[^\d+]/g, '') 
            : value;
        
        setNewMessage(prev => ({
            ...prev, 
            [name]: processedValue
        }));
    };

    const handleSendMessage = async () => {
        if (!validateInputs()) return;

        try {
            await sendMessage(newMessage).unwrap();
            clearFields();
            alert('Tack för ditt meddelande! Vi återkommer så snart vi kan.');
        } catch (error) {
            alert('Något gick fel. Försök igen senare.');
            console.error('Failed to send message:', error);
        }
    };

    const clearFields = () => {
        setNewMessage({
            name: '',
            mobile: '',
            email: '',
            message: '',
        });
        setErrors({});
    };

    return (
        <div className='footerContact flexColumn'>
            <p>Kontakta oss eller Boka Direkt Här:</p>
            <div className='flexColumn'>
                <div>
                    <input 
                        type="text" 
                        className={`styledInput1 ${errors.name ? 'error' : ''}`}
                        placeholder='Ditt namn' 
                        name='name' 
                        value={newMessage.name} 
                        onChange={handlePrepareMessage} 
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    
                    <input 
                        type="tel" 
                        className={`styledInput1 ${errors.mobile ? 'error' : ''}`}
                        placeholder='Ditt nummer' 
                        name='mobile' 
                        value={newMessage.mobile} 
                        onChange={handlePrepareMessage}
                    />
                    {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                </div>
                
                <textarea 
                    className={`styledInput1 ${errors.message ? 'error' : ''}`}
                    placeholder='Meddelande' 
                    name='message' 
                    value={newMessage.message} 
                    onChange={handlePrepareMessage}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
                
                <button className='styledInput1' onClick={handleSendMessage}>
                    Skicka
                </button>
            </div>
        </div>
    );
};

export default FooterForm;