"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edns_sdk_1 = require("edns-sdk");
async function text() {
    // console.log(EDNSDomainLookup)
    // console.log(await EDNSDomainLookup.default.address("apexlegend.404","ETH"))
    // console.log(await EDNSDomainLookup.default.text("apexlegend.404","description"))
    console.log(await (0, edns_sdk_1.LookupAddress)("apexlegend.404", "ETH"));
    // console.log(await LookUpText("apexlegend.404","description" as TextType))
}
text();
