import React, {useState} from 'react'
import {ImageList, ImageListItem} from "@mui/material";
import {useDrag} from "react-dnd";

const DraggableImageItem=({item,index})=>{
    const [selectedCardIndex, setSelectedCardIndex]=useState()

    const changeCardSelection=((index)=>{
        setSelectedCardIndex(index)
    })
    const canDrag=item.draggable && item.count>0
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'card',
            item: { item },
            canDrag,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )

    return (
        <>
        <ImageListItem onClick={()=>{changeCardSelection(index)}} style={{cursor:"pointer"}} ref={dragRef}  className={`${selectedCardIndex===index ? "active" : ""}`}   key={item.path} >
            <img
                style={{opacity:canDrag?1:0.5}}
                src={`${item.path}`}
                srcSet={`${item.path}`}
                alt={item.title}
                loading="lazy"
            />

        </ImageListItem>
            {item.count}
        </>
    )
}

export default function DraggableImageList({itemData,width,height}) {




    return (
        <ImageList sx={{ width:width||"auto" , height: height||"auto" }} cols={1} >
            {itemData.map((item,index) => {
                return (
                    <>
                        <DraggableImageItem  item={item} index={index} />
                    </>
                )
                }
            )}
        </ImageList>

    )
}