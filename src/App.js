import axios from 'axios';
import Header from './Component/ui/Header';
import CharacterGrid from './Component/characters/characterGrid'

import { useEffect, useState } from 'react';
import './App.css';
import Search from './Component/ui/Search';


const App = () => {
     const [items,setItems]=useState([])

     const [isLoading,setIsLoading]=useState(true)
     const [query, setQuery] = useState('')
     
  useEffect (() => {
      
      const fetchItems =async () =>{
        // setIsLoading(true)
        try{
          const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

        console.log(result.data);
        setItems(result.data)
        setIsLoading(false)
        }
        catch (err){
          console.log(err);
        }
        
      }


       
      fetchItems();

  },[query]);

  console.log(isLoading);
  return  <div className="container">
    <Header/>
    <Search getQuery={(q)=> setQuery(q)}/>
     
     <CharacterGrid isLoading={isLoading} items={items}/>
   

  </div>
    
      

      
  
}

export default App;
