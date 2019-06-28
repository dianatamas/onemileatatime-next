import Layout from '~components/Layout';

import Login from '~components/Login';

import { colors } from '~/theme';

export default function Blog() {
  return (
    <Layout>
      <div className="content">
        <Login />
      </div>
      <style jsx>
        {`
          .content {
              background-color: ${colors.primary};
              height: 100%;
          }
        `}
      </style>
    </Layout>
  );
}
