import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./registerPage.style.scss";

const stripePromise = loadStripe("your_stripe_publishable_key");

const RegisterPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="register__page" id="registration">
      {/* <div className="register__page__background">
        <img
          src="https://th.bing.com/th/id/OIG3.S9CJ3HTJs8gCy9A8eLI.?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="way line"
        />
      </div> */}

      <div className="register__page__container">
        <h2>Registration Form</h2>
        <form
          onSubmit={handleSubmit}
          className="register__page__container__form"
        >
          <div className="register__page__container__form__group">
            <label htmlFor="firstName">First and Last Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="register__page__container__form__row">
            <div className="register__page__container__form__group">
              <label htmlFor="birthDate">Birth Date:</label>
              <input type="date" id="birthDate" name="birthDate" />
            </div>
            <div className="register__page__container__form__group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender">
                <option value="">...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="register__page__container__form__group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="register__page__container__form__group">
            <label htmlFor="phone">Phone:</label>
            <PhoneInput
              country={"us"}
              inputProps={{
                name: "phone",
                required: true,
                type: "tel",
              }}
              countryOptions={{
                us: "USA(+1)",
              }}
            />
          </div>

          <div className="register__page__container__form__row">
            <div className="register__page__container__form__group">
              <label htmlFor="state">State:</label>
              <select id="state" name="state">
                <option value="">...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="Fl">Florida</option>
                <option value="KS">Kansas</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="UT">Utah</option>
              </select>
            </div>
            <div className="register__page__container__form__group">
              <label htmlFor="registrationChoice">Select Race:</label>
              <select id="registrationChoice" name="registrationChoice">
                <option value="">...</option>
                <option value="5km">5km</option>
                <option value="10km">10km</option>
                <option value="15km">15km</option>
              </select>
            </div>
          </div>
        </form>

        <div className="register__page__container__payment">
          <Elements stripe={stripePromise}>
            <form
              onSubmit={handleSubmit}
              className="register__page__container__payment__form"
            >
              <label htmlFor="cardNumber">Card Number:</label>
              <CardNumberElement
                id="cardNumber"
                className="back__card"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#007bff",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />

              <div className="register__page__container__payment__form__row">
                <div className="register__page__container__payment__form__row__group">
                  <label htmlFor="cardExpiry">Expiration:</label>
                  <CardExpiryElement
                    id="cardExpiry"
                    className="back__card"
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#007bff",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>
                <div className="register__page__container__payment__form__row__group">
                  <label htmlFor="cardCvc">CVC:</label>
                  <CardCvcElement
                    id="cardCvc"
                    className="back__card"
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#007bff",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="register__page__container__payment__form__info">
                <label htmlFor="billingAddress">Billing Address:</label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  placeholder="Enter your billing address"
                  style={{ fontSize: "15px" }}
                />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  style={{ fontSize: "15px" }}
                />

                <label htmlFor="zipCode">Zip Code:</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Enter your zip code"
                  style={{ fontSize: "15px" }}
                />
              </div>

              <button
                type="submit"
                className="register__page__container__payment__form__button"
              >
                Register
              </button>
            </form>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
