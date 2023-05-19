import React, { Component } from 'react'

class PlayerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            position: ""
        }
    }
    // * Component Life Cycle Methods
    componentDidMount() {
        console.log('Component did mount')
    }
    componentDidUpdate() {
        console.log('Component did update')
        // this will show up if we submited a new Player to the App Component
    }
    
    render() {
        return (
            <div>
                <h2>Player Form</h2>
            </div>
        )
    }
}

export default PlayerForm