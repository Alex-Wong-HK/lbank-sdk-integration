import {
    GetEdnsProvider,
    LookupAddress,
    LookupDomainFromAddress,
    LookUpText, Reclaim,
    SetReverseDomain,
    TextType, WriteAddress, WriteText
} from "@edns/sdk";
import {ethers} from "ethers";

async function setDomain(privateKey:string,domain:string){
    const provider = await GetEdnsProvider()

    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    try {
        let result = await SetReverseDomain(domain,walletWithProvider)
        console.log(result)
    }catch (e){
        console.log(e)
    }
}
async function getDomain(address:string){
    console.log(await LookupDomainFromAddress(address));
}

async function getAddress(domain:string){
    console.log(await LookupAddress(domain,"BTC"))
}
async function description(domain:string, type:TextType){
    console.log(await LookUpText(domain,type))
}


async function callReclaim(privateKey:string,domain:string,tokenId:string){
    const RPC_ENDPOINT = 'https://polygon-rpc.com/';
    const provider = await GetEdnsProvider()
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    try {
        let result = await Reclaim(domain,walletWithProvider,tokenId)
        console.log(result)
    }catch (e){
        console.log(e)
    }
}
async function wtAddress(privateKey:string,domain:string,targetAddress:string){
    const provider = await GetEdnsProvider()
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    try {
        let result = await WriteAddress(domain,"BTC",targetAddress,walletWithProvider)
        console.log(result)
    }catch (e){
        console.log(e)
    }
}
async function wtText(privateKey:string,domain:string,type:TextType,content:string){
    const provider = await GetEdnsProvider()
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    try {
        let result = await WriteText(domain,TextType.GITHUB, content,walletWithProvider)
        console.log(result)
    }catch (e){
        console.log(e)
    }
}



(async ()=>{
    const domain = 'lbank2023.meta'
    const privateKey = ''
    await wtAddress(privateKey,domain,'0x1Ed85510228C91aDeFe37647a79f4f23DC6da844')
    await new Promise(r => setTimeout(r, 15000)); //Sleep 15s for blockchain update
    await getAddress(domain)
})()

