export const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    };
    fetchData();
  }, url);
  
  console.log("useFetch returns: ", data);
  return data;
};