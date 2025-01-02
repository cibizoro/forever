import { createContext, useEffect, useState } from "react";
import {products} from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

 export const ShopContext=createContext();
 const ShopContexprovider=(props)=>{
    const currency='$';
    const deliverfee=10;
    const[search,setSearch]=useState('');
    const[showSearch,setshowSearch]=useState(false)
    const[cartItems,setCartItems]=useState({})
    const navigate=useNavigate()

    const addtToCart=async(itemid,size)=>{
        if(!size){
            toast.error('select product size')
            return;
        }
        let cartData=structuredClone(cartItems);
        if(cartData[itemid]){
            if(cartData[itemid[size]]){
                cartData[itemid][size]+=1;
            }
            else{
                cartData[itemid][size]=1;
            }
        }
        else{
            cartData[itemid]={}
            cartData[itemid][size]=1
        }
        setCartItems(cartData);


    }
    const getCartCount=()=>{
        let totalCount=0
        for(const items in cartItems){
            for( const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item]

                    }
                }catch(error){

                }

            }

        }
        return totalCount
    }

    const updateQuantity=async(itemid,size,quantity)=>{
        let cartData=structuredClone(cartItems)
        cartData[itemid][size]=quantity
        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let TotalAmount = 0;
        
        // Loop over cartItems
        for (const itemId in cartItems) {
          // Find the product information based on product._id
          let itemInfo = products.find((product) => product._id === itemId);
      
          // Ensure itemInfo exists before proceeding
          if (!itemInfo) {
            console.error(`Product with id ${itemId} not found`);
            continue;
          }
      
          // Loop over the sizes or variants in cartItems[itemId]
          for (const size in cartItems[itemId]) {
            // Get the quantity of the product
            let quantity = cartItems[itemId][size];
      
            // Check if quantity is greater than 0
            if (quantity > 0) {
              TotalAmount += itemInfo.price * quantity; // Multiply price by quantity
            }
          }
        }
      
        return TotalAmount;
      };
      

    const value={
        products,currency,deliverfee,
        search,setshowSearch,showSearch,setSearch,cartItems,addtToCart,getCartCount,updateQuantity,getCartAmount,navigate

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContexprovider
