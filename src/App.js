import Header from './components/header/Header';
import './styles/styles.css';
import NewsList from './components/NewsList';
import { newsData } from './utils/data';
import { useState } from 'react';

// import StatePlayground from './components/playground/StatePlayground';

const App = () => {
  let [news, setNews] = useState(newsData);

  const getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = newsData.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });

    setNews(filtered);
  };

  return (
    <div className='App'>
      <h1 className='App-header'>
        <Header getKeywords={getKeywords} />

        <div className='container'>
          {/* <StatePlayground /> */}
          <NewsList news={news}>
            <br />
            <h1>I am a child element</h1>
          </NewsList>
        </div>
      </h1>
    </div>
  );
};

export default App;
