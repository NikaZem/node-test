const fs = require('fs') 
const path = require('path') 
const axios = require('axios')


/* ;(async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {  
        if (err) {
            throw err
        }
        console.log('Done')
    })

})(); */


;(async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/albums");

    fs.writeFile(path.resolve(__dirname, '2.json'), JSON.stringify(data), 'utf-8', (err) => {  
        if (err) {
            throw err
        }
        console.log('Done')
    })

})();

