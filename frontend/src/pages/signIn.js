import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import {Card, BtnL} from './styles'

const FormPage = () => {
  return (
    <Card>

    <MDBContainer>
      <MDBRow>
        <MDBCol >
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                />
            </div>
            <div className="text-center">
              <BtnL style={{}}>Sign In</BtnL>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                </Card>
  );
};

export default FormPage;