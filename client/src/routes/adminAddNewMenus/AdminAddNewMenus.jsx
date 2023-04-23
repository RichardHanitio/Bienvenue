import React, {useState} from "react";
import Container from "./AdminAddNewMenus.styled";
import Button from "../../components/button/Button";
import axios from "axios";
import { useSnackbar } from 'react-simple-snackbar'

const AdminAddNewMenus = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [details, setDetails] = useState({
    name : undefined,
    price : undefined,
    category : "steak",
    rating : 1,
    desc : undefined,
  })

  const handleDetailsChange = (e) => {
    setDetails({
      ...details,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.get("category")===null && formData.set("category", "steak");

    try {
      const res = await axios.post("/menus", formData);
      openSnackbar(res.data.msg);
      setDetails({
        name : "",
        price : 0,
        rating : 1,
        category : "steak",
        desc : "",
      })

    } catch (e) {
      openSnackbar("Something went wrong, please try again")
    }
  }

  return (
    <Container>
      <div className="new-menu-inner-container">
        <h1 className="new-menu-title">Add New Menu</h1>
        <div className="new-menu-form-container">
          <form
            className="new-menu-form"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="new-menu-item">
              <label htmlFor="name" className="new-menu-label">
                Enter Menu Name
              </label>
              <input
                type="text"
                className="new-menu-input"
                name="name"
                id="name"
                value={details.name}
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
                value={details.price}
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
                value={details.rating}
                className="new-menu-input"
                name="rating"
                id="rating"
                onChange={handleDetailsChange}
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="category" className="new-menu-label">
                Select Category
              </label>
              <select name="menu-category" id="category" defaultValue={details.category} onChange={handleDetailsChange} required>
                <option value="steak">Steak</option>
                <option value="spaghetti">Spaghetti</option>
                <option value="snack">Snack</option>
                <option value="salad">Salad</option>
                <option value="drink">Drink</option>
              </select>
            </div>
            <div className="new-menu-item">
              <label htmlFor="img" className="new-menu-label">
                Enter Menu Image
              </label>
              <input
                type="file"
                className="new-menu-input"
                name="img"
                id="img"
                required
                onChange={handleDetailsChange}
              />
            </div>
            <div className="new-menu-item new-menu-item-desc">
              <label htmlFor="desc" className="new-menu-label">
                Enter Menu Description
              </label>
              <textarea
                className="new-menu-input"
                name="desc"
                id="desc"
                value={details.desc}
                onChange={handleDetailsChange}
              />
            </div>
            <Button variant="primary" height="50px" type="submit">
              ADD MENU
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AdminAddNewMenus;
