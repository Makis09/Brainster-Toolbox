import React from "react";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarContent from "./Sidebar Content/SidebarContent";


class MySidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.onSetSidebarClose = this.onSetSidebarClose.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    onSetSidebarClose() {
        this.setState({ sidebarOpen: false });
    }
    styles = {
        root: {
            position: undefined,
            zIndex: "20"
        },
        sidebar: {
            position: "fixed",
            width: "310px",
            height: "100vh",
            top: "0px",
            zIndex: "20",
            backgroundColor: 'white'
        },
        content: {
            position: undefined,
            top: undefined,
            left: undefined,
            right: undefined,
            bottom: undefined
        },
        overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: "15"
        }
    };

    render() {
        return (
            <Sidebar
                sidebar={<SidebarContent closeSIdebar={this.onSetSidebarClose}/>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={this.styles}
            >
                <span onClick={() => this.onSetSidebarOpen(true)} className='orange-text'>
                    <FontAwesomeIcon icon='bars' style={{marginRight: '5px'}} />
                    Мени
                </span>
            </Sidebar>
        );
    }
}

export default MySidebar;