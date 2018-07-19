import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    //busca os ados depois que componente aparece no DOM
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        )
    }
}



export default connect(null, { fetchPosts })(PostsIndex);