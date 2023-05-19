import { useState, useEffect } from 'react';

import './Timer.css';

const Timer = ({ startDate }) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Math.floor(new Date().getTime() / 1000) - Math.floor(startDate / 1000));
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, [startDate]);

    let date = [
        Math.floor(time / 3600),
        Math.floor(time / 60) % 60,
        time % 60
    ]
    date = date.map((item) => {
        if (item < 10) {
            return "0" + String(item);
        } else {
            return String(item);
        }
    })
    return (
        <div className="timer">
            <p>
                {`${date[0]}:${date[1]}:${date[2]}`}
            </p>
        </div>
    )
}

export default Timer;