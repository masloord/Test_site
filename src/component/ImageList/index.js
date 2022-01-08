import {ImageList, ImageListItem} from "@mui/material";


export default ({itemData,height,width})=>{
    return (
        <ImageList  sx={{ width:width||"auto" , height: height||"auto" }} cols={1} >
            {itemData.map((item) => (
                <ImageListItem key={item.path} >
                    <img
                        src={`${item.path}`}
                        srcSet={`${item.path}`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
