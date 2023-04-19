import React from 'react'
import Container from './Table.styled'
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Table = ({data, handleEdit}) => {
  const navigate = useNavigate();

  return (
    <Container>
      {
        data.length > 0 ? (
          <>
            <div className="table-title-row">
              <div>Id</div>
              {
                Object.keys(data[0]).map(key => (
                  <div key={key}>{key}</div>
                ))
              }
              <div>Action</div>
              
            </div>
            {
              data.map(item => (
                <div className="table-row">
                  <div>1</div>
                  {
                    Object.values(item).map(attr => (
                      <div>{attr}</div>
                    ))
                  }
                  <div className="table-action-btn">
                    <Button width="100px" className="btn btn-edit" onClick={handleEdit} style={{
                      backgroundColor : "#A3FF48"
                    }}>Edit</Button>
                    <Button width="100px" className="btn btn-delete" style={{
                      backgroundColor : "#FF4848"
                    }}>Delete</Button>
                  </div>
                </div>
              ))
            }
          </>
        ) : <div>Loading...</div>
      }
    </Container>
  )
}

export default Table