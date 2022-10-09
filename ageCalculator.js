const http = require('http') ;
const querystring = require('querystring')
const url = require('url');
const {AgeFromDateString} = require('age-calculator')


const server = http.createServer((req , res) => {
const gUrl = req.url
const pUrl = url.parse(gUrl)
const pathUrl = pUrl.pathname

if( pathUrl== '/age'){

const  q = pUrl.query
const pQuery = querystring.parse(q)
const {year , month , date , name} = pQuery ;
const Age = new AgeFromDateString(`${year}-${month}-${date}`).age

res.end(`
<html>
<body>
<h1>Hello ${name}</h1>
<p>You are currently ${Age} years old</p>
</body>
</html>`)
}else{
    res.end('<h1>Path is not Correct</h1>')
}
})
server.listen(3002 , ()=> {
    console.log('Listening on Port 3002')
})
