import { useRef, useState } from 'react';
import {Wrapper} from './style';
import { notification } from 'antd';
import axios from 'axios';

const Login = () => {
  const [warningAnimation, setWarningAnimation] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();
  
  const playAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  }
  
  const onAuth = () => {
    const number = numberRef.current.input.value;
    const password = passwordRef.current.input.value;
    if(!password || !number) {
      playAnim();
      notification.error({
        message: 'Please fill all fields'
      })
    }else {
      axios({
        url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
        method: 'POST',
        data: {
          password: password,
          phoneNumber: `+998${number}`
        }
      }).then((res)=>{
          console.log(res);
      });
      
      console.log({
        number: numberRef.current.input.value,
        password: passwordRef.current.input.value,
      });
    }
      
  }
  
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






