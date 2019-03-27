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

class NumbersSubNav extends Component {
  render() {
    const { size, id, Container } = this.props;
    return (
      <div className="Nav">
        <Navigation.Sub>
            <Navigation.ItemList>
              <NavWrapLink to="/Numbers">
              <Navigation.Item>My Numbers</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="/NumberGroups">
              <Navigation.Item>Number Groups</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="#">
              <Navigation.Item>Search & Buy</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="#">
              <Navigation.Item>Porting</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="#">
              <Navigation.Item>Hosted Services</Navigation.Item>
              </NavWrapLink>
              <NavWrapLink to="#">
              <Navigation.Item>LSR</Navigation.Item>
              </NavWrapLink>
            </Navigation.ItemList>

        </Navigation.Sub>
      </div>
    );
  }
}
export default NumbersSubNav;
