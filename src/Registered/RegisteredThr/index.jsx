import React, { Component } from 'react';
import {Button} from 'antd';
class RegisteredThr extends Component {
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
        return equipmentType;
    }
    render() {
        return (
            <div className="registeredTwo">
                <Button type="primary" icon="download" size="large">Andioid Download</Button>
                <Button type="primary" icon="download" size="large">IOS Download</Button>
            </div>
        );
    }

}

export default RegisteredThr;
