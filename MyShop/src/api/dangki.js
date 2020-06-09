const dangki = (email, name, password) => (
    fetch("http://192.168.100.11/app/register.php",
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, name, password})
    })
    .then(res => res.text())
);

module.exports = dangki;