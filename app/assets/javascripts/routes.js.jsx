var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;
    Router = ReactRouter.Router;

this.MyRoutes = (
 <Router handler={AppMainView}>
    <Route path='/' component={AppMainView}>
      <Route path='staffview/:id' component={ViewStaff} />
      <Route path="staffview" component={ViewStaff}/>  
    </Route>
 </Router>
  );