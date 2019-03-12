import React, { Component } from "react";
import { withFirestore } from "react-redux-firebase";
import FileUploader from "react-firebase-file-uploader";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { TabInfo } from "./tabs";
import { Container, Row, Col, Table, Button as BSButton } from "reactstrap";
import { Button, Input } from "components/_Common";

import "react-tabs/style/react-tabs.css";

const collections = TabInfo.map(tab => tab.ref.collection);

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // this.props.firebase.auth().signInAnonymously();
    const { inputs } = TabInfo[0];
    this.resetFormData(inputs);
  }

  handleUploadStart = valueKey => () =>
    this.setState({
      [`isUploading.${valueKey}`]: true,
      [`progress.${valueKey}`]: 0
    });
  handleProgress = valueKey => progress =>
    this.setState({ [`progress.${valueKey}`]: progress });
  handleUploadError = valueKey => () =>
    this.setState({ [`isUploading.${valueKey}`]: false });
  handleUploadSuccess = (valueKey, ref) => filename => {
    this.setState({
      [`progress.${valueKey}`]: 100,
      [`isUploading.${valueKey}`]: false
    });
    this.props.firebase
      .storage()
      .ref(ref)
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ [`imgURL.${valueKey}`]: url }));
  };

  handleTabChange = tabIndex => {
    const { inputs } = TabInfo[tabIndex];
    this.resetFormData(inputs);
  };

  resetFormData = (inputs, parent = null) => {
    const { state } = this;
    inputs.forEach(({ key, type, childs }) => {
      const valueKey = parent ? `${parent}.${key}` : key;
      switch (type) {
        case "Input":
        case "Link":
        case "Text":
          state[valueKey] = "";
          break;
        case "Image":
          state[`imgURL.${valueKey}`] = "";
          break;
        case "CheckBox":
          state[valueKey] = false;
          break;
        case "Parent":
          this.resetFormData(childs, valueKey);
          break;
      }
    });
    this.setState(state);
  };

  handleSubmit = tabIndex => {
    const {
      ref: { collection }
    } = TabInfo[tabIndex];
    return () => {
      const data = this.getFormData(tabIndex);
      this.props.firestore
        .collection(collection)
        .add(data)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    };
  };

  getFormData = tabIndex => {
    const { inputs } = TabInfo[tabIndex];
    return this.getStateData(inputs);
  };

  getStateData = (inputs, parent = null) => {
    const data = {};
    inputs.forEach(({ key, type, childs }) => {
      const valueKey = parent ? `${parent}.${key}` : key;
      switch (type) {
        case "Input":
        case "Link":
        case "Text":
          data[valueKey] = this.state[valueKey];
          break;
        case "Image":
          data[valueKey] = this.state[`imgURL.${valueKey}`];
          break;
        case "CheckBox":
          data[valueKey] = this.state[valueKey];
          break;
        case "Parent":
          data[valueKey] = this.getStateData(childs, valueKey);
          break;
      }
    });
    return data;
  };

  renderInput = ({ key, type }, ref, parent = null) => {
    const { firebase } = this.props;
    const valueKey = parent ? `${parent}.${key}` : key;
    let elem = null;
    switch (type) {
      case "Input":
      case "Link":
        elem = (
          <Input
            required
            placeholder={valueKey}
            white
            value={this.state[valueKey]}
            onChange={e => {
              this.setState({ [valueKey]: e.target.value });
            }}
          />
        );
        break;
      case "Text":
        elem = (
          <Input
            required
            placeholder={valueKey}
            white
            textarea
            value={this.state[valueKey]}
            onChange={e => {
              this.setState({ [valueKey]: e.target.value });
            }}
          />
        );
        break;
      case "CheckBox":
        elem = (
          <label>
            <input
              type="checkbox"
              checked={this.state[valueKey]}
              onChange={e => {
                this.setState({ [valueKey]: !this.state[valueKey] });
              }}
            />
            Is Executive?
          </label>
        );
        break;
      case "Image":
        elem = (
          <div className="ImageUpload">
            <h5>{valueKey}</h5>
            {this.state[`isUploading.${valueKey}`] && (
              <p>Progress: {this.state[`progress.${valueKey}`]}</p>
            )}
            {this.state[`imgURL.${valueKey}`] && (
              <img src={this.state[`imgURL.${valueKey}`]} />
            )}
            <FileUploader
              accept="image/*"
              randomizeFilename
              storageRef={firebase.storage().ref(ref.storage)}
              onUploadStart={this.handleUploadStart(valueKey)}
              onUploadError={this.handleUploadError(valueKey)}
              onUploadSuccess={this.handleUploadSuccess(valueKey, ref.storage)}
              onProgress={this.handleProgress(valueKey)}
            />
          </div>
        );
        break;
    }
    return elem;
  };

  render() {
    const { database } = this.props;
    return (
      <div className="AdminWrapper">
        <Tabs onSelect={this.handleTabChange}>
          <TabList>
            {TabInfo.map(({ label }, index) => (
              <Tab key={index}>{label}</Tab>
            ))}
          </TabList>

          {TabInfo.map(({ label, ref, inputs }, index) => (
            <TabPanel key={index}>
              <Container>
                <h1>{label}</h1>
                {inputs.map((input, iIndex) => (
                  <Row key={iIndex}>
                    <Col>
                      {input.type !== "Parent" ? (
                        this.renderInput(input, ref)
                      ) : (
                        <div>
                          <h3>{input.label}</h3>
                          {input.childs.map((child, cIndex) => (
                            <Row key={cIndex}>
                              <Col>
                                {this.renderInput(child, ref, input.key)}
                              </Col>
                            </Row>
                          ))}
                        </div>
                      )}
                    </Col>
                  </Row>
                ))}
                <Button label="Submit" onClick={this.handleSubmit(index)} />
                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          <th>#</th>
                          {inputs.map((input, hIndex) =>
                            input.type === "Parent" ? null : (
                              <th key={hIndex}>{input.label || input.key}</th>
                            )
                          )}
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {(database[TabInfo[index].ref.collection] || []).map(
                          (item, itemIndex) => (
                            <tr key={itemIndex}>
                              <th scope="row">{itemIndex + 1}</th>
                              {inputs.map((input, hIndex) =>
                                input.type === "Parent" ? null : (
                                  <td key={hIndex}>
                                    {input.type === "Image" ? (
                                      <img src={item[input.key]} />
                                    ) : (
                                      <div>{item[input.key]}</div>
                                    )}
                                  </td>
                                )
                              )}
                              <td>
                                <BSButton close />
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default withFirestore(Admin);
