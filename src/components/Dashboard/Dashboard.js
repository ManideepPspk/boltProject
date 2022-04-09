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
        <Row  className="mt-2 mr-2 ml-2">
            <Col sm={11}>
             <Card className="w-100 listGroupCls">
                    <Card.Body>
                        <Card.Text className="card-body">
                            <span className="card-body-text">Welcome to Dashboard. Please select a vehicle to see the statistics.</span>
                        </Card.Text>
                    </Card.Body>
             </Card>
            </Col>
        </Row>
    )
}

export default Dashboard;