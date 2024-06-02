import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useState(() => {
    console.log("Fetching Data...");
    setProducts(["Clothing", "Household"]);
  });
  return <div>ProductList</div>;
};

export default ProductList;
