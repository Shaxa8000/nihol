import { useRef, useState } from 'react';
import {Wrapper} from './style';
import {useAxios} from '../../hooks/useAxios';
import { errorNotifier } from '../../Generic/NotificationAPI';

const Login = () => {
  const axios = useAxios();
  const [warningAnimation, setWarningAnimation] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();
  
  const playAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  }
  
  const onAuth = async () => {
    const number = numberRef.current.input.value;
    const password = passwordRef.current.input.value;
    if(!password || !number) {
      playAnim();
      errorNotifier({errorStatus: 'notFillingError'});
    }else {
     const response = await axios({
        url: `/user/sign-in`,
        method: 'POST',
        body: {
          password: password,
          phoneNumber: `+998${number}`
        }
      });
      
      if(response?.response?.status >= 400){
        return errorNotifier({ errorStatus: response?.response?.status });
      }
        
        // setting token on the local storage
        const {token} = response.data.data;
        localStorage.setItem("token", token);
    }
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
        />
        <Wrapper.Button warningAnimation = {warningAnimation} onClick={onAuth}>Login</Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login






