# Gateway-cache

This project is used to ping records in Koi smart contarct a contarct. 
### How it works ?
First of all it will get list of all the records from KOI smart contarct then will send a  `GET` request to eact record on the gateway so that the gatway can snc those records.

### How to run?

Just install the node modules by running 
`yarn install`

then you can set up a `pm2` process by runnig 
`pm2 start app.js`
or by running simply
`node index.js` 