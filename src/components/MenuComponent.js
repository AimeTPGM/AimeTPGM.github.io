import React, { PureComponent } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue } from '../appConstant';
import RolesComponent from './RolesComponent';
import ViewContainer from '../pages/ViewContainer';
import AboutMeComponent from './AboutMeComponent';

class MenuComponent extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { renderComponent: () => { return <AboutMeComponent /> } }
    }
    
    render() {
        const menu = [
            {
                name: 'Me',
                isLink: false,
                isUmimplemented: true,
                renderComponent: () => { return (<AboutMeComponent />); }
            },
            {
                name: 'Education',
                isLink: false,
                isUmimplemented: false,
                renderComponent: () => { return (<div>Soon</div>); }
            },
            {
                name: 'Role',
                isLink: false,
                isUmimplemented: false,
                renderComponent: () => { return (<RolesComponent />); }
            },
            {
                name: 'Archievement',
                isLink: false,
                isUmimplemented: false,
                renderComponent: () =>  { return (<div>Soon</div>); }
            },
            {
                name: 'Recommendation',
                isLink: false,
                isUmimplemented: false,
                renderComponent: () =>  { return (<div>Soon</div>); }
            },
            {
                name: 'Blog',
                isLink: false,
                isUmimplemented: true,
                renderComponent: () => { return (<div>Soon</div>); }
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
                        cursor: 'pointer',
                        ['&:hover'] : {
                            color: 'white'
                        }
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