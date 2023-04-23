import React from 'react'
import Container from './Table.styled'
import Button from '../button/Button';

const Table = ({data, handleEdit}) => {
  return (
    <Container>
      {
        data.length > 0 ? (
          <>
            <div className="table-title-row">
              {
                Object.keys(data[0]).map(key => (
                  <div key={key} className="table-title">{key}</div>
                ))
              }
              <div className="table-title">Action</div>
            </div>
            {
              data.map(item => (
                <div className="table-row">
                  {
                    Object.values(item).map(attr => {
                      return attr===null ? (
                        <div>-</div>
                      ) : <div>{attr.toString()}</div>
                    })
                  }
                  <div className="table-action-btn">
                    <Button width="100px" className="btn btn-edit" onClick={() => handleEdit(item._id)} style={{
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