import React ,{useContext,createContext,useState} from 'react';
const ResultContext = createContext();
const baseUrl = 
'https://google-web-search1.p.rapidapi.com/';
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Google');
  
  
   const getResults= async (type)=> {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
     
      headers: {
        'X-RapidAPI-Key': '74c25380acmshecfc06bb161424bp161ac8jsn4a020422e1c1',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
        
        
      }
    });

    const data = await res.json();

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if (type.includes('/images')) {
      setResults(data.image_results);
    } else {

      setResults(data.results);
    }


    setLoading(false);
  }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
          {children}
        </ResultContext.Provider>
      );
    };
    
    export const useResultContext = () => useContext(ResultContext);
