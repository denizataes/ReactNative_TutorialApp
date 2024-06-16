import { useState, useEffect} from "react"
const useAppwrite = (fn) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const fetchData = async () => {
    setIsLoading( true);
     try {

       const response = await fn();

       setData(response);

     } catch (error) {
       Alert.alert('Error', error.message)

     } finally {
       setIsLoading(false);
     }
   }

  useEffect(() => {
    fetchData();
  }, [])

  return { data, isLoading, refetch}
}

const refetch = () => fetchData();

export default useAppwrite;