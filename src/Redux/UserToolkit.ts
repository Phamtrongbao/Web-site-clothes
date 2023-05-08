  import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./config";
import { Order } from "../api/ProductType";

import { createSelector } from "@reduxjs/toolkit";
import { notification } from "antd";


  interface CartState {
    items: Order[];
  }

  const initialState: CartState = {
    items: [],
  };

  const calculateTotalPrice = (items: Order[]) => {
    let totalPrice = 0;
    items.forEach((item: any) => {
      totalPrice += item.Price  // nếu sản phẩm không khuyến mãi thì tính giá gốc
    });
    return totalPrice;
  };
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCarts(state, action) {
        const product = action.payload;
        const existingCartItem = state.items.find(item => item._id === product._id);
      
        if (existingCartItem) {
         notification.error({
          message:'Products already in the cart',
          style:{
            marginTop:60
          }
         })
        } else {
          const newCartItem: Order = {
            ...product,          
            Price: product.Price * product.Amount,
            Image: product.Image,
            Name: product.Name,
          };
          state.items.push(newCartItem);
          const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
          const totalPrice = calculateTotalPrice(state.items);
          console.log(totalPrice,'redux addtocart')
          localStorage.setItem("cartItems", JSON.stringify([...cartItems, newCartItem]));       
          localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
          notification.success({
            message:"More successful products, please choose more",
            style:{
              marginTop:60
            }
          })
        }
      },
      increaseCartItemAmount(state, action) {
        const itemToIncrement = state.items.find(item => item._id === action.payload)!;
        itemToIncrement.Amount++;
        if (itemToIncrement.Discount === "Đang Khuyến mãi") {
          itemToIncrement.Price = (itemToIncrement.cost - itemToIncrement.PriceDiscount) * itemToIncrement.Amount;
        } else {
          itemToIncrement.Price = itemToIncrement.cost * itemToIncrement.Amount;
        }
        const totalPrice = calculateTotalPrice(state.items);
        console.log(totalPrice,'redux tăng sl')
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      },
    
      decreaseCartItemAmount(state, action) {
        const itemToDecrement = state.items.find(item => item._id === action.payload)!;
        itemToDecrement.Amount--;
        if (itemToDecrement.Amount === 0) {
          state.items = state.items.filter(item => item._id !== action.payload);
        } else {
          if (itemToDecrement.Discount === "Đang Khuyến mãi") {
            itemToDecrement.Price = (itemToDecrement.cost - itemToDecrement.PriceDiscount) * itemToDecrement.Amount;
          } else {
            itemToDecrement.Price = itemToDecrement.cost * itemToDecrement.Amount;
          }
        }
        const totalPrice = calculateTotalPrice(state.items);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      },
      removeCartItemAmount(state, action) {
        const itemIndex = state.items.findIndex(item => item._id === action.payload);
        if (itemIndex >= 0) { // Kiểm tra xem vị trí của phần tử có hợp lệ hay không
          // Tạo một bản sao của mảng items trước khi xóa phần tử
          const newItems = [...state.items];
          newItems.splice(itemIndex, 1);
          // Cập nhật state với bản sao mới của mảng items
          state.items = newItems;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
        }else{
          localStorage.removeItem('cartItems');
          localStorage.removeItem("totalPrice")
        }
      },
      setCartItems(state, action) {
        state.items = action.payload;
        const totalPrice = calculateTotalPrice(state.items);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      },
    },
  });

  export const { addToCarts, setCartItems, decreaseCartItemAmount, increaseCartItemAmount,removeCartItemAmount } = cartSlice.actions;

  // Định nghĩa hàm selector để lấy danh sách các sản phẩm trong giỏ hàng
  export const selectCartItems = createSelector(
    (state: RootState) => state.Cart.items,
    (items) => items
  );
  
  export default cartSlice.reducer;