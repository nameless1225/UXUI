import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Segment,Grid, Icon,Button } from 'semantic-ui-react';
import Popup from "../PopUp/Popup";

function InvoiceCard(props) {
    const { status, color } = props

    return (
        <Popup>
        <Card fluid>
            <Card.Content>
                <Segment basic padded='very'>
                <Grid columns={3} textAlign='center' verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header color='grey' as='h3'>
                                Invoice #F-0000011
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3'>
                                <Icon name='calendar alternate outline' />
                                Due on 24 March, 2021
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h3'>
                                <Icon name='address card outline' />
                                Diego Mamani Aguilar
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group size='huge'>
                                <Button>2800</Button>
                                <Button.Or text='$' />
                                <Button color={color}>{status}</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
            </Card.Content>
        </Card>
        </Popup>
    )
}

InvoiceCard.propTypes = {

}

export default InvoiceCard
