import { notification } from "antd";

const notFound = {
    message: 'Password or Phone number is wrong!'
};

const notFillingError = {
    message: 'Please fill all the fields!'
};

const errorNotifier = ({errorStatus}) => {
    switch(errorStatus){
        case 409:
            return notification.error({...notFound});
        case 'notFillingError': 
            return notification.error({...notFillingError});
        default: return ;
    }
};


export {errorNotifier};