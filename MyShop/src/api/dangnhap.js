const dangnhap = (email, password) => (
    fetch("http://192.168.100.9/app/login.php",
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
);

module.exports = dangnhap;