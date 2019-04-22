import React, { PureComponent } from 'react';
import RolesComponent from './RolesComponent';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue } from '../appConstant';
import MainView from '../pages/MainView';
import ViewContainer from '../pages/ViewContainer';

class MenuComponent extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { renderComponent: () => { return <RolesComponent /> } }
    }
    
    render() {
        const menu = [
            {
                name: 'Me',
                isLink: false,
                isUmimplemented: true,
                renderComponent: () => { return (<div><p><strong>Hello!</strong> I'm quite busy with so many things around. will keep update the page very very soon.</p>
                <p>You can reach me anywhere here.</p></div>); }
            },
            {
                name: 'Roles',
                isLink: false,
                isUmimplemented: false,
                renderComponent: () => { return (<RolesComponent />); }
            },
            {
                name: 'Blog',
                isLink: false,
                isUmimplemented: true,
                renderComponent: () => { return (<div></div>); }
            }
        ]

        return (<div>
        <div css={{ display: 'flex', justifyContent: 'center', color: 'white', padding: '10px'}}>
            {menu.map(item => {
                return (<div
                    css={{
                        margin: '10px 0',
                        ['&:not(:last-child)']: { borderRight: `1px solid ${lightBlue}`}
                    }}
                >
                    <div css={{ color: lightBlue, 
                        borderRadius: '10px', 
                        padding: '5px 20px',
                        cursor: 'pointer'
                    }}
                    onClick={() => { this.setState({ renderComponent: item.renderComponent })}}
                    >
                        {item.name}
                    </div>
                </div>)
            })}
        </div>
            <ViewContainer renderComponent={this.state.renderComponent} />
        </div>)
    }
}
export default MenuComponent;