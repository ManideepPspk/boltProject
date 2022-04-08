import React from 'react';
import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import './Dashboard.scss';


function Dashboard(props) {
     console.log(props)
     return(
        <Row  className="mt-2 mr-2 ml-2 dashboard">
            <Col sm={4}>
             <Card className="w-100 listGroupCls">
                    <Card.Body>
                        <Card.Title>Channel Summary</Card.Title>
                        <Card.Text className="card-body">
                            <span className="card-body-text">Blocked</span>
                        </Card.Text>
                    </Card.Body>
             </Card>
            </Col>
         
            <Col sm={8}>
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>Announcement</Card.Title>
                        <div className="listGroupCls">
                        </div>
                    </Card.Body>
                </Card>
           </Col>
        </Row>
    )
}

export default Dashboard;