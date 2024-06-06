import { Client, Account} from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = import.meta.env.VITE_APPWITE_PROJECT_ID;
const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    
export const account = new Account(client);

export default client;