 
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import AboutUsPage from "views/Examples/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/Examples/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/Examples/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/Examples/ComponentsPage/ComponentsPage.js";
import ProfilePage from "views/Examples/ProfilePage/ProfilePage.js";
import SectionsPage from "views/Examples/SectionsPage/SectionsPage.js";
import MyExamples from "views/Examples/MyExamples/MyExamples.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js"

// my pages
import HomePage from "views/HomePage/HomePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/MyExamples" component={MyExamples} />
      <Route path="/error" component={ErrorPage} />

      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
