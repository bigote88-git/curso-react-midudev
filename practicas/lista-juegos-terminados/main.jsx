import { createRoot } from 'react-dom/client'
import { GameCard } from './src/components/GameCard'
import { finishedGames } from './src/logic/data';
import './style.css'


const root = createRoot(document.getElementById('app'));

root.render(
    <main>
        <header>
            <h1>Games list finished</h1>
        </header>
        <section>
            {
                finishedGames.map(({ titleGame, frontImageUrl, companyImageUrl }) => {
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
);