
export interface Brand{
    _id: Number,
    Name: String,
    slug: String,
    Img: String,
}


  
export interface Product{
    _id:Number,
    Amount:Number,
    Name:String,
    Price:Number,
    Image:String,
    Color:String[],
    Description:String,
    Size:[],
    Rating:Number,
    QuantityLeftInStock:Number,
    Type:String,
    Discount:String,
    PriceDiscount:Number,
    HotProduct:String
}