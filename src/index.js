import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './example2/Tabs';
const TabPane = Tabs.TabPane;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeIndex: 1
        }
    }

    handleChange = ({activeIndex}) => {
        console.log(activeIndex);
        this.setState({
            activeIndex
        })
    }

    render () {
        return (
            <Tabs activeIndex={this.state.activeIndex} onChange={this.handleChange}>
                <TabPane order="1" tab="Hello" isActive>Hello.</TabPane>
                <TabPane order="2" tab="Bob">Bob.</TabPane>
                <TabPane order="3" tab="Jay">Jay.</TabPane>
            </Tabs>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
