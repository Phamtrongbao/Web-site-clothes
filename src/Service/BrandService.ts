import { BaseService } from "./BaseService";


export class BrandService extends BaseService {
  constructor() {
    super();
  }

  // Get brand
  getBrand = () => {
    return this.get("Brand", null);
  };

  //Get Product
  getProduct = () =>{
    return this.get("product",null)
  }

  //ordẻ 
  PostOrder = (value:any) =>{
    return this.post("Orders/CreateOrders",value)
  }

 
}

export const brand = new BrandService();