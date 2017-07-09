import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, reduxForm, Field, handleSubmit } from 'redux-form'
import { TextField } from 'redux-form-material-ui'


class AddCrushField extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(values => this.props.onSubmit(values))}>
        <Field
          style={{
            width:' calc(100% - 10px)',
            whiteSpace:' nowrap',
            overflow:' hidden',
            textOverflow:' ellipsis',
            boxSizing:' border-box',
            marginLeft:' 10px',
          }}
          floatingLabelText="Paste your crush About-URL here"
          floatingLabelFocusStyle={{color: '#c33c3c'}}
          floatingLabelStyle={{
            fontSize: '16px',
          fontWeight: '500'}}
          underlineFocusStyle={{borderColor: '#c33c3c'}}
          name="crushUrl"
          component={TextField}
        />
      </Form>
    )
  }
}

// Decorate with redux-form
AddCrushField = reduxForm({
  form: 'addCrushForm'
})(AddCrushField)

export default AddCrushField
