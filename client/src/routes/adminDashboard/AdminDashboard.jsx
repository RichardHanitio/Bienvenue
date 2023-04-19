import React from 'react'
import Container from "./AdminDashboard.styled"
import Card from '../../components/card/Card'

const AdminDashboard = () => {
  return (
    <Container>
      <div className="dashboard-inner-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-cards">
          <Card 
            title="Pending Reservations"
            image="/assets/dashboard/pending-reservations.png"
            details="10 pendings"
            link="/admin/pending-reservations"
          />
          <Card 
            title="Reservations Placed"
            image="/assets/dashboard/reservations-placed.png"
            details="2 placed"
            link="/admin/reservations-placed"
          />
          <Card 
            title="Add New Menus"
            image="/assets/dashboard/add-new-menus.png"
            link="/admin/add-new-menus"
            />
          <Card 
            title="Update Menu"
            image="/assets/dashboard/update-menu.png"
            details="20 menus available"
            link="/admin/update-menu"
          />
          <Card 
            title="User Accounts"
            image="/assets/dashboard/user-account.png"
            details="12 users"
            link="/admin/user-accounts"
          />
        </div>
      </div>
    </Container>
  )
}

export default AdminDashboard