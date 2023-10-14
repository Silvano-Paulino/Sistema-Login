import { useState } from 'react';
import axios from "axios";

function Login () {

    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [user, setUser]   = useState(null);


    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, senha);

        try {
          const response = await axios.post("http://localhost:3000/login", 
            JSON.stringify({email, senha}),
            {
              headers: {"Content-Type": "application/json"}
            }
          );

          setError("")
          setUser(response.data);

        }catch(error) {

          if(!error?.response) {
            setError("Erro ao acessar o servidor.");

          }else if(error.response.status == 401) {
            setError("Usuário ou senha inválidos!");
          }
        }
    }

    const handleLogout = async (e) => {
      e.preventDefault();

      setUser(null);
    }

    return(
      <div className='login-form-wrap'>
        {user == null ? (
        <div>
          <h2>Login</h2>
          <form className='login-form'>
            <input type='email' name='email' placeholder='E-mail..' onChange={(e) => setEmail(e.target.value)} required />
            <input type='password' name='senha' placeholder='Senha..' onChange={(e) => setSenha(e.target.value)} required />
            <button type='submit' onClick={(e) => handleLogin(e)} className='btn-login'>Login</button>
            <p> {error} </p>
          </form>
        </div>
        ) : (
          <div className='user'>
            <h2>Olá, {user.nome} </h2>
            <button type='submit' className='btn-login' onClick={(e) => handleLogout(e)}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  export default Login;