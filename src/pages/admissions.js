import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
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
    <div className='font-mulish md:font-semibolds'>
      <div className='md:bg-darkgreenVariant bg-opacity-50 md:bg-opacity-0 h-full w-full'></div>

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
        <div className='lg:col-span-5 md:col-span-4  my-1 px-4  md:mx-12'>
          <h3 className='text-darkBlue1 py-1 md:py-4'>
            Get in touch and Apply
          </h3>
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
        <div class='lg:col-span-7 flex items-center mt-3 md:mt-4 px-4 md:px-20'>
          <form class='contact__form w-full' ref={form} onSubmit={sendEmail}>
            <div class='grid grid-cols-1 lg:grid-cols-2 md:gap-3'>
              <div class='form-group'>
                <input
                  class='form-control  w-full  rounded-md'
                  id='name'
                  name='user_name'
                  placeholder="Applicant's Name"
                  type='text'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  class='form-control  w-full  rounded-md'
                  id='email'
                  name='user_email'
                  placeholder="Applicant's Email"
                  type='email'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  class='form-control  w-full rounded-md'
                  id='phone'
                  name='user_tel'
                  placeholder="Applicant's Parent's Tel"
                  type='tel'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  class='form-control  w-full  rounded-md'
                  id='Age'
                  name='user_age'
                  placeholder="Applicant's Age"
                  type='number'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  class='form-control  w-full  rounded-md'
                  id='Address'
                  name='user_address'
                  placeholder="Applicant's Address"
                  type='text'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  class='form-control ] w-full  rounded-md'
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
              class='form-control py-2 px-3 mt-4 rounded-md'
              id='message'
              name='message'
              placeholder='Why are you applying to LightWorkers Academy?'
              rows='5'
              required
            ></textarea>
            <br />
            <div class='form-group'>
              <div class='form-group flex justify-center'>
                <button
                  class='btn ac_btn bg-darkBlue1 hover:bg-darkGreenVariant py-3 px-6 text-black text-center rounded-md mb-4 mt-1 justify-center items-center'
                  value='Send'
                  onClick={notify}
                  type='submit'
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
