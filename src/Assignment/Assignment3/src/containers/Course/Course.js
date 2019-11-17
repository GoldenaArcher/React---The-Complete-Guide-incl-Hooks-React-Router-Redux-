import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: '',
    }

    parseQuery() {
        const query = new URLSearchParams(this.props.location.search);
        query.forEach((value, key) => {
            if (this.state.title !== value)
                this.setState({title: value})
        });
    }

    componentDidUpdate() {
        this.parseQuery();
    }

    componentDidMount() {
        this.parseQuery();
    }

    render () {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;