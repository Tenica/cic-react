import React from 'react';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "yup-phone";
import axios from 'axios'
import './regStyles.css';
import swal from 'sweetalert';

const RegisterationForm = () => {

    let schema = yup.object().shape({
        firstName: yup.string().lowercase().min(4, 'Must be at least 4 characters')
        .max(15, 'Must be 15 characters or less').required(),
        lastName: yup.string().lowercase().min(4, 'Must be at least 4 characters')
        .max(15, 'Must be 15 characters or less').required(),
        email: yup.string().email().required(),
        phone: yup.string("IN", true, 'mobile_no is invalid' ).phone().required()
      });

    const {register, handleSubmit, errors, reset} = useForm( {resolver: yupResolver(schema)})

    

    const onSubmit = (data) => {
        console.log(data)
        axios
        .post("https://semper-servers.herokuapp.com/users", data)
          .then(res => {
            if(res.data.result === "success") {
             swal("Success!", res.data.message, "success")
             .then(data => {
              console.log(res.data.result)
             },reset({})); 
            } else if (res.data.result === "error") {
                swal("Error", res.data.message, "error");
                console.log(res.data.error)
            }
          })
          .catch(error => {
            console.log(error);
            swal("Error","Unexpected error", "error")
          });
      };
    


    

    return ( <div className="form-inputs">
        <form method="POST" id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                    <label className="label"
                      htmlFor="firstname">First Name
                    </label>
                    <input type="text"
                    ref={register} 
                    className="form-control" 
                    name="firstName" 
                    id="firstName" 
                    pattern="[a-zA-Z]{1,}"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    placeholder="First-Name" 
                    />
                    <p className="input-form">{errors.firstName?.message}</p>
                    
                </div>
            </div>

            
           
            <div className="col-md-6">
            <div className="form-group">
            <label className="label"
              htmlFor="lastName">Last Name
            </label>
            <input type="text"
            ref={register( {required: true, minLength: 4, maxLength:10})} 
            className="form-control" 
            name="lastName" 
            id="lastName" 
            pattern="[a-zA-Z]{1,}"
            placeholder="Last-Name" 
            aria-invalid={errors.lastName ? "true" : "false"}
            />
            <p className="input-form" >{errors.lastName?.message}</p>
        </div>
    </div>

        <div className="col-md-6"> 
            <div className="form-group">
            <label className="label" 
               htmlFor="email">Email Address
            </label>
            <input type="email"
            ref={register( {required: true, })}
            className="form-control" 
            name="email" 
            id="email" 
            placeholder="Email"
            aria-invalid={errors.email ? "true" : "false"}
                  />
                  <p className="input-form" >{errors.email?.message}</p>
             </div>
         </div>

        
         <div className="col-md-6"> 
         <div className="form-group">
            <label className="label" htmlFor="phone">Phone-Number</label>
                <input type="tel"
                 ref={register( {required: true})}
                 className="form-control" 
                 name="phone" 
                 id="phone" 
                 placeholder="Phone Number"
                 aria-invalid={errors.phone ? "true" : "false"}
                  />
                  <p className="input-form">{errors.phone?.message}</p>
                  
             </div>
         </div>

            <div className="col-md-12">
                <div className="form-group">
                    <input 
                    type="submit"
                    value="Send Message" 
                    className="btn btn-primary"
                    />
                    <div className="submitting"></div>
                </div>
            </div>
        </div>
    </form>
        
        
        </div> );
}
 
export default RegisterationForm;