import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 10%;
  height: 70px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

Wrapper.Title = styled.div``;

Wrapper.Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: #f56901;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export {Wrapper};