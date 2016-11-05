var ViewStaff = React.createClass({
  getInitialState: function() {
    return { staff: this.props.data };
  },

  getDefaultProps: function() {
    return { staff: [] };
  },
	
	render: function(){
		return (
			<div>
				<div>staff view ousman</div>
			</div>
		);
	}
});