var ActionButtons = React.createClass({
  render: function() {
    return(
      <div className='col-md-4'>
        <div className={'panel panel-' + this.props.type}>
          <div className='panel-heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
						{
							this.props.btns.map(function(element, i){
								return <DynaButton key={i} data={element}/>
							})
						}
						{/*console.log(this.props.btns)*/}
          </div>
        </div>
      </div>
    );
  }
});

var DynaButton = React.createClass({
	
	render: function(){
		
		var buttonSpaceStyle  = {
			paddingBottom: 10
		}
		
		return <div style={buttonSpaceStyle}><a className='btn btn-primary' data-toggle="modal" data-target={this.props.data.model_id} >{this.props.data.name}</a></div>
	}
})