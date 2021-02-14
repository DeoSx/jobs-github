import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 3rem;
  margin: 0 auto;
  max-width: 1170px;
`

export const HeaderBlock = styled.header`
  padding: 32px 0;
  font-size: 24px;
  a {
    text-decoration: none;
    color: #282538;
  }
`
export const Btn = styled.button`
  background-color: #1e86ff;
  border-radius: 4px;
  width: 146px;
  height: 47px;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  &:hover {
    background-color: #2f3b57;
  }
`

export const Hero = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('http://hotwalls.ru/thumbnails/lg/nochnoy_los_andzheles.jpg');
  background-position: center;
  border-radius: 8px;
`

export const StyledInput = styled.input`
  padding: 0 17px;
  width: 790px;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
`

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  button {
    position: absolute;
    top: 50%;
    height: 90%;
    right: 4px;
    transform: translateY(-50%);
  }
`

export const StyledLabel = styled.span`
  padding: 6px 8px;
  display: block;
  color: #334680;
  font-size: 12px;
  border: 1px solid #334680;
  border-radius: 4px;
  width: max-content;
`

export const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #334680;
`
