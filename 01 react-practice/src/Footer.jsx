import './Footer.css';

function Footer(){
    return(
       <div id='Footer' className='Footer-mainpage'>
        <div className='Footer-container'>
        <h1 className='footer-title'>Get In Touch</h1>
        <p className='footer-paragraph-1'>
        Thank you for exploring my portfolio.<br></br> I'd love to connect with you!<br></br> Feel free to reach out for collaborations, 
        opportunities, or just to say hello.<br></br>
        </p>
       <a href='mailto:someone@example.com'> <button className='Say-hello-button'>Say Hello</button></a>
        <div className='social-handle-container'>
            <a href='#' className='github-link' id='github-link'>
                <img className='github-logo' src='src\assets\github-142-svgrepo-com.svg'></img>
            </a>
            <a href='#' className='linkedin-link' id='linkedin-link'>
                <img className='linkedin-logo' src='src\assets\linkedin-svgrepo-com.svg'></img>
            </a>
            <a href='#' className='instagram-link' id='instagram-link'>
                <img className='instagram-logo' src='src\assets\instagram-svgrepo-com.svg'></img>
            </a>
        </div>
        </div>
       </div>
    );
}

export default Footer;