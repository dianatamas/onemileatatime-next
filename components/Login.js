import { colors, spacing } from '~/theme';

const Login = () => (
  <div className="card">
    <style jsx>
      {`
        .card {
            width: 300px;
            height: 300px;
            margin: ${spacing.xlarge} auto;
            background-color: ${colors.white};
        }
      `}
    </style>
  </div>
);

export default Login;
