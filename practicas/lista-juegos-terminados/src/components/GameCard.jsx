import './GameCard.css'

const PREFIX_FRONTIMG_URL = '../public/assets/front-images';
const PREFIX_COMPANYIMG_URL = '../public/assets/icon-images';

export const GameCard = ({ frontImgUrl, titleGame, companyImgUrl }) => {
    return (
        <article className="card-container">           
            <img className='front-img' src={`${PREFIX_FRONTIMG_URL}/${frontImgUrl}`} alt="" />           
            <div className='card-info'>
                <span className='card-info-title'>{titleGame}</span>                
                <img className='card-info-icon' src={`${PREFIX_COMPANYIMG_URL}/${companyImgUrl}`} alt="" />
            </div>
        </article>
    )
}