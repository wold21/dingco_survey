import { Component } from "react";
import { Form, Container, Row, Button, Col } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ phoneNumber: e.target.value });
    }
    handleSubmit(e) {
        let text = `번호를 확인해주세요, 조회에 사용됩니다.\n${this.state.phoneNumber}`;
        if (window.confirm(text)) {
            this.checkUser(this.state.phoneNumber);
        }
        e.preventDefault();
    }
    checkUser(phoneNumber) {
        let body = {
            phone_number: phoneNumber,
        };
    }
    render() {
        return (
            <div>
                <Container className="panel">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextpassword"
                        >
                            <Col sm>
                                <Form.Control
                                    type="text"
                                    placeholder="PhoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <div className="d-grid gap-1">
                            <Button variant="secondary" type="submit">
                                Click
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}
