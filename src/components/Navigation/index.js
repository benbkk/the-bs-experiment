import React from 'react';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import NavToggle from './NavToggle';
import NavBarCollapsed from './NavBarCollapsed';
import SearchForm from 'components/SearchForm';

class Navigation extends React.Component {
    componentDidMount() {
       bsn.Collapse('#navbarToggler', {});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <NavToggle
                    id="navbarToggler"
                    className="navbar-toggler"
                    target="navbarCollapse"
                    label="Toggle Navigation"
                />
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="container">
                        <div className="row justify-content-between">
                            <NavBarCollapsed
                                className="navbar-nav col-auto"
                                {...this.props}
                            />
                            <SearchForm
                                placeholder="Search"
                                label="Search"
                                className="form-inline col-auto"

                                {...this.props}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
