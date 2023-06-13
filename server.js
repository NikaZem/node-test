const http = require('http')
const fs = require('fs') 
const path = require('path') 
const axios = require('axios')

http
    .createServer((request, response) => {
        response.setHeader("Content-Type", "text/html; charset=utf-8;")
        if (request.url === '/users') {
            response.write('List of users')
        } else if (request.url === '/posts') {
            response.write('List of posts')
        } else if (request.url === '/users-posts') {
            ;(async () => {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/albums");
            
                fs.writeFile(path.resolve(__dirname, '3.json'), JSON.stringify(data), 'utf-8', (err) => {  
                    if (err) {
                        throw err
                    }
                    console.log('Done')
                })
            
            })();
        }

        response.end()
    })
    .listen(3000);