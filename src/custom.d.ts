import {IUser} from './modules/Authentication'

declare global{
    namespace Express{
        export interface Request{
           user?:IUser
            
           
        }
    }
}