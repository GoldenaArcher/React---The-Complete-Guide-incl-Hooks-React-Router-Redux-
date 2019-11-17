import React, { Component } from 'react';
import Post from '../../../components/Post/Post';

// import axios from 'axios';
import axios from '../../../../axios';

// import { Link } from 'react-router-dom';

import { Route } from 'react-router-dom';

import './Posts.css';
import FullPost from '../FullPost/FullPost';

export class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        // happened asynchrously, directly store does not work
        // axios uses promise
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post =>
                    ({
                        ...post,
                        author: 'Max',
                    })
                )
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                console.log(error)
            });
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post =>
                // <Link to={'/' + post.id} key={post.id}>
                <Post title={post.title} key={post.id}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>

        )
    }
}

export default Posts
