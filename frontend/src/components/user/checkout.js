import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import app_config from "../../config";
import { UserContext } from "../../providers/userContext";

const Checkout = props => {

    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const url = app_config.api_url;

    const stripe = useStripe();
    const elements = useElements();

    const userService = useContext(UserContext);

    const getIntent = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 2300 * 100 })
        }
        return fetch(url + '/create-payment-intent', requestOptions)
            .then(response => response.json())
    }

    const payMoney = async (e) => {
        e.preventDefault();
        getIntent()
            .then(res => {
                console.log(res);
                let clientSecret = res.client_secret;

                completePayment(clientSecret);
            })

    };


    const completePayment = async (key) => {
        const paymentResult = await stripe.confirmCardPayment(key, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: userService.currentUser.fullname,
                },
            },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
            alert(paymentResult.error.message);
            console.log(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Success!");
                console.log(paymentResult);
            }
        }

    }

    return (
        <div>
            <h1>Checkout Here</h1>

            <form
                onSubmit={payMoney}
            >
                <div

                >
                    <CardElement
                        className="card"
                        options={{
                            style: {
                                base: {
                                    backgroundColor: "white"
                                }
                            },
                        }}
                    />
                    <button
                        className="pay-button"
                        disabled={isPaymentLoading}
                    >
                        {isPaymentLoading ? "Loading..." : "Pay"}
                    </button>
                </div>
            </form>

        </div>
    )
}
export default Checkout;