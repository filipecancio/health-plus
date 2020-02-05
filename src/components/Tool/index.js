import React from 'react';
import logo from '../../assets/png/logo.png';
import avatar from '../../assets/png/avatar.png';
import { Navbar, Button } from 'rbx';
import { Link } from 'react-router-dom';

const Tool = () => (
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
      <Navbar.Item><Link to="/pacientes" >Pacientes</Link></Navbar.Item>
      <Navbar.Item><Link to="/exames" >Exames</Link></Navbar.Item>
      <Navbar.Item><Link to="/laudos" >Laudos</Link></Navbar.Item>


      </Navbar.Segment>

      <Navbar.Segment align="end">
        <Navbar.Item dropdown>
          <Navbar.Link><img
          src={avatar}
          alt=""
          role="presentation"
          height="28"
        /></Navbar.Link>
          <Navbar.Dropdown align="right">
            <Navbar.Item>Configurações</Navbar.Item>
            <Navbar.Item>Perfil</Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item>Sair</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Segment>
    </Navbar.Menu>
  </Navbar>
);

export default Tool;