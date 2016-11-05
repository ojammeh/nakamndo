var StaffList = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleToggle: function(e) {
    e.preventDefault();
    //this.setState({ edit: !this.state.edit });
  },

  recordRow: function() {
    return(
      <tr>
        <td>{this.props.staff_data.first_name}</td>
        <td>{this.props.staff_data.last_name}</td>
			  <td>{this.props.staff_data.staff_number}</td>
			  <td>{this.props.staff_data.department_id}</td>
        <td>
			<a href=""><span style={{"paddingRight" : 10}} className="fa fa-eye" aria-hidden="true"></span></a> 
			    <a href=""><span className="fa fa-times" aria-hidden="true"></span> </a>
        </td>
      </tr>
    );
  },

  renderedRecord: function() {
    if (this.state.edit === true) {
      //return this.recordForm();
    } else {
      return this.recordRow();
    }
  },
  
  render: function() {
    return this.renderedRecord();
  }
});
