import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import React from 'react'

export function App () {

    const formatUserName = (name) => `@${name}`;
    const users = [
        {
            userName:'lacoste_0420',
            name: 'Laco / EOW',
            avatar:'laco_eow',
            isFollowing: true
        },
        {
            userName:'EdeaMoon_',
            name: 'Edea',
            avatar:'edeamoon',
            isFollowing: false
        },
        {
            userName:'powerbazinga',
            name: 'Powerbazinga / garrotazo+14',
            avatar:'powerbazinga',
            isFollowing: true
        }]
        
    return (
        <section className='app'>
            {
                users.map(({userName, name, avatar, isFollowing }) => (
                        <TwitterFollowCard 
                            key={userName}
                            formatUserName={formatUserName} 
                            userName={name} 
                            avatar={avatar} 
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
};