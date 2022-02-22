import React, { useState } from 'react';
import Layout from '../components/Layout';
import {toast, ToastContainer, ToastPosition} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FaMailBulk, FaGithubSquare, FaFacebook } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import { Audio } from  'react-loader-spinner'
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import {
  Formik,
} from 'formik';
import { ContactSchema } from '../lib/schema';
import Button from '../components/Elements/Button';

init(process.env.NEXT_PUBLIC_EMAILJS_UID);
interface MyFormValues {
  name: string
  email: string
  description: string
}

const initialValues: MyFormValues = { 
  email: '',
  name: '',
  description: '',
};

function Contact() {
  const [isLoading, setLoading] = useState(false);

  return (
    <Layout title="Contact">
       
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
          <div className="form">
          <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={async (values, actions) => {
                setLoading(true)
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

                try {
                  const response = await emailjs.send(
                      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
                      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
                      template_params,
                      process.env.NEXT_PUBLIC_EMAILJS_UID)
                  if(response.status === 200){
                    toast.success("Email sent successfully")
                  }
                  setLoading(false)

                } catch (error) {

                  setLoading(false)
                  toast.error((error as any))
                
                }
          
              }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors , touched}) => (
              <><h2 className="header-secondary">General Enquiry</h2><div className="form__control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="false"
                      value={values.name}

                      className="form__input"
                      required />
                    <label htmlFor="name" className="form__label">
                      Name
                    </label>
                    {errors.name && touched.name ? <div className='error'>{errors.name}</div> : null}

                  </div><div className="form__control">
                      <input
                        type="email"
                        className="form__input"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        id="email"
                        autoComplete="false"
                        name="email" />
                      <label htmlFor="email" className="form__label">
                        Email
                      </label>
                      {(errors.email && touched.email) ? <div className='error'>{errors.email}</div> : null}
                    </div>
                    <div className="form__control--text-area">
                      <textarea
                        className="form__text-area"
                        value={values.description}
                        name="description"
                        id="description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required />
                      <label htmlFor="description" className="form__label">
                        What would you like to know?
                      </label>
                      {errors.description && touched.description ? <div className='error'>{errors.description}</div> : null}

                    </div>
                    <Button 
                      size="lg"
                      onClick={handleSubmit as (e: any) => void} 
                      isLoading={isLoading}
                      variant={'primary'}>
                      Submit
                    </Button>
                </>
            )}
          </Formik>
        </div>
          <div>
							<h2 className="header-secondary">Questionnaire for your project</h2>
							<iframe 
								src="https://docs.google.com/forms/d/e/1FAIpQLSfUBiIZ31zj1PK_rCbUouK2IG2yDMp_9fkTFtQbGUF7Lcip5w/viewform?embedded=true" 
								width="90%" 
								height="520" 
								title='questionnaire'
								frameBorder="0" 
							    >
								</iframe>
                </div>
            </div>        
            </section>
      </div>
    </Layout>
  )
}

export default Contact
