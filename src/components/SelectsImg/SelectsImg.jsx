
import './SelectsImgStyles.css'


function SelectsImg({bgImg, text}) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='image' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg
