import React, { PureComponent } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue, masterColor } from '../appConstant';
import RolesComponent from './RolesComponent';
import ViewContainer from '../pages/ViewContainer';
import AboutMeComponent from './AboutMeComponent';

class MenuComponent extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { 
            renderComponent: () => { return <AboutMeComponent /> }, 
            activeMenuIndex: 0, 
            menu: menuData 
        }
        this.navigateTo = this.navigateTo.bind(this);
    }

    getActiveStyle(isActive) {
        if(isActive) return { 
            background: '#113052', borderRadius: '50px !important'
        }
        return {  color: 'white', }
    }
    
    render() {
        const { menu } = this.state;
        console.log(this.state)
        return (<div>
        <div css={{ display: 'flex', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginBottom: '20px', background: 'rgba(0,0,0,0.45)', borderRadius: '50px'}}>
            {menu.map((item, key) => {
                if (item.isUnimplemented) return null;
                
                return (<div
                    key={key}
                    css={{
                        padding: '20px',
                        ...this.getActiveStyle(item.isActive),
                        ['&:first-child']: {
                            borderRadius: '50px 0 0 50px'
                        },
                        ['&:last-child']: { borderRadius: '0 50px 50px 0' },
                    }}
                    onClick={() => { this.navigateTo(key)}}
                >
                    <div css={{
                        borderRadius: '10px', 
                        padding: '5px 20px',
                        cursor: 'pointer',
                    }}
                    >
                        {item.name}
                    </div>
                </div>)
            })}
        </div>
            <ViewContainer renderComponent={this.state.renderComponent} />
        </div>)
    }

    navigateTo(nextActiveMenuIndex) {
        const { activeMenuIndex, menu } = this.state;
        if (nextActiveMenuIndex === activeMenuIndex) return;

        let newMenu = menuData;
        newMenu[activeMenuIndex].isActive = !newMenu[activeMenuIndex].isActive;
        newMenu[nextActiveMenuIndex].isActive = !newMenu[nextActiveMenuIndex].isActive;
        const renderCompFunc = newMenu[nextActiveMenuIndex].renderComponent;
        this.setState({ renderComponent: renderCompFunc, activeMenuIndex: nextActiveMenuIndex, menu: newMenu });
        this.forceUpdate();
    }
}
export default MenuComponent;

const menuData = [
    {
        name: 'Me',
        isLink: false,
        isActive: true,
        isUnimplemented: false,
        renderComponent: () => { return (<AboutMeComponent />); }
    },
    {
        name: 'Education',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () => { return (<div>Soon</div>); }
    },
    {
        name: 'Role',
        isLink: false,
        isActive: false,
        isUnimplemented: false,
        renderComponent: () => { return (<RolesComponent />); }
    },
    {
        name: 'Archievement',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () =>  { return (<div>Soon</div>); }
    },
    {
        name: 'Recommendation',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () =>  { return (<div>Soon</div>); }
    },
    {
        name: 'Blog',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () => { return (<div>Soon</div>); }
    }
]