import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotals, getCartItems } from './feature/cart/cartSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <main>
        {isOpen && 
        <Modal/>
        }
        <Navbar />
        <CartContainer />
      </main>
    </>
  )
}
export default App;
