var Departments = React.createClass({
  getInitialState: function() {
    return { departments: this.props.data };
  },

  getDefaultProps: function() {
    return { departments: [] };
  },
	
  addRecord: function(department) {
     var departments = React.addons.update(this.state.departments, { $push: [department] })
     this.setState({ departments: departments });
   },
	
	setButtons: function(){
		var obj =[{name: "Add Department", url: "/newDepartmet", model_id:"#AddModal"}]
		return obj;
	},
  
  render: function() {
    return(
      <div className='departments'>
        <h2 className='title'>
          Departments
        </h2>
				<div className='row'>
          <ActionButtons type='success' btns={this.setButtons()} text='Module Menus' />
        </div>
						 <DepartmentDataTable data={this.state.departments}/>
			 <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			 	<div className="modal-dialog" role="document">
			 		<div className="modal-content">
			 			<div className="modal-header">
			 				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			 				<h4 className="modal-title" id="myModalLabel">Form</h4>
			 			</div>
			 			<div className="modal-body">
			 				<div className="box-body">
						 		<NewFormElement handleNewRecord={this.addRecord} />         												 
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
