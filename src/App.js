import './App.css';
import React, {useState} from 'react';
import { Search } from './components/search';
import { PostsHoc } from './components/postsHoc';

const App = () => {
  
  const [value, setValue] = useState('');

  return (
    <div className="App">
        <Search setValue={setValue}/>
        <PostsHoc value={value}/>
    </div>
  );
}

export default App;
