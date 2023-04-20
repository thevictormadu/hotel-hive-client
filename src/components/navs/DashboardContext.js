 import { useState } from 'react';
 import { createContext, useEffect} from 'react';

 export const HmsContext = createContext(6);


export default function HmsIntegration({children}) {
    const [customer, setCustomer] = useState(4);
    const [manager, setManager] = useState(4);
    const [customerId, setCustomerId] = useState(localStorage.getItem('customerId'))
    const [managerId, setManagerId] = useState(localStorage.getItem('managerId'))
    const [ManagerBooking, setManagerBooking] = useState([])
    const [allBooking, setAllBooking] = useState([])
    const [managerTransactions, SetManagerTransactions] = useState([])
    const [userTransactions, SetUserTransactions] = useState([])
    const [amenities, SetAmenities] = useState([])
  

    localStorage.setItem('customerId', "0db4ae6f-618c-4dd2-9903-80bbbe36bf8e");
    localStorage.setItem('managerId', "25365119-5c60-4ae2-ae93-1b51425cfda2");

   
    useEffect( ()=>{
        async function fetchData(){
            // localStorage.setItem('customerId', "f029bbff-2655-49ed-a032-63042175aa40");
            setCustomerId(localStorage.getItem("customerId"));
            const Id = customerId;
            const response = await fetch(`https://localhost:7255/api/Customers/${Id}`);
            const payload = await response.json();
            setCustomer(payload.data.appUser);
        }

        fetchData();
     
    }, [customerId])

//Manager 
    useEffect( ()=>{
      async function fetchData(){
        // localStorage.setItem('managerId', "333ef607-d562-4ab3-8c29-98b8c0f4b23f");
        setManagerId(localStorage.getItem("managerId"));
        const Id = managerId;
       

        const response = await fetch(`https://localhost:7255/api/Customers/Manager/${Id}`);
        const payload = await response.json();
        setManager(payload.data.appUser);
      }

      fetchData();
   
  }, [managerId])

//Booking per manager
  useEffect( ()=>{
    async function fetchData(){
   
      // localStorage.setItem('managerId', "333ef607-d562-4ab3-8c29-98b8c0f4b23f");
      setManagerId(localStorage.getItem("managerId"));
      const Id = managerId;
    
      const response = await fetch(`https://localhost:7255/api/Booking/Per-Manager?managerId=${Id}`);
      const payload = await response.json();
  
      setManagerBooking(payload.data);
    }

    fetchData();
 
}, [managerId])


//All bookings
useEffect( ()=>{
  async function fetchData(){
 
    
    const response = await fetch(`https://localhost:7255/api/Booking`);
    const payload = await response.json();

    setAllBooking(payload.data);
  }

  fetchData();

}, [])


//Manager Transaction
useEffect( ()=>{
  async function fetchData(){
    setManagerId(localStorage.getItem("managerId"));
      const Id = managerId;
    
    const response = await fetch(`https://localhost:7255/api/Transaction/GetAllTransactionByManager/${Id}?pageNumber=1&pageSize=12`);
    const payload = await response.json();

    SetManagerTransactions(payload.data);
  }

  fetchData();

}, [])

//user Transaction
useEffect( ()=>{
  async function fetchData(){
      setCustomerId(localStorage.getItem("customerId"));
      const Id = customerId;
    
    const response = await fetch(`https://localhost:7255/api/Transaction/GetUserTransaction/${Id}?pageNumber=1&pageSize=12`);
    const payload = await response.json();

    SetUserTransactions(payload.data);
  }

  fetchData();

}, [])

//Get amenities

useEffect( ()=>{
  async function fetchData(){
          
    const response = await fetch(`https://localhost:7255/api/Amenity/GetAmenities`);
    const payload = await response.json();

    SetAmenities(payload.data);
  }

  fetchData();

}, [])

  return (
    <section className="section">
      <HmsContext.Provider value={{customer, manager, ManagerBooking, allBooking, managerTransactions, userTransactions, amenities, customerId, managerId }}>
        {children}
      </HmsContext.Provider>
    </section>
  );
}







