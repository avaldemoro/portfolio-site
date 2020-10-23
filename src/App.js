import React, { Component } from 'react';
import { Sidebar } from './sections/sidebar.js';
import { PreviousWork } from './sections/previousWork.js';
import { Intro } from './sections/intro.js';
import { Services } from './sections/services.js';
import { Contact } from './sections/contact.js';
import { Footer } from './sections/footer.js';

import './sass/main.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ""
        };
    }


    callAPI() {
        fetch("/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <>
                <Sidebar/>
                <div id="wrapper">
                    <Intro/>
                    <PreviousWork/>
                    <Services/>
                    <Contact/>
                </div>
                <Footer/>
            </>
        );
    }
}

export default App;
