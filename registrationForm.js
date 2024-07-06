import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label    " for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="mothername">
                  <label className="from label" for="mothername">Mother Name</label>
                  <input type="text" name="" id ="MotherName" className="from__input" placeholder="MotherName"/>
              </div>
              <div className="fathername">
                  <label className="from label" for="fathername">Father Name</label>
                  <input type="text" name="" id ="FatherName" className="from__input" placeholder="FatherName"/>
              </div>
              <div className="phonenumber">
                  <label className="from label" for="phonenumber">Phone Number</label>
                  <input type="text" name="" id ="phonenumber" className="from__input" placeholder="phonenumber"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              <div className="College Name">
                  <label className="form__label" for="CollegeName">College Name </label>
                  <input className="form__input" type="text" id="College Name" placeholder="College Name"/>
              </div>
              <div className="Branch">
                  <label className="form__label" for="Branch">Branch </label>
                  <input className="form__input" type="text" id="branch" placeholder="Branch"/>
              </div>
              <fieldset>
                  <legend>Select Gender</legend>
              <div>
                  <input type="radio" id="Male" name="Gender" value="Male"  />
                  <label for="Male">Male</label>
                  </div>
                   <div>
                      <input type="radio" id="Female" name="Gender" value="Female" />
                      <label for="Female">Female</label>
                    </div>
                    <div>
                          <input type="radio" id="others" name="Gender" value="others" />
                          <label for="others">others</label>
                </div>
                </fieldset>

            </div>
          <div class="footer">
              <button type="submit" class="btn">SignUp</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;
