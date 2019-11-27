import React from 'react';

import register from '../assets/icon-01.png';
import errorImg from '../assets/icon-warning.png';


export default class RegisterUser extends React.Component {
    state ={
        fields: {},
        errors: {},
       
    };

    handleValidation = () =>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

       
        if((typeof fields["name"] || typeof fields["lastName"]) !== "undefined") {
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
        if(!fields["email"] || !fields["lastName"] || !fields["email"] || !fields["company"] ){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
          }
          if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
      
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Invalid e-mail adress";
            }
          }

      
          this.setState({errors: errors});
          return formIsValid;
        }
    
      contactSubmit = (e) => {
        e.preventDefault();
        if(this.handleValidation()){
          //alert("Form submitted");
        }else{
         //alert("Form has errors")
        }
    
      }
    
      handleChange = (field, e) => {    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }

  
    render() {

        let classes=""; 
        classes+= (this.state.errors["name"] || this.state.errors["lastName"]|| this.state.errors["email"] || this.state.errors["company"])  ? "error" : "ok";  
        

        return (
            <div className="center-span">
                <span id="register-img">
                        <img src={register} />
                </span>
                <div className="register-form">
                    <form className="wrapper" onSubmit= {this.contactSubmit.bind(this)}>
                            <div className="wrapper__row">
                                <div className="wrapper__col-5">
                                    <label htmlFor="name">First name</label>
                                    <input ref="name" type="text" size="30" 
                                    onChange={this.handleChange.bind(this, "name")} 
                                    value={this.state.fields["name"]}
                                    className={classes}
                                    ></input>                                
                                </div>
                                <div className="wrapper__col-5">    
                                    <label htmlFor="lastName" >Last name</label>
                                    <input refs="lastName" type="text" sise="30"
                                    onChange={this.handleChange.bind(this, "lastName")} 
                                    value={this.state.fields["lastName"]}
                                    className={classes}
                                    ></input>
                                </div>                        
                            </div>                    
                            <div className="wrapper__row">
                                <div className="wrapper__col-12">
                                    <label htmlFor="company">Company</label>
                                    <input refs="company" type="text" size="30"
                                    onChange={this.handleChange.bind(this, "company")}
                                    value={this.state.fields["company"]}
                                    className={classes}
                                    />
                                 </div>
                            </div>             
                            <div className="wrapper__row">
                                <div className="wrapper__col-12">
                                    <label htmlFor="email">E-mail address</label>
                                    <input refs="email" type="text" size="30"
                                    onChange={this.handleChange.bind(this, "email")} 
                                    value={this.state.fields["email"]}
                                    className={classes}  src={errorImg}                              
                                    />                                                         
                                </div>
                            </div> 
                            <div className="wrapper__row">                          
                                <div className="wrapper__col-5">
                                    <button  id="submit" value="Submit">Register</button>
                                </div>
                                <div className="wrapper__col-5">
                                    {
                                        this.state.errors["email"] && (
                                            <span id="error" className={classes}>{this.state.errors["email"]}</span> 
                                        )
                                    }
                                </div>                                                        
                            </div>
                    </form>
                </div>
            </div>
            
        )
    }
};

