
var Staffs = React.createClass({
  getInitialState: function() {
    return { staffs: this.props.data };
  },

  getDefaultProps: function() {
    return { staffs: [] };
  },
	
  addRecord: function(staff) {
     var staffs = React.addons.update(this.state.staffs, { $push: [staff] })
     this.setState({ staffs: staffs });
   },
	
	setButtons: function(){
		var obj =[{name: "New Staff", url: "/newStaff", model_id:"#AddModal"},{name: "New Department", url: "/path_department_new", model_id:"#AddModal"}]
		return obj;
	},
  
  render: function() {
    return(
      <div className='staffs'>
        <h2 className='title'>
          Staff List
        </h2>
				<div className='row'>
          <ActionButtons type='success' btns={this.setButtons()} text='Module Menus' />
        </div>
				<StaffDataTable data={this.state.staffs} />
			 <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			 	<div className="modal-dialog" role="document">
			 		<div className="modal-content">
			 			<div className="modal-header">
			 				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			 				<h4 className="modal-title" id="myModalLabel">Add New Staff</h4>
			 			</div>
			 			<div className="modal-body">
			 				<div className="box-body">
						 		Forms Here      												 
			 				</div>
			 			</div>
			 			<div className="modal-footer">
			 				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			 			</div>
			 		</div>
			 	</div>
			 </div>
			</div>
    );
  }
});
