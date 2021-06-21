import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './SwapCards.css';
import Axios from '../axios/axios';

const SwapCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await Axios.get("/just-swap/card");

            setPeople(req.data);
        }
        fetchData();
        // fetch("http://localhost:5000/just-swap/card")
        // .then(res => res.json())
        // .then((result) => {
        //     setPeople(result);
        // })
    },[])
    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        // setLastDirection(direction)
      }
    
      const outOfFrame = (name) => {
        console.log(name + 'left the screen!')
      }
    return (
        <div className="swapCards">
            <div className="flex justify-center ">
                {
                    people.map((person) => (
                        <TinderCard className='absolute cursor-pointer' key={person.name} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className='card shadow-2xl mt-6'>
                                <h3 className="font-mono text-2xl font-bold text-white absolute bottom-5">{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
};

export default SwapCards;