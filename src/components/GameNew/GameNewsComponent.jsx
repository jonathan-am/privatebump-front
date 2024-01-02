import React, { useState, useEffect } from 'react';
import './Styles.modules.css';
import GameNew from './items/GameNews'
import getLastGameNews from '../../client/RequestGameNews';
import { useCookies } from "react-cookie";


function GameNewsComponent() {
    const [scrollOffset, setScrollOffset] = useState(0);
    const [cookies, removeCookie] = useCookies(["session"]);
    const session = cookies['session'];

    const [news, setNews] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollOffset((offset) => offset + 100);
        }, 3000); // Altere esse valor conforme necessário

        return () => clearInterval(interval);
    }, []);

    useEffect(()=> {
        getLastGameNews(session, setNews, removeCookie);
    }, [session, setNews]);


    return (
        <div className="game-news">
            <div className="game-news-container" style={{ transform: `translateX(-${scrollOffset}px)` }}>
                {news.map((item) => (
                    <GameNew key={item.id} user={item.user} new={item.new} />
                ))}
            </div>
        </div>
    );
}

export default GameNewsComponent;