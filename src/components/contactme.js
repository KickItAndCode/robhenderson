import React, { Component } from "react"
import { validate } from "../components/ui/misc"
import FormField from "./ui/formFields"

export default class ContactMe extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "name",
          placeholder: "Your name",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
      subject: {
        element: "input",
        value: "",
        config: {
          name: "subject_input",
          type: "subject",
          placeholder: "Subject",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
      message: {
        element: "input",
        value: "",
        config: {
          name: "message_input",
          type: "message",
          placeholder: "Your Message",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  }

  updateForm(element) {
    const newFormdata = { ...this.state.formdata }
    const newElement = { ...newFormdata[element.id] }

    newElement.value = element.event.target.value

    let validData = validate(newElement)
    newElement.valid = validData[0]
    newElement.validationMessage = validData[1]

    newFormdata[element.id] = newElement

    this.setState({
      formError: false,
      formdata: newFormdata,
    })
  }

  submitForm(event) {
    //event.preventDefault()

    let dataToSubmit = {}
    let formIsValid = true

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value
      formIsValid = this.state.formdata[key].valid && formIsValid
    }

    if (formIsValid) {
        this.setState({formError: false})
      // Send email
    //   const data = new FormData(event.target)

    //   fetch(
    //     "https://formcarry.com/s/EBgInH2MbfG",

    //     {
    //       mode: "no-cors",
    //       method: "POST",
    //       body: data,
    //       headers: {
    //         'accept':"text/html",
    //         'Content-Type': "application/json"
    //       },
    //       //   headers: {
    //       //     "Content-Type": "application/json",
    //       //     // "Content-Type": "application/x-www-form-urlencoded",
    //       //   },
    //     }
    //   )
    // } else {
      // update error

      this.setState({
        formError: true,
      })
    }
  }

  render() {
    return (
      <div className="contactme_container">
        <div className="contactme_wrapper" >
          <form
            action="https://formcarry.com/s/EBgInH2MbfG"
            method="post"
            onSubmit={event => this.submitForm(event)}
          >
            <h2>Contact Me</h2>
            <h5>Lets connect!</h5>
            <FormField
              id={"name"}
              formdata={this.state.formdata.name}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"subject"}
              formdata={this.state.formdata.subject}
              change={element => this.updateForm(element)}
            />

            <FormField
              id={"message"}
              formdata={this.state.formdata.message}
              change={element => this.updateForm(element)}
            />

            <div className="col-lg-12 text-center">
              {this.state.formError ? (
                <div className="error_label">
                  Something is wrong, try again.
                </div>
              ) : null}

              {/* <button
                className="submit_button"
                onClick={event => this.submitForm(event)}
              >
                Send Message
              </button> */}
              <input className="submit_button" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
