import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sgt279', 'template_y7p7h9i', form.current, 'YmBJvHbKGoTVL7hpj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h1 className="mb-4">Get In Touch</h1>
                <form onSubmit={sendEmail}>
                    <div className="form-group m-2">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group m-2">
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                        />
                    </div>
                    <div className="form-group m-2">
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter Message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;