#!/usr/bin/env node

const { ethers } = require("ethers")
console.log("resolving ethr")
const INFURA_PID = "fb8220b7b2934907806afc7ff635f1f0";
const chainNameOrId = 1 // mainnet
const provider = new ethers.providers.InfuraProvider(chainNameOrId, INFURA_PID);
const providerConfig = { networks: [
    { name: "mainnet", provider: provider } 
 ], rpcUrl: 'https://mainnet.infura.io/v3/fb8220b7b2934907806afc7ff635f1f0', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' }

const doc = resolveETHR(providerConfig)

async function resolveETHR(providerConfig){
    var did = require('did-resolver');
    var ethr = require('ethr-did-resolver')
    const ethrDidResolver = ethr.getResolver(providerConfig)
    const didResolver = new did.Resolver(ethrDidResolver)
    var did = "did:ethr:0x0203c1104b8c1cd39a283054d0a4f51f7c49723f2d56c90df08f9b4f018b8cea15"
    /*didResolver.resolve(did).then(
        (doc) => console.log(doc)
    )*/
    const doc = await didResolver.resolve(did)
    console.log(JSON.stringify(doc))

    return
    
}

