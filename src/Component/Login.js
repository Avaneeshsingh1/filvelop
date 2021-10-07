import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div class="stretched">
    
<div id="wrapper" class="clearfix">

  
  
  
  <section id="content" class="bg-white">
    <div class="content-wrap">
              <div class="container">
              
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8 text-center">
                <form id="login-form" name="login-form" class="row" action="#" method="post">

                <div class="col-md-8 mb-4">
                  <h1>Login</h1>
                </div>
                 <div class="col-md-8 form-group">
                  <label for="email-address">Email Address:</label>
                  <input type="text" id="email-address" name="email-address" value="" class="form-control" placeholder="Enter Email Address"/>
                </div>
                <div class="col-md-8 form-group">
                  <label for="Password">Password:</label>
                  <input type="text" id="Password" name="Password" value="" class="form-control" placeholder="Enter Password"/>
                </div>
                 <div class="col-md-8 form-group">
                  <button class="button button-circle button-orange button-rounded btn-block m-0" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                  <a href="forget.password" class="float-right">Forgot Password?</a>
                </div>

              </form>
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
