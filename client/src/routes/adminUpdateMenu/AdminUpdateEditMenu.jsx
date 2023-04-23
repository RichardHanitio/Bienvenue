import React, {useState, useEffect} from "react";
import Container from "./AdminUpdateEditMenu.styled";
import Button from "../../components/button/Button";
import useFetch from "../../hooks/useFetch";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Loader from "../../components/loader/Loader"
import { useSnackbar } from 'react-simple-snackbar';


const AdminUpdateEditMenu = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const {loading, data, error} = useFetch(`/menus/${id}`);
  const [menu, setMenu] = useState({
    name : undefined,
    price : undefined,
    rating : undefined,
    category : undefined,
    desc : undefined,
    discount : undefined,
    img : undefined,
  });
  
  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/");
    
    !loading && setMenu(
      {
        name : data.data.name,
        price : data.data.price,
        rating : data.data.rating,
        category : data.data.category,
        desc : data.data.desc,
        discount : data.data.discount,
        img : data.data.img
      }
    );

  }, [loading, data])

  const handleDetailsChange = (e) => {
    setMenu({
      ...menu,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const category = formData.get("category");
    const rating = formData.get("rating");
    const price = formData.get("price");
    const discount = formData.get("discount");
    const desc = formData.get("desc");

    const body = {name, category, rating, price, discount, desc}

    try {
      const res = await axios.patch(`/menus/${id}/edit`, body);
      console.log(res);
      openSnackbar(res.data.msg);
      setMenu({
        name : res.data.data.name,
        price : res.data.data.price,
        rating : res.data.data.rating,
        category : res.data.data.category,
        desc : res.data.data.desc,
        discount : res.data.data.discount,
        img : res.data.data.img
      })

    } catch (e) {
      console.log(e);
      openSnackbar("Something went wrong, please try again")
    }
  }


  return (
    <Container>
      {
        (!loading && menu.category) ? (
          <div className="new-menu-inner-container">
            <h1 className="new-menu-title">Update Menu</h1>
            <div className="new-menu-form-container">
              <form
                className="new-menu-form"
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="update-menu-img">
                  {console.log(menu.img)}
                  <img src={menu.img} alt={menu.name}/>
                </div>
                <div className="new-menu-item">
                  <label htmlFor="name" className="new-menu-label">
                    Enter Menu Name
                  </label>
                  <input
                    type="text"
                    className="new-menu-input"
                    name="name"
                    id="name"
                    defaultValue={menu.name}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="price" className="new-menu-label">
                    Enter Menu Rating
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={menu.rating}
                    className="new-menu-input"
                    name="rating"
                    id="rating"
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="price" className="new-menu-label">
                    Enter Menu Price
                  </label>
                  <input
                    type="number"
                    className="new-menu-input"
                    name="price"
                    id="price"
                    defaultValue={menu.price}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="price" className="new-menu-label">
                    Enter Menu Discount
                  </label>
                  <input
                    type="number"
                    className="new-menu-input"
                    name="discount"
                    id="discount"
                    defaultValue={menu.discount}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="category" className="new-menu-label">
                    Select Category
                  </label>
                  <select name="category" id="menu-category" defaultValue={menu.category} onChange={handleDetailsChange} required>
                    <option value="steak">Steak</option>
                    <option value="spaghetti">Spaghetti</option>
                    <option value="snack">Snack</option>
                    <option value="salad">Salad</option>
                    <option value="drink">Drink</option>
                  </select>
                </div>
                
                <div className="new-menu-item new-menu-item-desc">
                  <label htmlFor="desc" className="new-menu-label">
                    Enter Menu Description
                  </label>
                  <textarea
                    className="new-menu-input"
                    name="desc"
                    id="desc"
                    defaultValue={menu.desc}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="new-menu-action-buttons">
                  <Button variant="primary" height="50px" type="submit" className="btn btn-update" style={
                    {
                      backgroundColor : "#FFC148",
                    }
                  }>
                    Update
                  </Button>
                  <Button variant="primary" height="50px" type="button" className="btn btn-go-back" style={
                    {
                      backgroundColor : "#A0F8FE",
                    }
                  } onClick={() => navigate(-1)}>
                    Go Back
                  </Button>
                  <Button variant="primary" height="50px" type="button" className="btn btn-delete" style={
                    {
                      backgroundColor : "#FF4848",
                    }
                  }>
                    Delete
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : <Loader />
      }
      
    </Container>
  );
};

export default AdminUpdateEditMenu;
