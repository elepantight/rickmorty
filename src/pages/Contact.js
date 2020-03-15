import React, { Component } from "react";



export default class Contact extends Component {
    state = {
      Firstname: "",
      Surname: "",
      Email: "",
      Message: "",
      FirstnameError: true,
      LastnameError: true,
      EmailError: true,
      MessageError: true
    };
  
    handleChange = input => {
      let name = input.target.name;
      let value = input.target.value;
      let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
      switch (name) {
        case "Firstname":
          value !== ""
            ? this.setState({ FirstnameError: false })
            : this.setState({ FirstnameError: true });
          break;
        case "Lastname":
          value !== ""
            ? this.setState({ LastnameError: false })
            : this.setState({ LastnameError: true });
          break;
        case "Email":
          emailPattern.test(value)
            ? this.setState({ EmailError: false })
            : this.setState({ EmailError: true });
          break;
        case "Message":
          value !== ""
            ? this.setState({ MessageError: false })
            : this.setState({ MessageError: true });
          break;
        default:
          break;
      }
      this.setState({
        [name]: value
      });
    };

    render() {
        const {
          FirstnameError,
          LastnameError,
          EmailError,
          MessageError
        } = this.state;
        return (
          <div className="row contact-row">
            <div className="col-sm-6 contact">
              <h1 className="contact-header">Contact Form</h1>
              <form className="contact-form" onSubmit={this.handleSubmit}>
                <p className="contact-p">Enter your firstname</p>
                <input
                  type="text"
                  name="Firstname"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <p className={FirstnameError ? "error" : "error__hide"}>
                  {" "}
                  Please enter firstName{" "}
                </p>
                <br />
                <p className="contact-p">Enter your last name</p>
                <input
                  type="text"
                  name="Lastname"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <p className={LastnameError ? "error" : "error__hide"}>
                  Error on Lastname{" "}
                </p>
                <br />
                <p className="contact-p">Enter email address</p>
                <input
                  type="text"
                  name="Email"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <p className={EmailError ? "error" : "error__hide"}>
                  Error on Email{" "}
                </p>
                <br />
                <p className="contact-p">Write Us a Message</p>
                <textarea
                  name="Message"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <p className={MessageError ? "error" : "error__hide"}>
                  Error on Message
                </p>
                <br />
                <input
                  type="submit"
                  disabled={
                    FirstnameError || LastnameError || EmailError || MessageError
                  }
                  className="btn-contact"
                />
              </form>
            </div>
          </div>
        );
      }
    }