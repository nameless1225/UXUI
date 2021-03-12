import './App.css';
import { Button, Container, Header, Segment, Dropdown, Pagination, Icon } from 'semantic-ui-react';
import InvoiceCard from './components/InvoiceCard/InvoiceCard';

const options = [
  { key: 'all', text: 'Show All', value: 'all' },
  { key: 'pending', text: 'Pending', value: 'pending' },
  { key: 'paid', text: 'Paid', value: 'paid' },
  { key: 'over due', text: 'Over Due', value: 'over due' },
  { key: 'cancelled', text: 'Cancelled', value: 'cancelled' },
]

function App() {
  return (
    <Segment padded='very'>
      <Container>
        <Header as='h1'>
          Invoices
          <Header.Subheader>
            Showing 4 Invoices of 50
          </Header.Subheader>
        </Header>

        <Container textAlign='right'>
          <Dropdown
          icon='filter'
          placeholder='Filter by State'
          search
          selection
          options={options} />
          <Button color='facebook' floated='right'>New Invoice</Button>
        </Container>
        <InvoiceCard
        status={"Paid"}
        color={'green'}
        />
        <InvoiceCard
        status={"Pending"}
        color={'yellow'}
        />
        <InvoiceCard
        status={"Over Due"}
        color={'red'}
        />
        <InvoiceCard
        status={"Cancelled"}
        color={'gray'}
        />
        <Segment textAlign='center' basic>
          <Pagination
            defaultActivePage={5}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={10}
          />
        </Segment>
      </Container>
    </Segment>
  );
}

export default App;
