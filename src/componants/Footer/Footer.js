import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='questions'>
            <h2>Question and Answer</h2>
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
                    <p>Difference between props and state. The props are usually like a variable. The props can only be read. props can not be modified. On the other hand, the state is modified or  changed asynchronously. The user Can be changed state if He wants, or not. These are the differences between them.</p>
                </details>
            </div>
            <div className='questions'>
                <details>
                    <summary>
                        How use state work?
                    </summary>
                    <p>.</p>
                </details>
            </div>
        </div>
    );
};

export default Footer;