import React from "react";
import { Link, useParams } from "react-router-dom";
import { datas } from "FinalJson";

export default function Pro() {
  const { type } = useParams();

  var result = {};
  // const result = data.find((product) => product.name === name);
  const results = datas.find((data) =>
    data.products.some((product) => {
      if (product.category === type) {
        // console.log(product);
        result = product;
      }
    })
  );
  console.log(result);
  return <div style={{marginTop:"100px"}}>
  hihi
  {result.category}
  {result.data.map((item) =><Link to={`${item.name}`}>{item.name}</Link>)}
  </div>;
}
