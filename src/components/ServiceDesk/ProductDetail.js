import React from "react";
import { useParams } from "react-router-dom";

import ServiceDesk from "./ServiceDeskNavigation";

//import chakra
import { Card } from "@chakra-ui/react";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <ServiceDesk />
      <Card
        mt="8"
        direction={{ base: "row", sm: "column" }}
        variant="outline"
        p="10"
      >
        <h1>Product Detail</h1>
        <p>Product ID : {params.productid}</p>
      </Card>
    </>
  );
}

export default ProductDetail;
