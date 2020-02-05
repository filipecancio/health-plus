import React from 'react';
import logo from '../../assets/png/logo.png';
import { Navbar,Button } from 'rbx';
import { Link } from 'react-router-dom';

const Tool = () =>(
    <Navbar document={document} fixed="top" color="danger">
        <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              src={logo}
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Listagem</Navbar.Item>

            <Navbar.Item dropdown>
              <Navbar.Link>Softwares</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>Cardiologia</Navbar.Item>
                <Navbar.Item>Pediatria</Navbar.Item>
                <Navbar.Item>Geriatria</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Ver mais</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
              <Link to="/login" >
              <Button color="light">Log in</Button>
              </Link>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
);

export default Tool;