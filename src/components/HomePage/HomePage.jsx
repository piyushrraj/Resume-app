import './HomePage.css';
import githubIcon from '../../assets/github.png';

function HomePage(){
    return(
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span>my name is
                </p>
                <p className='homepage_left_h2'>
                    Piyush Raj
                </p>
                <p className='homepage_left_h3'>
                    Student at <span className='red_color'>HIT</span>
                </p>
                <p className='homepage_left_discription'>
                    i am a student
                    
                </p>
                <div>
                    <a href='https://github.com/piyushrraj'target='_blank'>
                        <img
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                </div>
                <a href='mailto:piyushhrraj@gmail.com'>
                    <button className='homepage_left_button'>Get in touch</button>
                </a>

            </div>
            <div className='homepage_right'>
                <img src='https://raw.githubusercontent.com/gist/vininjr/d29bb07bdadb41e4b0923bc8fa748b1a/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif' alt='GIF'/>

            </div>
        </div>
          
    )
}
export default HomePage;