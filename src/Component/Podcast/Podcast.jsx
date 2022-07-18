import React, {useEffect} from 'react'
import './Podcast.css'
import Card from './../Card/Card'; 
import axios from 'axios';
import {setTags, setHarklist} from '../../Redux/Actions/harklistAction'
import { useDispatch, useSelector } from 'react-redux';
import Tags from '../Tags/Tags';

function Podcast(){

    // const list = ['Wellness', 'Action', "Health"]


    // for tags
    const tags = useSelector((state) => state);
    const dispatchTags = useDispatch();

    const fetchTags = async () => {
        const response = await axios.get("https://beta.harkaudio.com/api/v0/entities/usersearchtags").catch((err) => {
            console.log("Error", err)
        });
        dispatchTags(setTags(response.data));
    }

    useEffect(()=>{
        fetchTags();
        fetchCards();
    },[]);

    // console.log("tags:",tags);


    // for card

    const cards = useSelector((state) => state);
    const dispatchCards = useDispatch()

    const fetchCards = async () => {
        const response = await axios.get("https://beta.harkaudio.com/api/v0/entities/searchviatags?tags=1&type=harklist").catch((err) => {
            console.log('Error', err);
        });

        const dictionary = (response.data.dictionary)
        const key = (Object.keys(dictionary));
        // console.log(key)

        const arr = response.data.dictionary[key];
        // console.log(arr)

        // const key2 = (Object.keys(arr));
        // console.log(key2[0]);

        const arr2 = response.data.dictionary[key].data;
        console.log(arr2)

        dispatchCards(setHarklist(arr2));
    }

    // function card(val){
    //     return(
    //         <Card/>
    //     )
    // }
    return(
        <div className='podcast'>
            <div className="podcast-text">
                Discover new and popular podcasters, topics and intersts
            </div>  
            <div className='tags'>
                <Tags />
            </div>
            <div className='cards'>
                <Card/>
            </div>
        </div>
    )
}

export default Podcast;
