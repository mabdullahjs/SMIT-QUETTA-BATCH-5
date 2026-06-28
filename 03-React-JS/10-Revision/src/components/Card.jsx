import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addProduct } from "../config/reduxconfig/reducers/cartSlice";

const Card = ({ item }) => {
  const cardStyle = {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    margin: "20px",
  };

  const titleStyle = {
    fontSize: "22px",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "18px",
    color: "green",
    marginBottom: "15px",
  };

  const btnStyle = {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
  };


  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{item.title}</h2>

      <p style={priceStyle}>Price: ${item.price}</p>

      <button
        style={{ ...btnStyle, backgroundColor: "#007bff" }}
        onClick={()=>navigate(`/product/${item.id}`)}
      >
        Show More
      </button>

      <button
        style={{ ...btnStyle, backgroundColor: "#28a745" }}
        onClick={()=> dispatch(addProduct({
          product: item
        }))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;