import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'thomasmartinez114',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/thomasmartinez114'
            },
            {
                id: '2',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/48811054?s=460&u=e32dee2196108dba9bde7096a39e571b6e7bf19e&v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '3',
                login: 'defunkt',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1f)',
    gridGap: '1rem'
}

export default Users
