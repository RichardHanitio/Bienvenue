import React from "react";
import Container from "./AdminAddNewMenus.styled";
import Button from "../../components/button/Button";

const AdminAddNewMenus = () => {
  return (
    <Container>
      <div className="new-menu-inner-container">
        <h1 className="new-menu-title">Add New Menu</h1>
        <div className="new-menu-form-container">
          <form
            className="new-menu-form"
            method="post"
            encType="multipart/form-data"
          >
            <div className="new-menu-item">
              <label htmlFor="menu-name" className="new-menu-label">
                Enter Menu Name
              </label>
              <input
                type="text"
                className="new-menu-input"
                name="menu-name"
                id="menu-name"
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-price" className="new-menu-label">
                Enter Menu Price
              </label>
              <input
                type="number"
                className="new-menu-input"
                name="menu-price"
                id="menu-price"
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-category" className="new-menu-label">
                Select Category
              </label>
              <select name="menu-category" id="menu-category" required>
                <option value="steak">Steak</option>
                <option value="spaghetti">Spaghetti</option>
                <option value="snack">Snack</option>
                <option value="salad">Salad</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-image" className="new-menu-label">
                Enter Menu Image
              </label>
              <input
                type="file"
                className="new-menu-input"
                name="menu-image"
                id="menu-image"
                accept=".png,.jpg,.jpeg"
              />
            </div>
            <div className="new-menu-item new-menu-item-desc">
              <label htmlFor="menu-desc" className="new-menu-label">
                Enter Menu Description
              </label>
              <textarea
                className="new-menu-input"
                name="menu-desc"
                id="menu-desc"
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
