import React, { PureComponent } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ViewContainer from '../pages/ViewContainer';
import RecommendationView from '../pages/RecommendationView';
import { mediaMaxWidth } from '../util/util';
import AboutMeView from '../pages/AboutMeView';
import RolesMasterView from '../pages/RolesMasterView';
import { masterHilightColor } from '../appConstant';
class MenuComponent extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { 
            renderComponent: () => { return <RolesMasterView /> }, 
            activeMenuIndex: 0, 
            menu: menuData 
        }
        this.navigateTo = this.navigateTo.bind(this);
    }

    getActiveStyle(isActive) {
        if(isActive) return { 
            background: '#113052', borderRadius: '30px !important', color: masterHilightColor
        }
        return {  color: 'white', }
    }
    
    render() {
        const { activeMenuIndex, menu } = this.state;
        const getActiveItemStyle = (isActive) => {
            if (!isActive) return { display: 'block' }
            return { display: 'none' }
        }
        return (<div>
        <div css={{ display: 'flex', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginBottom: '50px', background: 'rgba(0,0,0,0.45)', borderRadius: '30px',
            [mediaMaxWidth(768)]: { flexDirection: 'column' }}}>
            {menu.map((item, key) => {
                if (item.isUnimplemented) return null;
                
                return (<div
                    key={key}
                    css={{
                        padding: '20px',
                        ...this.getActiveStyle(item.isActive),
                        display: 'flex',
                        alignItems: 'center',
                        transition: '0.5s',
                        cursor: 'pointer',
                        ['&:first-child']: {
                            borderRadius: '30px 0 0 30px'
                        },
                        ['&:last-child']: { borderRadius: '0 30px 30px 0' },
                        ['&:hover']: { color: masterHilightColor }
                    }}
                    onClick={() => { this.navigateTo(key)}}
                >
                    {/* {item.isActive ? <FontAwesomeIcon css={{ display: 'none', [mediaMaxWidth(768)] : { display: 'block'}}} icon={faBars} /> : null} */}
                    <div css={{
                        borderRadius: '10px', 
                        padding: '5px 20px',
                        width: '100%'
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
        const { activeMenuIndex } = this.state;
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
        name: 'Experiences',
        isLink: false,
        isActive: true,
        isUnimplemented: false,
        renderComponent: () => { return (<RolesMasterView />); }
    },
    {
        name: 'Education',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () => { return (<div>Soon</div>); }
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
        isUnimplemented: false,
        renderComponent: () =>  { return (<RecommendationView />); }
    },
    {
        name: 'Blog',
        isLink: false,
        isActive: false,
        isUnimplemented: true,
        renderComponent: () => { return (<div>Soon</div>); }
    },
    {
        name: 'About Me',
        isLink: false,
        isActive: false,
        isUnimplemented: false,
        renderComponent: () => { return (<AboutMeView />); }
    }
]