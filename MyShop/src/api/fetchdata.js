const fetchdata = () => (
    fetch("http://192.168.100.17/app/")
    .then((response)=>response.json())
);

export default fetchdata;