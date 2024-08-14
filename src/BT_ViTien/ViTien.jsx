import React, { useState } from 'react';
import ModalConfirm from './ModalConfirm';
import FormWallet from './FormWallet';

const ViTien = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [message, setMessage] = useState("");
    const [transaction, setTransaction] = useState("");
    const [data, setData] = useState({
        balance: 2499.73,
        histories: [
            {
                transaction_type: "Deposit",
                transaction_amount: "$500.00",
                time: "19 Jan 3:00pm"
            },
            {
                transaction_type: "Withdraw",
                transaction_amount: "$200.00",
                time: "20 Jan 10:00am"
            }
        ]
    });

    const showMessage = (type) => {
        setTransaction(type);
        setMessage(type === "Deposit" ? "Bạn muốn nạp tiền đúng không?" : "Bạn muốn rút tiền đúng không?");
        setOpenModal(true);
    };

    return (
        <div className="bg-dark d-flex justify-content-center align-items-center vh-100">
            <div className="container text-light">
                <div className="wallet-card text-center">
                    <h2>My Wallet</h2>
                    <h3 className="text-warning">{data.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
                    <p>Total balance</p>
                    <div className="mb-3">
                        <button className="btn btn-success me-2" onClick={() => showMessage("Deposit")}>Deposit</button>
                        <button className="btn btn-danger" onClick={() => showMessage("Withdraw")}>Withdraw</button>
                    </div>
                    <h5>Transaction History</h5>
                    <table className="table table-striped text-light">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.histories.map((history, index) => (
                                <tr className={history.transaction_type === "Deposit" ? "table-success" : "table-danger"} key={index}>
                                    <td>{history.transaction_type}</td>
                                    <td>{history.transaction_amount}</td>
                                    <td>{history.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalConfirm 
                openModal={openModal} 
                message={message} 
                setOpenModal={setOpenModal} 
                setOpenForm={setOpenForm} 
            />
            <FormWallet 
                data={data} 
                openForm={openForm} 
                setOpenForm={setOpenForm} 
                setData={setData} 
                transaction={transaction} 
            />
        </div>
    );
};

export default ViTien;
