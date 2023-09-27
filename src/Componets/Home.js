import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { marvelcomicdata, cartdata } from "../Reduxfile/Actions/actions";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const Home = ({ maincartdata }) => {
  const cookies = new Cookies();
  const [Apidata, setApidata] = useState();
  const [Displaybtn, setDisplaybtn] = useState(false);
  const selector = useSelector((data) => data?.apidata);
  const lengths = useSelector((eles) => eles?.cartitemdatas);
  const { sta, loading } = selector;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(marvelcomicdata());
  }, [dispatch]);
  useEffect(() => {
    setApidata(selector?.sta?.data?.data?.results);
  }, [selector]);
  const CartHandler = (cart, event) => {
    event.preventDefault();
    dispatch(cartdata(cart));
  };
  console.log(lengths.length);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setDisplaybtn(true)
    }
    else{
      setDisplaybtn(false)
    }
  });
  const moveHandler =() =>{
    window.scrollTo(
    {top:"0",
    behavior:"smooth"})
  }
  console.log("cokies",cookies);
  return (
    <>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">MarvelComic</a>
          <a class="navbar-brand">Category</a>
          <a
            class="navbar-brand"
            onClick={() => navigate("/cartcomic")}
          >{`MyCart-${maincartdata.length}`}</a>
          <a class="navbar-brand">About</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-danger" type="submit">
              LogOut
            </button>
          </form>
        </div>
      </nav>
      {loading ? (
        <>
          <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Apidata?.map((ele) => {
              const { thumbnail, title, variantDescription } = ele;

              const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
              return (
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
                      <a href="#" class="btn btn-primary">
                        ViewItem
                      </a>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{ marginLeft: "20px" }}
                        onClick={(e) => CartHandler(ele, e)}
                      >
                        AddtoCart
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        { Displaybtn? <div
            style={{
              position: "fixed",
              width: "100%",
              left: "50%",
              zIndex: "1",
              cursor: "pointer",
              bottom: "15px",
              marginRight: "20px",
            }}
          >
            <button style={{ padding: "10px" }} onClick={()=>moveHandler()}>🔝</button>
          </div>:null}
        </>
      )}
    </>
  );
};

export default Home;
