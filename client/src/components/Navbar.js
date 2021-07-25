import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {

  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="bg-black bl nav" expand='lg'>
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto extra'>
              <Nav.Link as={Link} to='/' className="nav-text">
              <img className='icon' alt='House Icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ5OC4xOTUzMTIgMjIyLjY5NTMxMmMtLjAxMTcxOC0uMDExNzE4LS4wMjM0MzctLjAyMzQzNy0uMDM1MTU2LS4wMzUxNTZsLTIwOC44NTU0NjgtMjA4Ljg0NzY1NmMtOC45MDIzNDQtOC45MDYyNS0yMC43MzgyODItMTMuODEyNS0zMy4zMjgxMjYtMTMuODEyNS0xMi41ODk4NDMgMC0yNC40MjU3ODEgNC45MDIzNDQtMzMuMzMyMDMxIDEzLjgwODU5NGwtMjA4Ljc0NjA5MyAyMDguNzQyMTg3Yy0uMDcwMzEzLjA3MDMxMy0uMTQwNjI2LjE0NDUzMS0uMjEwOTM4LjIxNDg0NC0xOC4yODEyNSAxOC4zODY3MTktMTguMjUgNDguMjE4NzUuMDg5ODQ0IDY2LjU1ODU5NCA4LjM3ODkwNiA4LjM4MjgxMiAxOS40NDUzMTIgMTMuMjM4MjgxIDMxLjI3NzM0NCAxMy43NDYwOTMuNDgwNDY4LjA0Njg3Ni45NjQ4NDMuMDcwMzEzIDEuNDUzMTI0LjA3MDMxM2g4LjMyNDIxOXYxNTMuNjk5MjE5YzAgMzAuNDE0MDYyIDI0Ljc0NjA5NCA1NS4xNjAxNTYgNTUuMTY3OTY5IDU1LjE2MDE1Nmg4MS43MTA5MzhjOC4yODEyNSAwIDE1LTYuNzE0ODQ0IDE1LTE1di0xMjAuNWMwLTEzLjg3ODkwNiAxMS4yODkwNjItMjUuMTY3OTY5IDI1LjE2Nzk2OC0yNS4xNjc5NjloNDguMTk1MzEzYzEzLjg3ODkwNiAwIDI1LjE2Nzk2OSAxMS4yODkwNjMgMjUuMTY3OTY5IDI1LjE2Nzk2OXYxMjAuNWMwIDguMjg1MTU2IDYuNzE0ODQzIDE1IDE1IDE1aDgxLjcxMDkzN2MzMC40MjE4NzUgMCA1NS4xNjc5NjktMjQuNzQ2MDk0IDU1LjE2Nzk2OS01NS4xNjAxNTZ2LTE1My42OTkyMTloNy43MTg3NWMxMi41ODU5MzcgMCAyNC40MjE4NzUtNC45MDIzNDQgMzMuMzMyMDMxLTEzLjgwODU5NCAxOC4zNTkzNzUtMTguMzcxMDkzIDE4LjM2NzE4Ny00OC4yNTM5MDYuMDIzNDM3LTY2LjYzNjcxOXptMCAwIiBmaWxsPSIjMzMzMzMzIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className='bl nav-text' as={Link} to='/saved'>
                    <img className='icon' alt='Book Icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ0OC44LDBoLTMzNy40Yy0zNC44NDgsMC02My4yLDI4LjM1Mi02My4yLDYzLjJ2Mzg1LjYwMWMwLDM0Ljg0NywyOC4zNTEsNjMuMTk5LDYzLjE5OSw2My4xOTloMzM3LjQgICAgYzguMjg0LDAsMTUtNi43MTcsMTUtMTV2LTk2LjRWMTVDNDYzLjgsNi43MTYsNDU3LjA4NSwwLDQ0OC44LDB6IE0xNTkuNiw5Ni4zOTloMTkyLjgwMWM4LjI4NCwwLDE1LDYuNzE2LDE1LDE1cy02LjcxNiwxNS0xNSwxNSAgICBIMTU5LjZjLTguMjg0LDAtMTUtNi43MTYtMTUtMTVTMTUxLjMxNSw5Ni4zOTksMTU5LjYsOTYuMzk5eiBNMTExLjQwMSw0ODJjLTE4LjMwNywwLTMzLjItMTQuODk0LTMzLjItMzMuMTk5ICAgIGMwLTAuNTcyLDAuMDE1LTEuMTQyLDAuMDQzLTEuNzA2YzAuODkxLTE3LjUxOCwxNS40MjMtMzEuNDk1LDMzLjE1Ni0zMS40OTVoMzIyLjRWNDgySDExMS40MDF6IiBmaWxsPSIjMzMzMzMzIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                  </Nav.Link>
                  <Nav.Link className='nav-text' onClick={Auth.logout}><img className='icon' alt='Book Icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ2OSA0NjkuMzMzMzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzNC44MzIwMzEgMGMxMjIuNDEwMTU3IDAgMjIyLjgwNDY4OCA5My43MzgyODEgMjMzLjYwMTU2MyAyMTMuMzMyMDMxaC0xOTAuOTMzNTk0di02NGMwLTguNjE3MTg3LTUuMjA3MDMxLTE2LjQwMjM0My0xMy4xNjQwNjItMTkuNzEwOTM3LTcuOTc2NTYzLTMuMzA0Njg4LTE3LjE1MjM0NC0xLjQ3MjY1Ni0yMy4yNSA0LjYyODkwNmwtODUuMzM1OTM4IDg1LjMzNTkzOGMtOC4zMzk4NDQgOC4zMzk4NDMtOC4zMzk4NDQgMjEuODIwMzEyIDAgMzAuMTY0MDYybDg1LjMzNTkzOCA4NS4zMzIwMzFjNi4wOTc2NTYgNi4xMDE1NjMgMTUuMjczNDM3IDcuOTM3NSAyMy4yNSA0LjYyODkwNyA3Ljk1NzAzMS0zLjMwNDY4OCAxMy4xNjQwNjItMTEuMDkzNzUgMTMuMTY0MDYyLTE5LjcxMDkzOHYtNjRoMTkwLjkzMzU5NGMtMTAuNzk2ODc1IDExOS41OTM3NS0xMTEuMTkxNDA2IDIxMy4zMzIwMzEtMjMzLjYwMTU2MyAyMTMuMzMyMDMxLTEyOS41OTc2NTYgMC0yMzQuNjY0MDYyLTEwNS4wNjY0MDYtMjM0LjY2NDA2Mi0yMzQuNjY0MDYyIDAtMTI5LjYwMTU2MyAxMDUuMDY2NDA2LTIzNC42Njc5NjkgMjM0LjY2NDA2Mi0yMzQuNjY3OTY5em0wIDAiIGZpbGw9IiMzMzMzMzMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" /></Nav.Link>
                </>
              ) : (
                <Nav.Link className='nav-text' onClick={() => setShowModal(true)}><img className='icon login' alt='Book Icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ2OSA0NjkuMzMzMzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzNC44MzIwMzEgMGMxMjIuNDEwMTU3IDAgMjIyLjgwNDY4OCA5My43MzgyODEgMjMzLjYwMTU2MyAyMTMuMzMyMDMxaC0xOTAuOTMzNTk0di02NGMwLTguNjE3MTg3LTUuMjA3MDMxLTE2LjQwMjM0My0xMy4xNjQwNjItMTkuNzEwOTM3LTcuOTc2NTYzLTMuMzA0Njg4LTE3LjE1MjM0NC0xLjQ3MjY1Ni0yMy4yNSA0LjYyODkwNmwtODUuMzM1OTM4IDg1LjMzNTkzOGMtOC4zMzk4NDQgOC4zMzk4NDMtOC4zMzk4NDQgMjEuODIwMzEyIDAgMzAuMTY0MDYybDg1LjMzNTkzOCA4NS4zMzIwMzFjNi4wOTc2NTYgNi4xMDE1NjMgMTUuMjczNDM3IDcuOTM3NSAyMy4yNSA0LjYyODkwNyA3Ljk1NzAzMS0zLjMwNDY4OCAxMy4xNjQwNjItMTEuMDkzNzUgMTMuMTY0MDYyLTE5LjcxMDkzOHYtNjRoMTkwLjkzMzU5NGMtMTAuNzk2ODc1IDExOS41OTM3NS0xMTEuMTkxNDA2IDIxMy4zMzIwMzEtMjMzLjYwMTU2MyAyMTMuMzMyMDMxLTEyOS41OTc2NTYgMC0yMzQuNjY0MDYyLTEwNS4wNjY0MDYtMjM0LjY2NDA2Mi0yMzQuNjY0MDYyIDAtMTI5LjYwMTU2MyAxMDUuMDY2NDA2LTIzNC42Njc5NjkgMjM0LjY2NDA2Mi0yMzQuNjY3OTY5em0wIDAiIGZpbGw9IiMzMzMzMzMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" /></Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
