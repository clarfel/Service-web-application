import React, { Component } from "react";
import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Edit your profile</h2>
        </header>
        <form action="/users" method="POST">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              value="{{ name }}"
            />
          </div>
          <div class="form-group">
            <label for="name">GitHub:</label>
            <input
              type="text"
              class="form-control"
              name="github"
              id="github"
              value="{{ github }}"
            />
          </div>
          <div class="form-group">
            <label for="name">phoneNumber:</label>
            <input
              type="tel"
              type="tel"
              pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
              class="form-control"
              name="phoneNumber"
              id="phoneNumber"
              value="{{ phoneNumber }}"
            />
          </div>
          <div>
            <ReactFlagsSelect searchable={true} />
          </div>
          <div class="form-group">
            <label for="name">Facebook:</label>
            <input
              type="text"
              class="form-control"
              name="facebook"
              id="facebook"
              value="{{ facebook }}"
            />
          </div>
          <button class="btn btn-primary">Update</button>
        </form>

        <p>
          <a href="/users/{{username}}" target="_blank">
            View your profile
          </a>
        </p>
      </div>
    );
  }
}
export default Profile;
