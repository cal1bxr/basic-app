import { useState } from 'react';
const StatePlayground = () => {
  let initialCount = 0;
  let [count, setCount] = useState(initialCount);
  let [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Super Awesome Hooks',
      body: 'Everything is Awesome',
    },
  ]);

  const addOne = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  const addOnePost = () => {
    let newPost = {
      id: '2',
      title: 'React is Great',
      body: 'New learning experience',
    };

    setPosts((prevPost) => [...prevPost, newPost]);
  };

  // const redOne = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // const reset = () => {
  //   setCount(initialCount);
  // };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add one</button>
      {/* <button onClick={redOne}>Reduce one</button>
      <button onClick={reset}>Reset Count</button> */}
      <hr />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        );
      })}

      <button onClick={addOnePost}>Add a post</button>
    </div>
  );
};

export default StatePlayground;
