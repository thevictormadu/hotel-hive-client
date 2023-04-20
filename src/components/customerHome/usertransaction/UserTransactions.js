

import "./UserTransaction.css";
import Active from '../../../assets/Active.svg'
import Inactive from '../../../assets/Inactive.svg';
import Edit from '../../../assets/Edit.svg';
import Delete from '../../../assets/Delete.svg';
import Filter from '../../../assets/Filter.svg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import React, { useState, useEffect} from "react";
// import axios from 'axios';
import { FaEllipsisH, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext } from "react";
import { HmsContext } from "../../navs/DashboardContext";

// const url='https://localhost:44384/api/Transaction/GetAllUsersTransaction?pageNumber=1&pageSize=10'
const url = "https://localhost:7255/api/Transaction/GetAllUsersTransaction?pageNumber=1&pageSize=10"
function UserTransactions() {
    const {userTransactions} = useContext(HmsContext)
    const [currentPage, setCurrentPage] = useState(1);
    let [transactionsPerPage,setTransactionPerPage] = useState(10);
    const [transactions, setTransactions] = useState([]);
    
    const[query, setQuery] = useState("");
    
 const getData= (url)=>{   
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        
        setTransactions(data.data)
        console.log(data.data);
    })};
    useEffect(() => {
            getData(url)
          }, []);

    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
    };
   
    const page = (transactionsPerPage) => {
        if (transactions.length < 10) {
            return transactionsPerPage = transactions.length;
        }
        else {
            return transactionsPerPage;
        }

    }


    // Get current transactions
    const indexOfLastTransaction = currentPage * page(transactionsPerPage);
    const indexOfFirstTransaction = indexOfLastTransaction - page(transactionsPerPage);
    const currentTransactions = userTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    // Change page
    //const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleEdit = (id) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === id) {
                return transaction;
            }
            return transaction;
        });
        setTransactions(updatedTransactions);
    }
    function handleDelete(id) {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    }
    const activeUsers = transactions.filter(x=> x.isactive ==="Yes").length;

    return (

        <div className="UsertranTable">
            <h2>Transactions</h2>
            <div className="UserTransactionSearchBar">
                <img src={Filter} alt='Your SVG'/>
                <div className="UserTransactionsearchInput">
                    <HiMagnifyingGlass className="UserTransactionSearchIcon" />
                    <input type="text" placeholder="Search" 
                        className="search"
                        onChange={(event)=> setQuery(event.target.value)}
                    />
                </div>
            </div>
            <table>
                <tr>
                <th className="ManagerTranCheckBox">
                        <input type="checkbox" />
                    </th>
                    <th></th>
                    <th>TRANSACTION-REFERENCE</th>
                    <th>AMOUNT</th>
                    <th>PAYMENT-METHOD</th>
                    <th></th>                    
                    <th>STATUS</th>
                    <th>
                        <FaEllipsisH />
                    </th>
                </tr>
                {currentTransactions.filter((transaction)=>
                transaction.transactionReference.toLowerCase().includes(query) || transaction.methodOfPayment.toLowerCase().includes(query))
                .map((transaction) => (
                    <tr key={transaction.id}>
                         <th className="ManagerTranCheckBox">
                            <input type="checkbox" />
                        </th>
                        <th></th>
                        <th>{transaction.transactionReference}</th>
                        <th>{transaction.amount}</th>
                        <th>{transaction.methodOfPayment}</th>
                        <th></th>                        
                        <th>{transaction.status ? <img alt="Your SVG" src={Active} /> : <img alt="Your SVG" src={Inactive} />}</th>
                        <th className="Action">
                            <img alt="Your SVG" src={Edit} onClick={() => handleEdit(transaction.id)} />
                            <img alt="Your SVG" src={Delete} onClick={() => handleDelete(transaction.id)} />...
                        </th>
                    </tr>
                ))}
            </table>
            <div className="Transaction-pagination">
                <div>
                    <h4>ACTIVE CUSTOMERS {activeUsers}/ {transactions.length} </h4>
                    
                </div>
                <div className="Footer">
                    <label htmlFor="Transaction-dd">
                        <b>Rows per page </b>
                    </label>
                    <input
                        type="number"
                        id="Transaction-dd"
                        name="number"
                        value={transactionsPerPage}
                        onChange={(event) => setTransactionPerPage(event.target.value)}
                    />
                    <div>
                        
                        <h4>
                            {indexOfFirstTransaction + 1}-{indexOfLastTransaction} of {transactions.length}
                        </h4>
                        <div>        {currentPage !== 1 && (
                            <FaAngleLeft onClick={() => handlePageChange(currentPage - 1)} />)}
                            {currentPage !== totalPages && (
                                <FaAngleRight onClick={() => handlePageChange(currentPage + 1)} />)}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default UserTransactions;

