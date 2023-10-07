import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Mucho está ocurriendo, <br /> lo estamos blogueando.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 y OpenAI son el futuro. Vamos a explorar cómo es." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 y OpenAI son el futuro. Vamos a explorar cómo es." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 y OpenAI son el futuro. Vamos a explorar cómo es." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 y OpenAI son el futuro. Vamos a explorar cómo es." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 y OpenAI son el futuro. Vamos a explorar cómo es." />
      </div>
    </div>
  </div>
);

export default Blog;
