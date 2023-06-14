import React from "react";
import { useParams } from "react-router-dom";

import {datas} from "./json";


function SingleProduct() {
  // const data = [
  //   { id:1, name: "Baked Salmon" },
  //   { id:2, name: "Grilled Salmon" },
  // ];
  const { title } = useParams();

  const result = datas.find((product) => product.title === title);
  // console.log( data.find((product) => product.id === id))
  // data.fi
  //   console.log(result);
  return (
    <div>
      SingleProduct
      <p>{title}</p>/
      {console.log(result)}
      <h1> {result.type} </h1>
      {result.features.map((feature) => <li>{feature}</li>)}
    </div>
  );
}

export default SingleProduct;
