import './navbar.css';

function Navbar(){
    return (
        <div className="navbar">
            <button className='name-logo'>Your Name</button>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact Me</a>
        </div>
    );
}

export default Navbar;