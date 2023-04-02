import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactConfig } from '../content_option';

const Admissions = () => {
  const dateForm = useRef();
  const form = useRef();
  const notify = () =>
    toast.success('Thanks for applying!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uvp88js',
        'template_8tja4qk',
        form.current,
        '4nwS6Ey-cecXiKWL8'
      )
      .then(
        (result) => {
          toast.success('Application sent successfully!');
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          toast.error('Error sending application. Please try again later.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className='font-mulish font-semibold'>
      <div className='grid grid-cols-1 gap-5 my-4 mx-4 md:mx-16'>
        <div className='col-span-1 md:col-span-8'>
          <h1 className='text-2xl md:text-6xl mb-2 text-darkBlue1'>
            <span className='text-darkgreenVariant'>LightWorkers</span>{' '}
            Application
          </h1>
          <hr className='t_border my-2 ml-0 text-left md:ml-0 md:text-left' />
          <p className='my-2'>
            We take various subjects, which includes:- Mathematics, Physics,
            Chemistry, Biology, Advanced mathematics, Sociology, Technical
            Drawing, History, Music amongst others. You will find below a form
            on simple informations that will be taken and also a message area
            for any information in which the applicant wants to give us
            directly. Also below is our email and phone contacts on reaching us
          </p>
        </div>
      </div>

      <div className='lg:col-span-4 grid lg:grid-cols-12 sec_sp '>
        <div className='lg:col-span-5 md:col-span-4  my-1 px-4'>
          <h3 className='text-darkBlue1 py-4'>Get in touch and Apply</h3>
          <address>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty('YOUR_FONE') ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ''
            )}
          </address>
          <p>{contactConfig.description}</p>
        </div>
        <div className='col-span-5 sm:col-start-2 sm:col-span-8 md:mx-auto md:col-span-6 mt-6 px-6 md:px-4'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='contact__form w-full '
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2'>
              <div>
                <input
                  className='form-control rounded-md w-full focus:outline-darkgreenVariant'
                  id='name'
                  name='user_name'
                  placeholder="Applicant's Name"
                  type='text'
                  required
                />
              </div>
              <div>
                <input
                  className='form-control rounded-1 w-full focus:outline-darkgreenVariant rounded-md'
                  id='email'
                  name='user_email'
                  placeholder="Applicant's Email"
                  type='email'
                  required
                />
              </div>
              <div>
                <input
                  className='form-control rounded-1 w-full focus:outline-darkgreenVariant rounded-md'
                  id='phone'
                  name='user_tel'
                  placeholder="Applicant's Parent's Tel"
                  type='tel'
                  required
                />
              </div>
              <div>
                <input
                  className='form-control rounded-1 w-full focus:outline-darkgreenVariant rounded-md'
                  id='Age'
                  name='user_age'
                  placeholder="Applicant's Age"
                  type='number'
                  required
                />
              </div>
              <div>
                <input
                  className='form-control rounded-1 w-full focus:outline-darkgreenVariant rounded-md'
                  id='Address'
                  name='user_address'
                  placeholder="Applicant's Address"
                  type='text'
                  required
                />
              </div>
              <div>
                <input
                  className='form-control rounded-1 w-full focus:outline-darkgreenVariant rounded-md'
                  id='Date'
                  name='user_dob'
                  placeholder="Applicant's Date Of Birth"
                  type='text'
                  ref={dateForm}
                  onFocus={() => (dateForm.current.type = 'date')}
                  onBlur={() => (dateForm.current.type = 'text')}
                  required
                />
              </div>
            </div>
            <textarea
              id='message'
              name='message'
              placeholder='Why are you applying to LightWorkers Academy?'
              rows='5'
              required
              className='form-control rounded-md w-full focus:outline-darkgreenVariant h-40 my-4'
            ></textarea>
            <div className='flex justify-center'>
              <button
                value='Send'
                onClick={notify}
                className='py-2 px-4 my-4 text-sm text-gray-400 rounded font-semibold bg-darkBlue hover:bg-darkgreenVariant transition duration-500 md:text-base'
              >
                Send
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
