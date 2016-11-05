var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var AppMainView = React.createClass({
  render: function() {
    return (
      <div>
			{this.props.children}
      </div>
    );
  }
});