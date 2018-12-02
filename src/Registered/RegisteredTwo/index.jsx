import React, { Component } from 'react';
import {Button} from 'antd';
class RegisteredTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentType :''
        };
    }
    componentDidMount() {
        var equipmentType = "";
        var agent = navigator.userAgent.toLowerCase();
        var android = agent.indexOf("android");
        var iphone = agent.indexOf("iphone");
        var ipad = agent.indexOf("ipad");
        if (iphone !== -1 || ipad !== -1) {
            equipmentType = "ios";
        }
        if (android !== -1) {
            equipmentType = "android";
        }
        this.setState({
            equipmentType : equipmentType
        });
    }
    render() {
        const {equipmentType} = this.state;
        let Andiord = true;
        let IOS = true;
        alert(equipmentType)
        if(equipmentType=='ios'){
            IOS=false;
        }else if(equipmentType=='android'){
            Andiord=false;
        }

        return (
            <div className="registeredTwo">
                <Button type="primary" icon="download" size="large" disabled={Andiord}>Android Download</Button>
                <Button type="primary" icon="download" size="large" disabled={IOS}>IOS Download</Button>
            </div>
        );
    }

}

export default RegisteredTwo;
