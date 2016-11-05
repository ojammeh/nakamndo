var NewFormElement = React.createClass({
	
	getInitialState: function() {
	    return { department_name: '',
	             intercom_number: '', 
		           external_number: '',
	             description: '' }
	  },
		
	  handleChange: function(e) {
	    var name = e.target.name;
	    var obj = {};
	    obj[name] = e.target.value;
	    this.setState(obj);
	  },
		
		valid: function() {
		    return (this.state.department_name && this.state.intercom_number && this.state.description);
		  },
			
		  handleSubmit: function(e) {
		    e.preventDefault();
		    $.post('',
		           { department: this.state },
		           function(data) {
		             this.props.handleNewRecord(data);
		             this.setState(this.getInitialState());
		           }.bind(this),
		           'JSON'
		    );
		  },
	
	render: function(){
		return (
          <div className="box box-primary">
								<div className="box-header with-border">
                  <h3 className="box-title">Add Department</h3>
 		 							<div className="box-tools pull-right">
                		<button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
              		</div>
                </div>
    				<div className='box-body'>		
							<form role='form' onSubmit={this.handleSubmit}>
				        <div className='form-group'>
									<label htmlFor="department_name">Department Name</label>
				          <input type='text' className='form-control'
				                 placeholder='Department Name' name='department_name'
				                 value={this.state.department_name} onChange={this.handleChange}>
				          </input>
				        </div>
				        <div className='form-group'>
									<label htmlFor="intercom_number">Internal Line</label>
				          <input type='number' className='form-control'
				                 placeholder='Internal Line' name='intercom_number'
				                 value={this.state.intercom_number} onChange={this.handleChange}>
				          </input>
				        </div>
				        <div className='form-group'>
									<label htmlFor="external_number">Direct Line</label>
				          <input type='number' className='form-control'
				                 placeholder='Direct Line' name='external_number'
				                 value={this.state.external_number} onChange={this.handleChange} >
				          </input>
				        </div>
				        <div className='form-group'>
									<label htmlFor="description">Description</label>
									<textarea className="form-control" rows="3" placeholder="Enter Description ..." name='description'
				                 value={this.state.description} onChange={this.handleChange}>
									</textarea>
				        </div>
				        <div className="box-footer">
				          <input type='submit' className='btn btn-primary' disabled={!this.valid()}></input>
				        </div>
				      </form>
          </div>
			</div>

		);
	}
	
})