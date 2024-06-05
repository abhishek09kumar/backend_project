
console.log("hfh");

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worlhhd!')
})


app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom')
}) 


app.get('/login',(req,res) =>{
  res.send('<h3>hold tight we are bringing your login pagggje</h3>')
})

app.get('/jokes' ,(req,res)=>{
  const jokes=[
    {id:1,
    title:'a joke',
    content: 'This is a joke'},

    {id:2,
    title:'a joke',
    content: 'This is another joke'},

    {id:3,
    title:'a joke',
    content: 'This is third joke'},

    {id:4,
    title:'a joke',
    content: 'This is fourth joke'}
  ]
  res.send(jokes);
  console.log("this is a joke")
})

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  // Add any cleanup logic here (e.g., closing database connections)
  process.exit(0); // Exit with code 0 (success)
});


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})