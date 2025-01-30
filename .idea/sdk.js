import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyMzRhODllZC1kZTlmLTQxNDgtOTgwMC0zYzViZWEyMTI1OTUiLCJlbWFpbCI6Im1vcmdhbmUuY29jdXJvbkBlZHUuZGV2aW5jaS5mciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5YTRkZWUwZDFjZmQwOTE2YTQwNyIsInNjb3BlZEtleVNlY3JldCI6ImNjZmNlYzI4OGM4NTgzNTMzYjczYmUyODMzYjU3ODI5MmMyYmZmMjRlZjI2ZTMzZWI1NzYzMjFiZmMzZDMwNTciLCJleHAiOjE3Njk4MDI5ODN9.zlESYViRfRfovjElKJsa1ysywOZYexUID6StezmdV9U",
    pinataGateway: "sapphire-reasonable-magpie-78.mypinata.cloud",
});

async function main() {
    try {
        const file = new File(["hellooooo everyone !!"], "Testing2.txt", { type: "text/plain" });
        const upload = await pinata.upload.file(file);
        console.log(upload);
    } catch (error) {
        console.log(error);
    }
}

await main();