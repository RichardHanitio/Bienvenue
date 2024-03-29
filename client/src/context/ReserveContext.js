import {createContext, useReducer} from "react";

const INITIAL_STATE = {
  items : [],
  date : new Date().toISOString(),
  // time : `${new Date().getHours()+1}:00`,
  // time : new Date().toLocaleString("en-US", {timeZone : "Asia/Jakarta", hour : "2-digit", minute : "numeric", hour12 : false}),
  time : new Date(),
  totalGuest : 1,
  totalPrice : 0,
  paymentMethod : ""
}

export const ReserveContext = createContext(INITIAL_STATE)

const ReserveReducer = (state, action) => {
  // helper function
  const findAndChangeItemAmount = (id, operation) => {
    const itemIndex = state.items.findIndex(item => item._id === id);
    if(itemIndex >= 0){
      let updatedAmount = state.items[itemIndex].amount;
      let discountedPrice = state.items[itemIndex].price - (state.items[itemIndex].price * (state.items[itemIndex].discount/100))
      let updatedTotalPrice = discountedPrice;

      // if increment
      if(operation === "i") {
        // add the amount
        updatedAmount = state.items[itemIndex].amount + 1;
        // add the total price
        updatedTotalPrice = state.totalPrice + discountedPrice
      } 
      // if decrement
      else {
        // if the item is still >1, then it can still be decremented
        if(state.items[itemIndex].amount > 1){
          updatedAmount = state.items[itemIndex].amount - 1;
          updatedTotalPrice = state.totalPrice - discountedPrice;
        }
      }

      const updatedItem = {
        ...state.items[itemIndex],
        amount : updatedAmount,
      };
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      return {
        ...state,
        items : updatedItems,
        totalPrice : updatedTotalPrice,
      };
    }
    return state;
  }

  // conditions
  switch(action.type) {
    case "ADD_ITEM" : 
      return {...state, items : [...state.items, {...action.payload, amount: 1}], totalPrice : state.totalPrice + (action.payload.price - (action.payload.price * (action.payload.discount/100)))};
    case "REMOVE_ITEM" :
      const removedItemIndex = state.items.findIndex(item => item._id === action.payload._id);
      const removedItem = state.items[removedItemIndex];
      return {...state, items : state.items.filter(item => item._id !== action.payload._id), totalPrice : state.totalPrice - (removedItem.price * removedItem.amount)};
    case "INCREASE_ITEM_AMOUNT" :
      return findAndChangeItemAmount(action.payload, "i");
    case "DECREASE_ITEM_AMOUNT" :
      return findAndChangeItemAmount(action.payload, "d");  
    case "CHANGE_DATE" : 
      return {...state, date : action.payload}
    case "CHANGE_TOTAL_GUEST" :
      return  {...state, totalGuest : action.payload}
    case "CHANGE_TIME" :
      return {...state, time : action.payload}
    case "FINISH_RESERVATION" :
      return INITIAL_STATE
    case "CHANGE_PAYMENT_METHOD" :
      return {...state, paymentMethod : action.payload}
    case "CHANGE_TOTAL_PRICE" :
      return {...state, totalPrice : action.payload}
    default :
      return state
  }
}

export const ReserveContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(ReserveReducer, INITIAL_STATE)
  
  return (
    <ReserveContext.Provider value={
      {
        items : state.items,
        date : state.date,
        time : state.time,
        totalGuest : state.totalGuest,
        totalPrice : state.totalPrice,
        paymentMethod : state.paymentMethod,
        dispatch
      }
    }
    >
      {children}
    </ReserveContext.Provider>
  )
}