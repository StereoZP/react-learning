import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const[posts, setPosts] = useState([
    {id:1, title:"Javascript", body:"222"},
    {id:2, title:"Python", body:"111"},
    {id:3, title:"C++", body:"333"},
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
  setPosts([...posts, newPost])
}
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort);
      console.log(sort);

  }

  return (
    <div className="App">
        <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
          <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Select"
              options={[
                    {value: 'title', name:'Name'},
                    {value: 'body', name:'Description'},
            ]}
          />
      </div>
      {posts.length
          ?
          <PostList remove={removePost} posts={posts} title="JS list"/>
          :
          <h1 style={{textAlign: 'center'}}>
            Posts not find
          </h1>
      }
        <div>
            <button>New post</button>
        </div>
    </div>

  );
}

export default App;
