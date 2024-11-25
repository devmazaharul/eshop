import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function useGetproduct(getQuery:string | null) {

    const [searchProduct, setsearchProduct]: any[] = useState(null);
    const [laoding, setlaoding] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        getSearchproduct();
      }, [getQuery]);
    
    
   function getSearchproduct() {
    
        try {
          setlaoding(true);
          axios
            .get("https://673896744eb22e24fca85fc4.mockapi.io/product")
            .then((res) => {
                
              if (res.status == 200) {
              
                  setsearchProduct( res.data)
                // const newArr = res.data.filter((item: any) => {
                //   return item.name.toLowerCase().includes(getQuery);
                // });
    
                // if (newArr.length > 0) {
                //   setsearchProduct(newArr);
                //   setErr("");
                // } else {
                //   setErr("No data found");
                // }
              }
            });
        } catch (error) {
         setErr("Connection error");
        } finally {
          setlaoding(false);
        }
      }


      
      return {
        searchProduct,
        err,
        laoding
      }

}
