import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className="container m-auto my-20 flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold mb-10">PAYMENT</h1>
            <div className="max-w-[33%]">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;