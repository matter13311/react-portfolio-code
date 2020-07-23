import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';

import * as emailjs from 'emailjs-com';



class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            message: '',
            disable: false,
            emailSent: null,

            nameError:"",
            emailError:"",
            messageError:"",
        }
    }


    handleChange = (event)=>{
        //console.log(this.state.email);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    validateEmail= () => {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.email.match(mailformat) && this.state.email){
            return true;
        }
        else{
            return false;
        }
    }

    validate = () =>{
        let nameError="";
        let emailError="";
        let messageError="";



        if(!this.validateEmail(this.state.email)){
            emailError="Please enter a valid email";
        }

        if(!this.state.name){ //if this.state.name doesn't exist, meaning it's empty, then nameError will equal something.
            nameError = "Please enter your name"
        }

        if(!this.state.message){
            messageError = "You don't want to even say hello?";
        }

        if(nameError || emailError || messageError){
            this.setState({nameError, emailError, messageError});
            return false;
        }
        return true;

    }

    handleSubmit = (event) => {
        event.preventDefault(); //prevents refreshing of page when user clicks send

        const isValid = this.validate();
        if (isValid){
            const {name, email, message} = this.state;

            let templateParams = {
                to_name: "Matthew",
                from_email: email ,
                message_html: message,
                from_name: name
            }
            console.log("everything is good to go");
            this.setState({
                nameError:"",
                emailError:"",
                messageError:"",
            });
            emailjs.send(
                "gmail",
                "template_LZoa0cS2",
                templateParams,
                "user_yu7fT2EmOrmX9sNFcVERR"
            ).then(response => {
                console.log("send", response.status, response.text);
                this.setState({
                    disabled: true,
                    emailSent: true
                });
            }, function(error){
                console.log("failed",error);  
                this.setState({
                    disabled: true,
                    emailSent: false
                });
            });
        }

        

        
    }


    render(){
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit} className="contact_form_class">
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                            <Form.Label className="empty-input">{this.state.nameError}</Form.Label>
                        </Form.Group>

                        
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                            <Form.Label className="empty-input">{this.state.emailError}</Form.Label>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange}/>
                            <Form.Label className="empty-input">{this.state.messageError}</Form.Label>
                        </Form.Group>


                        <Button className="d-inlinee-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Successfully Sent. Thanks!</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }
    

}

export default ContactPage;
