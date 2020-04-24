import React from 'react';
import '../stylesheets/App.scss';

const Modal = () => {
  return (
    <section className="modal__container">
      <img src="https://via.placeholder.com/200" alt="Character image" title="Character image" />
      <section className="modal__info">
        <h2>Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius quod commodi perspiciatis architecto nisi voluptas tempore, odio perferendis doloremque, quas illo inventore aspernatur corporis, alias expedita. Odio, exercitationem esse?</p>
      </section>
    </section>
  );
};

export default Modal;
