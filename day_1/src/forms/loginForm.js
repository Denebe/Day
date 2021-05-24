import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../css/login.css'
import { signIn } from '../Auth/auth';

function LoginForm() {
  
  //userstate로 유저 관리
  const [user, setUser] = useState(null);
  //login안에 auth에 저장한 email, password를 setuser를 통해 넣어줌
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  //authenticated 변수 선언
  const authenticated = user != null;

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  //변수 안에 정보를 비교하여 auth유저정보와 setuser에 정보가 동일하면 다음 페이지로 이동
  const { from } = false || { from: { pathname: "/main" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className="container_1">
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
        className="input"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password" 
        className="input"
      />
      <button onClick={handleClick} className="button">로그인</button>

      <Link to="/register">
        <button className="button">회원가입</button>
      </Link>
      
    </div>
  );
}

export default LoginForm;