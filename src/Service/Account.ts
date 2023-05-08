import { BaseService } from "./BaseService";


export class AccountService extends BaseService {
  constructor() {
    super();
  }

  //[post] login customer
  LoginCustomer = (value:any) =>{
    return this.post(`customer/login`,value)
  }

  RegisterCustomer = ( value:any) =>{
    return this.post(`customer/Register`,value)
  }
}

export const account = new AccountService();