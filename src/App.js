import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import NewsPaper from './components/NewsPaper/NewsPaper';

function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-04-06&sortBy=publishedAt&apiKey=4cd085843a734cd48a840560799a02df')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div className="App">
      <h1>Total News: {news.length}</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg:12 }}>
          {
            news.map(news => <NewsPaper key={news.title} news={news}></NewsPaper>)
          }
      </Grid>
    </div>
  );
}

export default App;
