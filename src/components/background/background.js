import  './background.css'


const Background = ({}) => {
    return (
        <h1 className='background'>
            <video src={'/video/rain.mp4'} autoPlay loop muted playsInline/>
        </h1>
    )
}


export default Background;