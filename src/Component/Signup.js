import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div class="stretched">
             

<div id="wrapper" class="clearfix vh-100">


    

    <section id="content" class="signup-bg">
        <div class="content-wrap">
            <div class="container">
                <div id="processTabs" data-plugin="tabs" class="customjs">
                    
                    <div>
                        <div id="ptab1">

                                                        <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstname">First Name</label>
                                            <input type="text" class="form-control" id="firstname" placeholder="Enter First Name"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Last Name</label>
                                            <input type="text" class="form-control" id="lastname" placeholder="Enter Last Name"/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Date of Birth</label>
                                            <input type="date" value="" class="form-control text-left component-datepicker default" placeholder="MM/DD/YYYY"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Gender</label>
                                            <select id="inputGender" class="form-control">
                                                <option selected="">Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="email">Email Address</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter Email Address"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Mobile Number</label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="Enter Mobile Number"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12"></div>
                            </div>
                            <a href="next.html" class="button button-circle button-orange mt-4 tab-linker" rel="2">Next</a>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<div id="gotoTop" class="icon-angle-up"></div>


            </div>
        )
    }
}
