import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="my-20">
      <div className="card w-96 bg-base-100 shadow-xl">        
        <div className="card-body items-center text-center">
          <h2 className="card-title">Membership</h2>
          <p>Post Unlimited</p>
          <p>Price : 25$</p>
          <div className="card-actions">
          <Link to="/payment">
                    <button className="btn btn-primary">Buy Now</button>
                </Link>               
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
