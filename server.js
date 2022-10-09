const express = require('express');
const router = require('./routes');
const app = express()
const PORT = process.env.PORT || 8000
app.use(router)
app.listen(PORT , () => {
    console.log('listing on port :-' , PORT)
})




