import React from "react";
import DatePicker from "react-datepicker";

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  getDoctorAppointments = () => {
    return [
      {
        color: "appointment-green"
      },
      {
        color: "appointment-purple"
      }
    ];
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}
    doctorSlots=[
              {
                color: 'olive',
                date: new Date('2019-01-24'),
              },
              {
                color: 'olive',
                date: new Date('2019-01-16'),
              },
              {
                color: 'pink',
                date: new Date('2019-01-16'),
              },
              {
                color: 'pink',
                date: new Date('2019-01-03'),
              },
            ]
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            doctorSlots={[
              {
                color: "olive",
                date: new Date("2019-01-24")
              },
              {
                color: "olive",
                date: new Date("2019-01-16")
              },
              {
                color: "pink",
                date: new Date("2019-01-16")
              },
              {
                color: "pink",
                date: new Date("2019-01-03")
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
