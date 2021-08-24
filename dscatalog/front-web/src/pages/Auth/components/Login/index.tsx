import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss';
import { useForm } from 'react-hook-form';

type FormData = {
  email?: string;
  password?: string;
};

function Login() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // chamar API de autenticação
  };

  return (
    <div>
      <AuthCard title="Login">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="form-control input-base margin-bottom-30"
            placeholder="Email"
            name="email"
            ref={register}
          />
          <input
            type="password"
            className="form-control input-base"
            placeholder="Senha"
            name="password"
            ref={register}
          />
          <Link to="/admin/auth/recover" className="login-link-recover">
            Esqueci a senha
          </Link>
          <div className="login-submit">
            <ButtonIcon text="Entrar" />
          </div>
          <div className="text-center">
            <span className="not-registered">Não tem cadastro?</span>
            <Link to="/admin/auth/register" className="login-link-register">
              CADASTRAR
            </Link>
          </div>
        </form>
      </AuthCard>
    </div>
  );
}

export default Login;
