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
                <p>ReactJs is a popular modern javascript ui freamwork. React Basically works, the code reduction of react js is as snippet and component. The JSX option manipulate the DOM helps to increase the mobility of the website. It Basically reactJs work. One more thing, React does not re-render or re-paint the whole DOM. only change what has been changed. </p>
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
                    <p>Keep shooting at these spots until the eyes open, then hit quickly both eyes with your laser beam.</p>
                </details>
            </div>
        </div>
    );
};

export default Footer;