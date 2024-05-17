import { GameCard } from './GameCard';
import { IconSvg } from './IconSvg';
import { finishedGames } from '../logic/data';
import { useState } from 'react';
import { useEffect } from 'react';
import { distintDataFromObject } from '../logic/util';

const FIELD_NAME_FINISHERYEAR = "finishedYear"

export const App = () => {

    let titleHtml;
    const backgroundColorOnScroll = 'rgb(0, 67, 156)';
    const backgroundColor = 'rgba(0, 20, 82, 0.5)';

    const years = distintDataFromObject(finishedGames, FIELD_NAME_FINISHERYEAR);
    const [ filterYear, setFilterYear ] = useState(years[0]);
    const [ countElements, setCountElements ] = useState(0);

    const handleClick = (button) => {
        const selectedYear = button.getAttribute('data-actionyear');
        setFilterYear(selectedYear);        
    }

    useEffect(() => {
        setCountElements(finishedGames.filter(x => x.finishedYear == filterYear).length);        

    }, [filterYear]);

    // AGREGANDO CODIGO JS ARBITRARIO
    useEffect(()=>{

        if(!titleHtml)
            titleHtml = document.querySelector('h1');
        
        const onScroll = () => {
            if (window.scrollY > 0) {
                titleHtml.style.backgroundColor = backgroundColorOnScroll

            } else {
                titleHtml.style.backgroundColor = backgroundColor
            }                
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <main>
        <header>
            <h1>Gaming Backlog 
                <IconSvg width='40px' height='40px'/>
            </h1>
            <span className='count-games'><strong>{countElements}</strong></span>
            <div className='filter-year'>
                {
                    years.map(year => {
                        return (
                            <button 
                                key={year} 
                                data-actionyear={year} 
                                onClick={({ target }) => handleClick(target)}>{year}</button>
                        )
                    })
                }
            </div>
        </header>
        <section>
            {
                finishedGames.filter(x => x.finishedYear == filterYear).map(({ titleGame, frontImageUrl, companyImageUrl }) => {
                    return (
                        <GameCard
                            key={titleGame}
                            titleGame={titleGame}
                            frontImgUrl={frontImageUrl}
                            companyImgUrl={companyImageUrl} />
                    )
                }
                )
            }
        </section>
    </main>
    )
}