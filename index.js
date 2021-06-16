
const fetch = require('node-fetch');
const kweb = require("@_koi/sdk/web");
const CronJob = require('cron').CronJob;

let tools = new kweb.Web()

async function fetchNFTList () {
    var contractState = await tools._readContract()
    var NFTIDs = Object.keys(contractState.registeredRecord)
    return NFTIDs;
}

async function loopTRansactions(nfts){
    for (let i=0;i<nfts.length;i++){
        await pingTransaction(nfts[i])
    }
} 

function pingTransaction(id){
    return new Promise((resolve)=>{
        fetch(`http://localhost:3000/${id}`).then(()=>{
            resolve()
        }).catch(()=>{
            console.log(`${id} - rejected`)
        })
    })
    
}
async function main(){
    let nftIds = await fetchNFTList();
    console.log("Got Ids!")
    await loopTRansactions(nftIds)
}
var job = new CronJob('0 * * * *', function() {
    main()
}, null, true, 'America/Los_Angeles');

//for initial sync
main()