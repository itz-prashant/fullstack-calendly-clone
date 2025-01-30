import nextAppSession from "next-app-session";

// Your session data type
type MySessionData = {
    grantId?: string;
    email?: number;
 }
 
 // Setup the config for your session and cookie
 export const session = nextAppSession<MySessionData>({

    name: 'calendly_session',
    secret: process.env.SECRET ,
});