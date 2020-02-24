 
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
// import ProfilePage from "views/Examples/ProfilePage/ProfilePage.js";
import SectionsPage from "views/Examples/SectionsPage/SectionsPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js"

// my pages
import Home from "views/Home/Home.js";
import Blogs from "views/Blogs/Blogs.js";
import AboutMe from "views/AboutMe/AboutMe.js";
import Interests from "views/Interests/Interests.js";

// my blogs
import blog_1 from "views/BlogPosts/1_SuddenRealization/1_Blog.js";
import blog_3 from "views/BlogPosts/3_ConcertsCommittee/3_Blog.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/sections" component={SectionsPage} />
      <Route path="/error" component={ErrorPage} />

      {/* Mine */}
      <Route path="/sudden_realization" component={blog_1} />
      <Route path="/concerts" component={blog_3} />
      
      <Route path="/interests" component={Interests} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
