// ModalConfirm.jsx
import React from 'react';

const ModalConfirm = ({ openModal, message, setOpenModal, setOpenForm }) => {
  const handleClickAgree = () => {
    setOpenModal(false);
    setOpenForm(true);
  };

  return (
    <div className={`modal fade ${openModal ? 'show d-block' : 'd-none'}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thông báo</h5>
            <button type="button" className="btn-close" onClick={() => setOpenModal(false)}></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setOpenModal(false)}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleClickAgree}>Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
