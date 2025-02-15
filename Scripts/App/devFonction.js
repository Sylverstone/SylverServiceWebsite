export const print = (message,printInProd = false) => 
{
    if(process.env.ENV === 'development' && !printInProd)
    {
        console.log(message);
    }
}

export const showTable = (message,printInProd = false) =>
{
    if(process.env.ENV === 'development' && !printInProd)
    {
        console.log(message);
    }
}