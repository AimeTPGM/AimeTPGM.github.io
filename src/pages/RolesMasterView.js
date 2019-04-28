import React, { PureComponent } from 'react'
import RolesView from './RolesView';

export default class RolesMasterView extends PureComponent {

    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = { activePage: <RolesView changePageFunc={this.changePage} />}
    }

    changePage(page){
        this.setState({ activePage: page });
        this.forceUpdate();
    }

    render() {
        const { activePage } = this.state;
        return (activePage)
    }
}