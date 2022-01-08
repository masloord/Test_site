import React from 'react';
import styled from 'styled-components'
import {useDrag, useDrop} from "react-dnd";

const Box=styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(0, 0, 0, 0.24);
  margin-right: 20px;
  border-radius: 10px;
`

const DraggableDropoffBox = () => {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "card",
        drop: (item, monitor)=>{
          console.log(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    return (
        <Box   ref={dropRef}   style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}/>
    );
};

export default DraggableDropoffBox;
