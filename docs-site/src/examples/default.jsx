import React from "react";
import DatePicker from "react-datepicker";

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("2019-01-01")
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
    inline
    selected={this.state.startDate}
    onChange={this.handleChange}
    doctorSlots=[
              {
                color: 'blue',
                date: new Date('2019-01-24'),
              },
              {
                color: 'blue',
                date: new Date('2019-01-16'),
              },
              {
                color: 'blue',
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
            todayButton={"heute"}
            inline
            selected={this.state.startDate}
            onChange={this.handleChange}
            doctorSlots={[
              {
                color: [0, 0, 255],
                date: new Date("2019-01-24")
              },
              {
                color: [0, 0, 255],
                date: new Date("2019-01-16")
              },
              {
                color: [0, 0, 255],
                date: new Date("2019-01-16")
              },
              {
                color: [255, 0, 0],
                date: new Date("2019-01-16")
              },
              {
                color: [255, 0, 0],
                date: new Date("2019-01-03")
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
