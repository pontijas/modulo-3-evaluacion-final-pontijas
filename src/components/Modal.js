import React from 'react';
import '../stylesheets/App.scss';

const Modal = () => {
  return (
    <div className="modal__hidden">
      <div className="modal__container">
        <section className="modal__card">
          <img src="https://via.placeholder.com/350" alt="Character" title="Character image" />
          <section className="modal__info">
            <ul>
              <li>
                <h2>Name</h2>
              </li>
              <li>species</li>
              <li>origin</li>
              <li>status</li>
              <li>episodes</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Modal;
