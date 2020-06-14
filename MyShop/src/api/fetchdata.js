const fetchdata = () => (
    fetch("http://192.168.43.28/app/")
    .then((response)=>response.json())
);

export default fetchdata;