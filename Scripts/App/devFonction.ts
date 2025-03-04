import dotenv from "dotenv"
dotenv.config({path : "/.env"})

export const print = (message : string,printInProd = false) => 
{
    if(process.env.ENV === 'development' && !printInProd)
    {
        console.log(message);
    }
}

export const showTable = (message : string[],printInProd = false) =>
{
    if(process.env.ENV === 'development' && !printInProd)
    {
        console.log(message);
    }
}
