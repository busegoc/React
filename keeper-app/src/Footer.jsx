import React from "react";


function Footer(){
    const date = new Date();
    return(
    <footer className="footer">
    <p className="footer p">
        copyright in {date.getFullYear()}
    </p>
    </footer>
    );
};

export default Footer;