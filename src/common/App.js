import React, { Component } from 'react';
import { SearchResults, Header } from '@components';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="title">
                    React SSR and Router v4 example.
                </p>
                <hr />
                <Switch>
                  <Route path="/" >
                    <Header>
                        <h1>Search results</h1>
                    </Header>
                    <SearchResults queryData={this.props.data} />
                  </Route>
                </Switch>
            </div>
        )
    }
}

export default App;
