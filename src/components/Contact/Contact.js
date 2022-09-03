import Github from './Github Small.jpeg'
import Linkedin from './linkedin Small.jpeg'


function Contact() {
    return <div>
        <h1> Get In Touch!</h1>

        <div className="links">
            <div className='image'>
                <img src={Github} />
            </div>
            <a href="https://github.com/Novoo94" target={'_blank'} rel="noopener noreferrer">Github</a>
        </div>

        <div>
            <div className='image'>
                <img src={Linkedin} />
            </div>

            <a className="linkedin" href="https://www.linkedin.com/in/odalis-novoa-reyes/" target={'_blank'} rel="noopener noreferrer">Linkedin</a>
            {/* instead of the labels add in the icons  */}
        </div>
    </div>

}

export default Contact