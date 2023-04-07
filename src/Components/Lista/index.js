import React from "react";
import { Box, Btn } from "../UI";
import {lista} from "../../info";
import Card from "../Card";





const List=()=>{
    return(
        <Box>
        {
            lista.cargos.map((cargo, key)=>{
                return    <Card key={key} cargo={cargo}/>

                })
        }
            <Btn>Ver más</Btn>
        </Box>
    )
}

export default List;