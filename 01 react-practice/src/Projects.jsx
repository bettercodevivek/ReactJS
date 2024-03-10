import './Projects.css';

function Projects(){
    return (
     <div id='Projects' className='projects-mainpage'>
        <h1 className='Project-page-title'>PROJECTS</h1>
        <div id="line3"></div>
        <div className='project-container-1'>
            <div className='project-description-container'>
                <h1 className='project-title'>Project-1</h1>
                <p id='description-1' className='project-description'>
                Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
                Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
                 React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                  up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                   and global weather insights. WeatherWise prioritizes user experience,
                    offering personalized themes for a visually appealing touch. Don't just check the weather;
                     experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                      more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
                </p>
              <a href='#'><button className='project-github-button'>repository</button></a>
              <a href='#'><button className='project-website-button'>live Project</button></a>  
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src='src\assets\project-1-demo-image.jpg'>
                </img>
            </div>
        </div>

        <div className='project-container-2'>
            <div className='project-description-container'>
                <h1 className='project-title'>Project-2</h1>
                <p id='description-2' className='project-description'>
                Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
                Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
                 React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                  up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                   and global weather insights. WeatherWise prioritizes user experience,
                    offering personalized themes for a visually appealing touch. Don't just check the weather;
                     experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                      more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
                </p>
                <a href='#'><button className='project-github-button'>repository</button></a>
              <a href='#'><button className='project-website-button'>live Project</button></a> 
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src='src\assets\project-2-demo-image.jpg'></img>
            </div>
        </div>

        <div className='project-container-3'>
            <div className='project-description-container'>
                <h1 className='project-title'>Project-3</h1>
                <p id='description-3' className='project-description'>
                Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
                Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
                 React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                  up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                   and global weather insights. WeatherWise prioritizes user experience,
                    offering personalized themes for a visually appealing touch. Don't just check the weather;
                     experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                      more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
                </p>
                <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src='src/assets/github-142-svgrepo-com.svg'></img>
                </button></a>
              <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src='src/assets/'
                </button></a> 
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src='src\assets\project-3-demo-image.jpg'></img>
            </div>
        </div>
       <script>
              
       </script>
     </div>
    );
}

export default Projects;