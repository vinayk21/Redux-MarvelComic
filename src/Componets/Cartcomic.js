import React from "react";
// import { useDispatch,useSelector } from "react-redux";
import { Remove} from "../Reduxfile/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
const Cartcomic = ({maincartdata}) => {
  console.log("maincartdata",maincartdata);
const dispatch = useDispatch();
  const removeHandler =(remove) =>{
    dispatch(Remove(remove))
  }
  return (
    <>
      <h3
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "center",
          color: "red",
        }}
      >
        Your-Cart
      </h3>
        <div  style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}>
        {maincartdata?.map((x)=>{
           const { thumbnail, title, variantDescription } = x;
              
           const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
          return(
            <>
             <div
                    class="card mt-2 m-lg-5"
                    style={{ width: "25%", height: "500px" }}
                  >
                    <img
                      src={imageSrc}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "auto", height: "300px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <a href="#" class="btn btn-primary">ViewItem</a>
                      <a href="#" class="btn btn-primary" style={{marginLeft:"20px"}} onClick={()=>removeHandler(x)}>RemovetoCart</a>
                    </div>
                  </div>
            </>
          )
        })}</div>
       
    </>
  );
};

export default Cartcomic;
