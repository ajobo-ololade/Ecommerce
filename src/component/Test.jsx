import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

const Test = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            firstName:'',
            lastName:"",
          



        },
        onSubmit:(values)=>{
            console.log(values)
           
           navigate('/signin')
        },
        validationSchema:yup.object({
            firstName:yup.string().required(`Required Field`),
            lastName:yup.string().required(`Required Field`),
            email:yup.string().required(`Required Field`),
           


        })
    })
  return (
    <>
    <p>Signup</p>
   <form action="" onSubmit={formik.handleSubmit}>
   <input type="text" className="form-control"onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=' First Name' name='firstName'/>
   {formik.touched.firstName && <div className='text-danger'>{formik.errors.firstName}</div>}
   
    <input type="text" className="form-control"onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Last Name' name='lastName'/>
    {formik.touched.lastName && <div className='text-danger'>{formik.errors.lastName}</div>}

    <input type="text" className="form-control"onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email' name='email'/>
    {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>}

    <button className="btn btn-success" type='submit'>Sign Up</button>
   </form>
    </>
  )
}

export default Test