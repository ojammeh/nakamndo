var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;
		
var StaffDataTable = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleToggle: function(e) {
    e.preventDefault();
    //this.setState({ edit: !this.state.edit });
  },
	
	navigate: function(){
		console.log(this.props);
	},
	
	actionButtonFormatter: function (cell, row) {
		return <label>
							<span 
								style={
									{"paddingRight" : 10, "cursor" : "pointer"}
								}
								className="fa fa-eye"
								aria-hidden="true"
							><Link to='/staffview'>Show</Link>
							</span>
							<span style={{"cursor" : "pointer"}} className="fa fa-times" aria-hidden="true"></span> 
					</label>
	 },
	 
	 viewStaff: function(staff){
	 	console.log("viewStaff")
	 },

  recordRow: function() {
    return(   
			<BootstrapTable data={this.props.data} striped={true} hover={true} condensed={true} pagination={true} search={true} paginationShowsTotal={true}>
			      <TableHeaderColumn dataField="id" isKey={true} dataSort={true} hidden={true}>ID</TableHeaderColumn>
						<TableHeaderColumn dataField="first_name" dataSort={true}>First Name </TableHeaderColumn>
      			<TableHeaderColumn dataField="last_name" dataSort={true} >Last Name</TableHeaderColumn>
      			<TableHeaderColumn dataField="staff_number" width="70">Staff #</TableHeaderColumn>
						<TableHeaderColumn dataField="department_id" >Department</TableHeaderColumn>
						<TableHeaderColumn dataFormat={this.actionButtonFormatter} width="90">Actions</TableHeaderColumn>
  				</BootstrapTable>
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
