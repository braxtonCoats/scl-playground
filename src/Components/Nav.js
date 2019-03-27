import React, { Component } from 'react';
import { Navigation } from '@bandwidth/shared-components';
import { Loader } from '@bandwidth/shared-components';
import { Link } from '@bandwidth/shared-components';
import { NavLink } from 'react-router-dom';

const CustomLinkImplementation = ({
  children,
  to,
  newTab,
  appearFocused,
  icon,
  ...rest
}) => (
  <NavLink to={to} activeClassName="active" {...rest}>
    {children}
  </NavLink>
);

// NOTE: use Link.Wrap, which doesn't apply any styles!
/*export const NavWrapLink = props => (
  <Link.Wrap as={CustomLinkImplementation} {...props} />
);*/

const NavWrapLink = props => (
  <Link.Wrap as={CustomLinkImplementation} {...props} />
);

class Nav extends Component {
  render() {
    const { size, id, Container } = this.props;
    return (
      <div className="Nav">
        <Navigation>
          <Navigation.Title>
            Dashboard
          </Navigation.Title>

          <Navigation.ItemListStack>
            <Navigation.ItemList.Small>
            <NavWrapLink to="/Account">
              <Navigation.Item>Account</Navigation.Item>
            </NavWrapLink>
            <NavWrapLink to="/Search">
              <Navigation.Item>Search</Navigation.Item>
            </NavWrapLink>
            <NavWrapLink to="/Logout">
              <Navigation.Item>Logout</Navigation.Item>
            </NavWrapLink>
            </Navigation.ItemList.Small>

            <Navigation.ItemList>
              <NavWrapLink to="/Numbers">
              <Navigation.Item>Numbers</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="/orders">
              <Navigation.Item>Orders</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="/Applications">
              <Navigation.Item>Applications</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="/Emergency">
              <Navigation.Item>Emergency</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="/Analytics">
              <Navigation.Item>Analytics</Navigation.Item>
              </NavWrapLink>
            </Navigation.ItemList>
          </Navigation.ItemListStack>

        </Navigation>
      </div>
    );
  }
}
export default Nav;

/*
          <Navigation.Sub>
          <Navigation.ItemList>
          <NavWrapLink to="/">
            <Navigation.Item>
              <Link to='/'>
              Dashboard
              </Link>
            </Navigation.Item>
          </NavWrapLink>
          <Navigation.Item>
            <Link to='/orders'>
            Orders
            </Link>
          </Navigation.Item>
          <Navigation.Item>
            Numbers
          </Navigation.Item>
          <Navigation.Item>
            <Link to='/applications'>
            Applications
            </Link>
          </Navigation.Item>
          <Navigation.Item>
            Account
          </Navigation.Item>
          </Navigation.ItemList>
          </Navigation.Sub>
*/
