const fetchdata = () => (
    fetch("http://192.168.100.11/app/")
    .then((response)=>response.json())
);

export default fetchdata;