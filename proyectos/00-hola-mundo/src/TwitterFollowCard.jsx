import { useState } from 'react';
import './App.css';

export function TwitterFollowCard ({ children, formatUserName, userName, name, avatar, initialIsFollowing }) {

    const [ isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => setIsFollowing(!isFollowing);

    const textButton =  isFollowing? 'Siguiendo': 'Seguir';
    const buttonClassName = isFollowing?
    'tw-followCard-button is-following': 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${avatar}`} alt={name} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span>{textButton}</span>
                </button>
            </aside>
        </article>
    )
};