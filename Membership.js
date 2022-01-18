// import { response } from 'express';
import React from 'react'
import { Component } from 'react';
import 'tachyons'
import './all.css'

class Membership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            duration:''

        }
    }


    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onContactChange = (event) => {
        this.setState({ contact: event.target.value });
    }

    onDurationChange = (event) => {
        this.setState({ duration: event.target.value })
    }



    onSubmitSignin = () => {

            if(this.state.name===''||this.state.duration===''||this.state.duration==='')
            {
                alert("Data Missing");
                
            }
            else
            {
                fetch('http://localhost:3005/membership', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                name: this.state.name,
                contact: this.state.contact,
                duration: this.state.duration

            })
        })
        .then(response =>{   response.json(); 
            console.log(response);
          if(response.status===200)
            alert("Membership granted");
            else
            alert("Unable to signup for membership\nRegister first if not registered or enter valid data ") 
                  
        })
            }
       
    }
    render() {

        return (
            <div className='pack ma3  br3'>
                <article className="br3 ba dark-gray bw0  ph3 pv4 center shadow-5 b--black-10  w-90   center">
                    <div className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Sign up for gym membership if registered</legend>




                                <div clasNames="mv3 BLA">
                                    <label className="db  fw6 lh-copy f6" htmlFor="contact">Customer Contact Number</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="contact"
                                        id="contact"
                                        onChange={this.onContactChange}
                                    />
                                </div>

                                <div clasNames="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="address">Trainer's Name</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange}
                                    />
                                </div>
                               
                                
                                <div clasNames="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="address">Duration(in months)</label>
                                    <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="duration"
                                        id="duration"
                                        onChange={this.onDurationChange}
                                    />
                                </div>
                                <label className="pa0 ma0 lh-copy f6 pointer" />

                            </fieldset>
                            <div className="">
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign up"
                                    onClick={this.onSubmitSignin}
                                />
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Membership
