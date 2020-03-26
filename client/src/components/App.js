import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions'; 
import Header from './Header';
import { connect } from 'react-redux';

const Dashboard = () => <h2>Dashboard</h2>;
const CampaignNew = () => <h2>CampaignNew</h2>;
const Landing = () => <h2>Landing</h2>;



class App extends Component {

    componentDidMount() {
        console.log("Component Did Mount");
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/campaigns' component={Dashboard} />
                        <Route path='/campaigns/new' component={CampaignNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}



export default connect(null, actions)(App);