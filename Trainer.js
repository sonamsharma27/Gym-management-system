// import { response } from 'express';
import React from 'react'
import { Component } from 'react';
import 'tachyons'
import './all.css'
class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name : '',
            age: '',
            contact: '',
            address: '',
            gender: '',
            fees: ''
        }
    }


onNameChange = (event) => {
    this.setState({name : event.target.value});
}
onGenderChange = (event) => {
    this.setState({ gender : event.target.value})
}

onAgeChange = (event) => {
    this.setState({ age : event.target.value})
}

onContactChange = (event) => {
    this.setState({ contact : event.target.value})
}

onAddressChange = (event) => {
    this.setState({ address : event.target.value})
}

onFeesChange = (event)=>{
    this.setState({ fees : event.target.value})
}
onSubmitSignin = () => {

    
    fetch('http://localhost:3005/register_trainer', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
    
            name: this.state.name,
            contact: this.state.contact,
            gender: this.state.gender,
            address: this.state.address,
            age: this.state.age,
            fees: this.state.fees
            
        }) 
    })
    .then(response =>{  response.json(); 
        // alert(response);
        // console.log(response);
        if(response.status===200)
        alert("Trainer registered");
        else
        alert("Unable to register\nInvalid or Duplicate data")        
    }).catch(err=>{
        console.log(err);
        alert("Unable to register\nInvalid or Duplicate data");
        console.log(err);})
    }
    render()
    {

        return (
            <div className='pack ma3  br3'>
                <article className="br3 ba dark-gray bw0 ph3 pv4 center shadow-5 b--black-10  w-90   center">
                    <div className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Register as Trainer</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange}
                                    />
                                </div>
    
                                <div clasNames="mv3">
                                    
                                    <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="age"
                                        id="age"
                                        onChange={this.onAgeChange}
                                    />
                                </div>
    
                                <div clasNames="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="contact">Contact Number</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="contact"
                                        id="contact"
                                        onChange={this.onContactChange}
                                    />
                                </div>
    
                                <div clasNames="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="address"
                                        id="address"
                                        onChange={this.onAddressChange}
                                    />
                                </div>
    
                                <div clasNames="mv3 ">
                                <label className="db fw6 lh-copy f6" htmlFor="address">Gender</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="gender"
                                        id="gender"
                                        onChange={this.onGenderChange}
                                    />
                                </div>
                                    

                                <div clasNames="mv3 ">
                                <label className="db fw6 lh-copy f6" htmlFor="address">Fees</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="fees"
                                        id="fees"
                                        onChange={this.onFeesChange}
                                    />
                                </div>
    
    
                                        <label className="pa0 ma0 lh-copy f6 pointer" />
    
                                    </fieldset>
                                    <div className="">
                                        <input
                                            className=" ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Register"
                                            onClick = {this.onSubmitSignin} 
                                        />
                                    </div>
    
                                </div>
                        </div>
                </article>
            </div>
        )
    }
}

export default Register
