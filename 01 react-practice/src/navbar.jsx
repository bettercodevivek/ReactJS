import './navbar.css';

function Navbar(){
    return (
        <div className="navbar">
            <button className='name-logo'>Your Name</button>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
            <a href="#Footer">Contact Me</a>
        </div>
    );
}

export default Navbar;