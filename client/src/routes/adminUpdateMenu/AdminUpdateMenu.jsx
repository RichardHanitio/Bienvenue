import React, {useState, useEffect} from 'react'
import Container from './AdminUpdateMenu.styled';
import Table from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';

const AdminUpdateMenu = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch all reservations
    setMenus([
      {
        "name" : "Tenderloin Steak",
        "category" : "steak",
        "desc" : "Whole Smoked Beef Tenderloin with Lemon Horseradish Cream",
        "rating" : 4,
        "price" : 500,
        "discount" : 30,
        "img" : "tenderloin.jpg"
      },
      {
        "name" : "Chicken Fettuccine Carbonara",
        "category" : "spaghetti",
        "desc" : "Creamy sauce and Loaded with chicken breast",
        "rating" : 4,
        "price" : 500,
        "discount" : 30,
        "img" : "tenderloin.jpg"
      },
      {
        "name" : "Fried Mozzarella",
        "category" : "snack",
        "desc" : "Fried Mozarella Cheese and Tomato Sauce",
        "rating" : 4,
        "price" : 500,
        "discount" : 30,
        "img" : "tenderloin.jpg"
      }
    ])
  }, [])

  const handleEdit = () => {
    navigate("/admin/update-menu/edit");
  }

  return (
    <Container>
      <div className="update-menu-inner-container">
        <h1 className="update-menu-title">Update Menu</h1>
          <Table data={menus} handleEdit={handleEdit}/>
      </div>
    </Container>
  )
}

export default AdminUpdateMenu;