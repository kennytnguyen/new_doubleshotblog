 
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
import blog_2 from "views/BlogPosts/2_FootballTech/2_Blog.js";
import blog_3 from "views/BlogPosts/3_ConcertsCommittee/3_Blog.js";
import blog_4 from "views/BlogPosts/4_FindingHappiness/1_Blog.js";
import blog_5 from "views/BlogPosts/5_FiniteTime/1_Blog.js";
import blog_6 from "views/BlogPosts/6_KernyStory/1_Blog.js";
import blog_7 from "views/BlogPosts/7_MyMusic/1_Blog.js";
import blog_8 from "views/BlogPosts/8_AskMeAnything/1_Blog.js";
import blog_9 from "views/BlogPosts/9_2019Review/9_Blog.js";

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
      <Route path="/entry_1_realization" component={blog_1} />
      <Route path="/entry_3_football_tech" component={blog_2} />
      <Route path="/entry_4_concerts" component={blog_3} />
      <Route path="/entry_5_happiness" component={blog_4} />
      <Route path="/entry_6_finite" component={blog_5} />
      <Route path="/kernyStory_internship" component={blog_6} />
      <Route path="/entry_7_music_v1" component={blog_7} />
      <Route path="/ama" component={blog_8} />
      <Route path="/2019Review" component={blog_9} />
      
      <Route path="/interests" component={Interests} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/about" component={AboutMe} />
      <Route path="/index" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
