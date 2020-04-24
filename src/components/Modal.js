import React from 'react';
import '../stylesheets/App.scss';

const Modal = () => {
  return (
    <div className="modal__hidden">
      <div className="modal__container">
        <section className="modal__card">
          <img src="https://via.placeholder.com/350" alt="Character" title="Character image" />
          <section className="modal__info">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius quod commodi perspiciatis architecto nisi voluptas tempore, odio perferendis doloremque, quas illo inventore aspernatur corporis, alias expedita. Odio, exercitationem esse?</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Modal;
