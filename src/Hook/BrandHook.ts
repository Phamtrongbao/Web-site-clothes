import {UseMutationResult, useMutation, useQuery} from 'react-query'
import { Brand, Product } from "../api/BrandType";
import { brand } from "../Service/BrandService";
import { Orders } from '../api/ProductType';



//brand data
const getBrandData = async ():Promise<Brand[]> => {
    const response = await brand.getBrand();
    return response.data;
  };
  export const useGetBrand = () => {
    return useQuery<Brand[], Error>("brand", getBrandData);
  };


  //product data
  const getProductData = async ():Promise<Product[]> =>{
      const response = await brand.getProduct();
      return response.data
  }
  export const useProduct = () =>{
    return useQuery<Product[],Error>("product",getProductData,{
      staleTime: 10000, // 5 giây,
      cacheTime:5000
    })
  }



  //order
  const PostProduct = async (value:Orders[]):Promise<Orders[]> =>{
    try {
      const response = await brand.PostOrder(value);
      console.log(response,'data mutata');
      return response.data; // Trả về dữ liệu đơn hàng từ phản hồi API
    } catch (error) {
      console.log(error);
      throw error; // Ném lỗi nếu có lỗi xảy ra
    }
  
}
export const useMutationOrders = (): UseMutationResult<Orders[], Error, Orders[], unknown> => {
  return useMutation<Orders[], Error, Orders[]>(PostProduct);
  };

