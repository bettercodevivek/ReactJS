import './navbar.css';

function Navbar(name){
    return (
        <div className="navbar">
            <button className='name-logo'>{name}</button>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
            <a href="#Footer">Contact Me</a>
        </div>
    );
}

export default Navbar;