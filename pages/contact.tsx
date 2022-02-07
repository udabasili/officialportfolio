import React, { useState } from 'react';
import Layout from '../components/Layout';
import {toast, ToastContainer, ToastPosition} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FaMailBulk, FaGithubSquare, FaFacebook } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import { Audio } from  'react-loader-spinner'
import emailjs from '@emailjs/browser';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { ContactSchema } from '../lib/schema';
import Button from '../components/Elements/Button';

ContactSchema
interface MyFormValues {
  name: string
  email: string
  description: string
}

function Contact() {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const initialValues: MyFormValues = { 
                              email: '',
                              name: '',
                              description: '',
                            };


  const  handleSubmit = (event) => {
   
}


  return (
    <Layout title="Contact">
       <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <PageHead title="Contact"/>
      <div className="contact-page"> 
      <section className="contact">   
              <ul className='contact__list'>
					<li className='contact__item'>
						<FaMailBulk className='icon'/>
						<div className='contact__detail'>
							<span className='title'>Email</span>
							<span className='desc'>udbasili@acumendevelopers.com</span>
						</div>
				 	 </li>
					<li className='contact__item'>
						<FaGithubSquare className='icon' />
						<div className='contact__detail'>
							<span className='title'>Github</span>
							<span className='desc'>https://github.com/udabasili</span>
						</div>
					</li>
					<li className='contact__item'>
						<FaFacebook className='icon' />
						<div className='contact__detail'>
							<span className='title'>Facebook</span>
							<span className='desc'>https://www.facebook.com/acumendev</span>
						</div>
					</li>
              	</ul>   
			  	<div className='container'>
					<form className="form" onSubmit={handleSubmit}>
          <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}

              onSubmit={(values, actions) => {
                const {
                  name,
                  email, 
                  description
                } = values
                const template_params = {
                  "userName": name,
                  "userEmail": email,
                  "description": description,
              }
              
              const option = {
                  position: "top-center" as ToastPosition,
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              };
              event.preventDefault()
              emailjs.send(
                  process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                  process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                  template_params,
                  process.env.REACT_APP_EMAILJS_UID)
                .then((result) => {
                  if(result.status === 200){
                    toast.success("Email sent successfully", option)
                    setEmail('')
                    setName('')
                    setDescription('')
                  }
          
              }).catch((err) => {
            console.log(err)
                  toast.warning('Something went wrong. Please try again later', option)
              });
                actions.setSubmitting(false);
              }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <><h2 className="header-secondary">General Enquiry</h2><div className="form__control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      autoComplete="false"
                      value={values.name}

                      className="form__input"
                      required />
                    <label htmlFor="name" className="form__label">
                      Name
                    </label>
                    {errors.name ? <div>{errors.name}</div> : null}

                  </div><div className="form__control">
                      <input
                        type="email"
                        className="form__input"
                        onChange={handleChange}
                        value={values.email}
                        id="email"
                        autoComplete="false"
                        name="email" />
                      <label htmlFor="email" className="form__label">
                        Email
                      </label>
                      {errors.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div className="form__control--text-area">
                      <textarea
                        className="form__text-area"
                        value={values.description}
                        name="description"
                        id="description"
                        onChange={handleChange}
                        required />
                      <label htmlFor="description" className="form__label">
                        What would you like to know?
                      </label>
                      {errors.description ? <div>{errors.description}</div> : null}

                    </div>
                    <Button 
                      size="md"
                      onClick={handleSubmit as (e: any) => void} 
                      variant={'primary'}>
                      Submit
                    </Button>
                </>
            )}
          </Formik>
            
						</form>
						<div>
							<h2 className="header-secondary">Questionnaire for your project</h2>
							<iframe 
								src="https://docs.google.com/forms/d/e/1FAIpQLSfUBiIZ31zj1PK_rCbUouK2IG2yDMp_9fkTFtQbGUF7Lcip5w/viewform?embedded=true" 
								width="90%" 
								height="520" 
								title='questionnaire'
								frameBorder="0" 
							    >
									<Audio/>
								</iframe>
                </div>
            </div>        
            </section>
      </div>
    </Layout>
  )
}

export default Contact
