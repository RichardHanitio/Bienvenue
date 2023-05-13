import React, {useState, useEffect} from 'react'
import Container from './AdminUpdateMenu.styled';
import Table from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar';

const AdminUpdateMenu = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const {loading, data, error} = useFetch("/menus");
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/");

    !loading && setMenus(data.data);
  }, [loading, data])

  const handleEdit = (id) => {
    navigate(`/admin/update-menu/edit?id=${id}`);
  }

  const handleDelete = async(id) => {
    try {
      const res = await axios.get(`/menus/${id}/delete`);
      openSnackbar(res.data.msg);
      window.location.reload();
    } catch(err) {
      openSnackbar("Something went wrong, please try again");
    }
  }

  return (
    <Container>
      <div className="update-menu-inner-container">
        <h1 className="update-menu-title">Update Menu</h1>
          <Table data={menus} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </Container>
  )
}

export default AdminUpdateMenu;