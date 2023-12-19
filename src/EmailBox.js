import React from 'react';
import './App.css';
class EmailBox extends React.Component {
    render() {
        return (
            <div className='container'>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default EmailBox;