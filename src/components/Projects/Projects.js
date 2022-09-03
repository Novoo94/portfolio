import Calculator from './Calculator Small.jpeg'
import Game from './Flappybird Small.jpeg'
import FutureProjects from './coming soon Small.jpeg'
import './Projects.css'

function Projects() {
    return <div>
        <h1>Some of my work! </h1>
        <div className='Calc'>
            <img src={Calculator}/>

            <h2>Calculator</h2>
            <p>Use of HTML, JS, and CSS. Based on the knowledge that we had learned
                we were given the challenge in creating a calculator from scracth.
                the calculator should be able to multiply, divide, add and subtract.   </p>
        </div>
        <div id='Game'>
            <img src={Game}/>
            <h2> Game </h2>
            <p>using Canvas and/or Javascript, we were giving the assignment to recreate or make our own game! </p>
        </div>
        <div id='FutureProjects'>
        <img src ={FutureProjects}/>
        <h1>Future Projects</h1>
        <p>And the journey continues...</p>


        </div>
    </div>

}
export default Projects 