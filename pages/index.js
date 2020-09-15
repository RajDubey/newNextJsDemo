import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Price from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div> 
            <h1>Welcome Raj to AyvaShopping </h1>
            <strong>{props.data.time.updated}</strong>
            <br></br>
            <p>Check Current bitcoin rates</p>
            <Price bpi={props.data}></Price>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
         data
    };
}

export default Index;