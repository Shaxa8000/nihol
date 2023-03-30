import { useState, useRef } from 'react';
import {Wrapper} from './style';
import {useAxios} from '../../hooks/useAxios';
import { errorNotifier } from '../../Generic/NotificationAPI';
import {LoadingOutlined} from '@ant-design/icons';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const [warningAnimation, setWarningAnimation] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();
  
  const playAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };
  
  const onKeyDetect = (e) => {
    if(e.key === 'Enter' || e.type === 'click') return onAuth();
  }
  
  const onAuth = async () => {
    if(loading) return; // after one time request it will be blocked
    const number = numberRef.current.input.value;
    const password = passwordRef.current.input.value;
    if(!password || !number) {
      playAnim();
      errorNotifier({errorStatus: 'notFillingError'});
      return; // stops the if block, so we don't need else keyword
    }
    setLoading(true);  // before the request
    const response = await axios({
        url: `/user/sign-in`,
        method: 'POST',
        body: {
          password: password,
          phoneNumber: `+998${number}`
        }
    });
    
    setLoading(false); // after the request
      
    if(response?.response?.status >= 400){
      return errorNotifier({ errorStatus: response?.response?.status });
    };
      
        
    // setting token on the local storage
    const {token} = response.data.data;
    localStorage.setItem("token", token);
  };
  
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>Biz har kuni kechagidan kora yaxshiroq xizmat ko'rsatishga intilamiz!</Wrapper.Description>
        <Wrapper.Input
           type='number'
           addonBefore ='+998'
           bordered={false}
           placeholder='99 999 99 99'
           ref={numberRef}
        />
        <Wrapper.PasswordInput
           bordered={false}
           placeholder='Parol...'
           ref={passwordRef}
           onKeyDown = {onKeyDetect}
        />
        <Wrapper.Button
          warningAnimation = {warningAnimation}
          onClick={onKeyDetect}
        >
          {
            loading ? <LoadingOutlined /> : "Login"
          }
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login






