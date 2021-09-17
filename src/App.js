import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductFeature from "./features/Product/index";
import Header from "./components/Header/index";
import TodoFeature from "./features/Todo/index";
import AlbumFeature from "./features/Album/index";
function App(props) {
  // const [posts, setPosts] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 11,
  // });
  // const [filter, setFilter] = useState({
  //   _page: 1,
  //   _limit: 10,
  // });
  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = queryString.stringify(filter);
  //       const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestURL);
  //       const responseJSON = await response.json();
  //       const { data, pagination } = responseJSON;
  //       console.log(data);
  //       setPosts(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("Failed fetch API: " + error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, [filter]);
  // function handlePageChange(newPage) {
  //   console.log("New Page: ", newPage);
  //   setFilter({
  //     ...filter,
  //     _page: newPage,
  //   });
  // }
  // function handleFilterChange(newFilters) {
  //   console.log("New Filters: ", newFilters);
  //   setFilter({
  //     ...filter,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProduct();
  // }, []);

  // const handleFormSubmit = (value) => {
  //   console.log("Form value: ", value);
  // };
  return (
    <div className="app">
      <Header />
      {/* <TodoForm onSubmit={handleFormSubmit} /> */}

      {/* <TodoFeature /> */}
      <ProductFeature />
      <Switch>
        {/* <Route path="/" component={CounterFeature} /> */}
        <Route path="/product" component={ProductFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      {/* <FilterForm onSubmit={handleFilterChange} />
      <PostList posts={posts} />
      <Pagination pagination={pagination} onHandleChange={handlePageChange} /> */}
    </div>
  );
}

export default App;
