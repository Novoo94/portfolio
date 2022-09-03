import Profile from './black profile.jpeg'

function Home() {
    return <div className='homepage'>
        <div className='image'> 
            <img src={Profile} alt= "BlankProfile"/>
        </div>

        <h1 className="header"> Hi, My Name is Odalis Novoa Reyes</h1>
        <div className="Info">
            <p id="info">On top of attaining a degree in Performing Arts,
                I am also expanding my studies to Software Development</p>

        </div>
    </div>
}

export default Home  