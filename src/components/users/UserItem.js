import React, { Component } from 'react'

export class UserItem extends Component {
    constructor() {
        super();
        this.state = {
          id: 'id',
          login: 'thomasmartinez114',
          avatar_url: 'https://avatars0.githubusercontent.com/u/48811054?s=460&u=e32dee2196108dba9bde7096a39e571b6e7bf19e&v=4',
          html_url: 'https://github.com/thomasmartinez114'
        }
      }

    render() {
        return <div className="card text-center">
                <img src={this.state.avatar_url} alt="" className="round-img" style={{ width: '60px' }}
                />
                <h3>{this.state.login}</h3>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">GitHub Page</a>
                </div>

            </div>;
    }
}

export default UserItem;
