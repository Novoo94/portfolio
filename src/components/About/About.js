import photo from './Selfie Small.jpeg'
import Art from './Art Small.jpeg'

import './About.css'

function About() {
    return <div>
        <h1 id='header'>
        About Me!
        </h1>
        <div id='Photo'>
            {/* add Photo of myself/Toby */}
            <img src = {photo}/>
            <img src =  {Art}/>


        </div>
        <p id='bio'>I am always eager to learn new things, even if it means staring
            from the bottom. I am the first female in my Mexican family
            that has graduated from highschool! My dog and family is the reason why i want to
            keep on learning, and being prepared! Apart from studying I like to keep myself active,
            either I am walking my dog, passing the volleyball, doing arts and crafts, making tiktoks,
            or spending time with my friends and family 
        </p>
        
        {/* some of my arts and crafts ??? */}
        
    </div>
}

export default About

