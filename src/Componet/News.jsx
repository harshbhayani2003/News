import React, { useState } from 'react'
import './News.css';
import DisplayNew from './DisplayNew';
import { useEffect } from 'react';

function News() {
    const APP_KEY="4efbad9842d940938567736b7d5fd3f9"
    const [searchnews, setserchnews] = useState("india")
    const [newsdata , setnewsdata]= useState([])
    const userinput = (input)=>{
        setserchnews(input.target.value);
        getdata();
    }
    const getdata = async()=>{
       
        const data = await fetch(`https://newsapi.org/v2/everything?q=${searchnews}&apiKey=${APP_KEY}`)
        const jsondata = await data.json();
        console.log(jsondata.articles);
        setnewsdata(jsondata.articles)
    }
   
    useEffect(()=>{
        getdata();
    },[])
    const searchchange = (e)=>{
        setserchnews(e.target.value)
    }
   
    return (
        <div>
            <div className='nav'>
                <ul>
                    <li><h2>Trending News</h2></li>
                    <li>
                        <a href="">All</a>
                        <a href="">News</a>
                        <a href="">Trending</a>
                    </li>
                    <li><input type="text" className='search' placeholder='Search' onChange={searchchange} value={searchnews}/>
                    <button className='btnsearch' onClick={getdata}>Search</button></li>
                </ul>
            </div>
            <div className='header'>
                <h1>Stay Update with TrendingNews</h1>
            </div>
            <div className='con'>
                <button className='btnsports btnnews' onClick={userinput} value='Sports' >Sports</button>
                <button className='btnpolitics btnnews' onClick={userinput} value='Politics' >Politics</button>
                <button className='btnentertainment btnnews' onClick={userinput} value='Entertainment' >Entertainment</button>
                <button className='btnhealth btnnews' onClick={userinput} value='Health' >Health</button>
                <button className='btnFitness btnnews' onClick={userinput} value='Fitness' >Fitness</button>
            </div>
            <div>
            {newsdata ? <DisplayNew data={newsdata}/>:null }
            </div>
        </div>
    )
}

export default News
 