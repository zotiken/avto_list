import React, {useState, useCallback,useEffect} from 'react';
import axios from 'axios'

export const ThemeContext = React.createContext("");


const BASE_URL = "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json";


export default function (props) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get(BASE_URL).then(res => {
          setdata(res.data);
          setloading(false)
        });
      }, []);


    const addItem = useCallback(
        (params) => {
            setdata([...data,params])
        },
        [data],
    )

    const removeItem = useCallback(
        (id) => {
            console.log(data.filter((item)=> item.id !== id))
            setdata([...data.filter((item)=> item.id !== id)])
        },
        [data],
    )

    
    return (
        <ThemeContext.Provider value={{data,addItem,removeItem,loading}}>
        {props.children}  
      </ThemeContext.Provider>
    )
}
