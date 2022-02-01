import React from "react";
import { Link} from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    
    // window.addEventListener("scroll", updateNavbarColor);
    // return function cleanup() {
    //   window.removeEventListener("scroll", updateNavbarColor);
    // };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top "} expand="lg" color="info">
        <Container>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  Product
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/AdminHome/AddProduct" tag={Link}>
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/AdminHome/RemoveProduct" tag={Link}>
                    Remove Product
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  Team
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/AdminHome/AddTeam" tag={Link}>
                    Add Team Member
                  </DropdownItem>
                  <DropdownItem to="/AdminHome/RemoveTeam" tag={Link}>
                    Remove Team Member
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  C Feedback
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/AdminHome/AddCustomerFeedback" tag={Link}>
                    Add Customer Feedback
                  </DropdownItem>
                  <DropdownItem to="/AdminHome/RemoveCustomerFeedback" tag={Link}>
                    Remove Customer Feedback
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to='/AdminHome/UpdateContactInfo' tag={Link} className="nav-link">
                  <p>Contact Info</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/AdminHome/Logout' tag={Link} className="nav-link">
                  <p>Logout</p>
                </NavLink>
              </NavItem> 
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
