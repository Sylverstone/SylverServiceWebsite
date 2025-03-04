
import __dirname from '../../../dirname.js';
import  {Request, Response} from 'express';
export const get = (req :Request ,res : Response) => 
{
    return res.status(200).json({"Response" : "GGG"});
}

