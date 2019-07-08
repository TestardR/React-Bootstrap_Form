import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import BaseLayout from "../layout/BaseLayout";
import { Container } from "@material-ui/core";

class AddAplication extends Component {
  state = {
    name: "",
    description: "",
    icon: "",
    url: "",
    bot_name: "",
    commands: [],
    errors: {}
  };

  render() {
    const {
      name,
      description,
      icon,
      url,
      bot_name,
      commands,
      errors
    } = this.state;
    return (
      <BaseLayout>
        <Container>
          <h1 className="AddApplicationTitle">Add Application</h1>
          <form className="AddApplicationWrapper">
            <h2 className="AddApplicationGroupName card-header">General</h2>
            <div className="card-body">
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter name"
                value={name}
                error={errors.name}
              />
              <TextInputGroup
                label="Description"
                name="description"
                placeholder="Enter description"
                value={description}
                error={errors.description}
              />
              <TextInputGroup
                label="Icon"
                name="icon"
                placeholder="Enter icon"
                value={icon}
                error={errors.icon}
              />
            </div>
            <h2 className="AddApplicationGroupName card-header headerFix">
              GUI
            </h2>
            <div className="card-body">
              <TextInputGroup
                label="Url"
                name="url"
                placeholder="Enter url"
                value={url}
                error={errors.url}
              />
            </div>
            <h2 className="AddApplicationGroupName card-header headerFix">
              Bot
            </h2>
            <div className="card-body">
              <TextInputGroup
                label="Bot name"
                name="bot_name"
                placeholder="Enter Bot name"
                value={bot_name}
                error={errors.bot_name}
              />
              <TextInputGroup
                label="Commands"
                name="commands"
                placeholder="Enter commands"
                value={commands}
                error={errors.commands}
              />

              <input
                type="submit"
                value="Add Application"
                className="btn btn-block AddApplicationButton"
                style={{ marginBot: "1rem" }}
              />
            </div>
          </form>
        </Container>
      </BaseLayout>
    );
  }
}

export default AddAplication;
