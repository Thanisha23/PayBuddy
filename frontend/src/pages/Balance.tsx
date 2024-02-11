import axios from "axios";
import { useState,useEffect } from "react";

const Balance = () => {
   
    const [userBalance,setUserBalance] = useState(0);
    
    useEffect(() => {
        async function fetchBalance(){
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/account/balance",
                    {withCredentials:true}
                );
                setUserBalance(response.data.balance);
            } catch (error) {
                console.log("Error fetching");
            }
        }
        fetchBalance();
    },[])
  return (

    <div>
        `Your Balance is ${userBalance}`
    </div>
  )
}

export default Balance