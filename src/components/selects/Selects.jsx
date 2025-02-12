
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Malindi' />
                <SelectsImg bgImg={BoraBora2} text='Diani' />
                <SelectsImg bgImg={Maldives} text='Port Victoria' />
                <SelectsImg bgImg={Maldives2} text='Nyali Beach' />
                <SelectsImg bgImg={Maldives3} text='Pirates' />
                <SelectsImg bgImg={KeyWest} text='Kilifi' />
            </div>

        </div>
    )
}

export default Selects
