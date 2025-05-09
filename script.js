(function() {
    const url = 'http://localhost:3000/webhook';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Hello from the browser!' })
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})();