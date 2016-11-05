var DepartmentDataTable = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleToggle: function(e) {
    e.preventDefault();
    //this.setState({ edit: !this.state.edit });
  },
	
	actionButtonFormatter: function (cell, row) {
	                return <label>
													<span style={{"paddingRight" : 10, "cursor" : "pointer"}} className="fa fa-eye" aria-hidden="true" onClick={this.viewDepartment}></span>
	                			  <span style={{"cursor" : "pointer"}} className="fa fa-times" aria-hidden="true"></span> 
												</label>
	 },
	 
	 viewDepartment: function(staff){
	 	console.log("viewDepartment")
	 },

  recordRow: function() {
    return(   
			<BootstrapTable data={this.props.data} striped={true} hover={true} condensed={true} pagination={true} search={true} paginationShowsTotal={true}>
			      <TableHeaderColumn dataField="id" isKey={true} dataSort={true} hidden={true}>ID</TableHeaderColumn>
						<TableHeaderColumn dataField="department_name" dataSort={true}>Department Name </TableHeaderColumn>
      			<TableHeaderColumn dataField="intercom_number" dataSort={true} width="70">Ext. Number</TableHeaderColumn>
      			<TableHeaderColumn dataField="external_number" >Direct Line</TableHeaderColumn>
						<TableHeaderColumn dataField="description" >Description</TableHeaderColumn>
						<TableHeaderColumn dataFormat={this.actionButtonFormatter}>Actions</TableHeaderColumn>
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
