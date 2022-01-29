import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsAPI, removeProductAPI } from "services/api";
import { RemoveModal } from "../components/productlist/RemoveModal";

const ProductsList = () => {

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">{/* YOUR CODE HERE */}</div>
      </div>
    </div>
  );
};

export default ProductsList;
