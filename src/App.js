import React, {
    Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisteredOne from './Registered/RegisteredOne';
import RegisteredTwo from './Registered/RegisteredTwo';
import RegisteredThr from './Registered/RegisteredThr';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={RegisteredOne} />
                    <Route exact path="/RegisteredTwo" component={RegisteredTwo} />
                    <Route exact path="/RegisteredThr" component={RegisteredThr} />
                </div>
            </Router>
        );
    }
}

export default App;
