import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDAta } from "../redux/productReducer.js/action";
import BreedTable from "../componant/BreedTable";
function Homepage() {
  const[data,setData]=useState([])
  const[page,setPage]=useState(0)
  const yourConfig = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",

      "x-api-key":
        "live_HPvtNnVPu1A9xKut0K5qyf3W1PDYmtd0bF5cO9E4b91gexTeAIiryvgkuMhgSiqP",

      // Authorization: `Bearer ${JWTToken}`,
    },
  };
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer);
  console.log(products);

  useEffect(() => {
    dispatch(getProductDAta(page,yourConfig));
  }, [page]);

  const handlSearchForMain=(id)=>{
      console.log(id)
      const found = products.find((element) => element.id ==id);
      setData(found);
      console.log(found)
  }
  console.log(page)
  return (
    <div className="flex flex-row md:max-lg:flex max-sm:flex-col gap-2  w-full h-screen justify-center justify-between text-center">
      <div className="border-4 w-1/2 max-sm:w-full ">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead color={"blue"}>
              <Tr color={"blue"}>
                <Th color={"blue"}>Breed name</Th>
                <Th color={"blue"}>Breed origin</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products &&
                products?.length > 0 &&
                products?.map((item, index) => {
                  return (
                    <BreedTable {...item} handlSearchForMain={handlSearchForMain} />
                    
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <div className="flex flex-row  justify-center justify-between text-center">
          <button disabled={page==0} onClick={()=>{setPage(page-1)}}>prev</button>
          <div>{page}</div>
          <button onClick={()=>{setPage(page+1)}}>next</button>
        </div>
      </div>
      <div className=" w-1/2">
        <div className="flex flex-col w-96 h-64 justify-center justify-between text-center">
          <div className="border-4">
            <img className="" src={data?data.image?.url:null} alt="" />
          </div>
          <div  className="flex flex-col w-full h-screen justify-center text-center ">
            <span>Name:{data?data.name:null}</span>
            <span>Origin:{data?data.origin:null}</span>
            <span>Weight in metric:{data?data.weight?.metric:null}</span>
            <span>Hairless:{data?data.hairless:null}</span>
            <a className="border-4  h-12" href={data?data.wikipedia_url:null}>wikipedia_url`</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
