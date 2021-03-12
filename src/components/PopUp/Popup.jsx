import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

function customPopup(props) {
    const { children } = props

    return (
        <Popup
            trigger={
                children
            }
            position='right center'
        >
            <Popup.Content>
                {`Want to see more?
                Just click on the card :)`}
            </Popup.Content>
        </Popup>
    );
}

customPopup.propTypes = {

}

export default customPopup
