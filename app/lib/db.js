
import { MongoClient, } from "mongodb";

const OPTIONS = {};
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ravindu:R200232@cluster0.vikkn.mongodb.net/landSell?retryWrites=true&w=majority&appName=Cluster0";
 
const client = new MongoClient(MONGODB_URI,OPTIONS);
export const db = client.db("landSell");