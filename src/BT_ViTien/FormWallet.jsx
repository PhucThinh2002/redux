import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormWallet = ({ openForm, setOpenForm, transaction, setData, data }) => {
    const formik = useFormik({
        initialValues: {
            money: ''
        },
        validationSchema: yup.object({
            money: yup.number().required("Số tiền không được để trống").positive("Số tiền phải là số dương")
        }),
        onSubmit: (values) => {
            const now = new Date();
            const formattedDate = now.toLocaleString('en-US');
            
            if (transaction === 'Deposit') {
                const newBalance = data.balance + Number(values.money);
                const history = {
                    transaction_type: transaction,
                    transaction_amount: `+${Number(values.money).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`,
                    time: formattedDate
                };
                setData({
                    ...data,
                    balance: newBalance,
                    histories: [...data.histories, history]
                });
            } else {
                if (data.balance - Number(values.money) < 0) {
                    formik.setErrors({ money: "Khoản dư trong tài khoản không đủ" });
                } else {
                    const newBalance = data.balance - Number(values.money);
                    const history = {
                        transaction_type: transaction,
                        transaction_amount: `-${Number(values.money).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`,
                        time: formattedDate
                    };
                    setData({
                        ...data,
                        balance: newBalance,
                        histories: [...data.histories, history]
                    });
                }
            }
            setOpenForm(false);
            formik.resetForm();
        }
    });

    return (
        <div className={`modal fade ${openForm ? 'show' : ''}`} tabIndex="-1" style={{ display: openForm ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{transaction}</h5>
                        <button type="button" className="btn-close" onClick={() => setOpenForm(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="money" className="form-label">Số tiền</label>
                                <input
                                    type="number"
                                    id="money"
                                    name="money"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.money}
                                />
                                {formik.errors.money ? <div className="text-danger">{formik.errors.money}</div> : null}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setOpenForm(false)}>Hủy</button>
                                <button type="submit" className="btn btn-primary">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormWallet;
