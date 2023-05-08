export interface Order {
    _id: number,
    Name: string,
    Price: number,
    Amount: number,
    Color: any,
    Size: any,
    Image: string,
    Discount: any,
    PriceDiscount: any,
    cost:number,
}
export interface Orders {
    Product: Order[],
    totalPrice:number
  }
