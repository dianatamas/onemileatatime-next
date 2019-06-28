import Layout from '~components/Layout';
import { colors } from '~/theme';

export default function Blog() {
    return (
        <Layout>
          <div className="header">
            </div>
            <div className="content">
                <div className="card"></div>
            </div>
            <style jsx>{`
                .header {
                    background-color: ${colors.primary};
                    height: 300px;
                }

                .content {
                    height: 300px;
                }

                .card {
                    height: 150px;
                    width: 150px;
                    background-color: white;
                    margin-left: 60px;
                    margin-top: -30px;
                    box-shadow: 4px 4px 4px lightgray;
                    color: black;
                }

                .navBar {
                    height: 30px;
                    background-color: white;
                }
            `}</style>


    </Layout>
    );
        
            
}
