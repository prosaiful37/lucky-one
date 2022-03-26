import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='questions'>
            <details>
                <summary>
                    How react work?
                </summary>
                <p> Just aim to the red spots near his eyes</p>
                <p>Keep shooting at these spots until the eyes open, then hit quickly both eyes with your laser beam.</p>
            </details>
        </div>
            <div className='questions'>
                <details>
                    <summary>
                        Props vs state deferance?
                    </summary>
                    <p> Just aim to the red spots near his eyes</p>
                    <p>Keep shooting at these spots until the eyes open, then hit quickly both eyes with your laser beam.</p>
                </details>
            </div>
            <div className='questions'>
                <details>
                    <summary>
                        How use state work?
                    </summary>
                    <p> Just aim to the red spots near his eyes</p>
                    <p>Keep shooting at these spots until the eyes open, then hit quickly both eyes with your laser beam.</p>
                </details>
            </div>
        </div>
    );
};

export default Footer;