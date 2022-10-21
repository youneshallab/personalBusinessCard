import React from 'react';

export default function Identification() {
    return (
        <div className="ident">
            <img  src="../images/yshb-pic.jpg" className="picture"/>
            <h3>Younes Hallab</h3>
            <h5>Frontend Developer</h5>
            <p>
                <small>linktomywebsite.com</small>
            </p>
            <button className="but">
                <i className="fa-solid fa-envelope"></i>
                <strong>Email</strong>
            </button>
        </div>
    )
}