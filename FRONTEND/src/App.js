import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import MoviePage from "./pages/MoviePage.js" //New
import MovieList from "./pages/MovieList.js" //New

// function App() {
//   return (
//     <div className="relative pb-10 min-h-screen">
//       <Router>
        
//         <Header />

//         <div className="p-3">
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/products/:id">
//             <Product />
//           </Route>
//         </Switch>
//         </div>

//         <Footer />

//       </Router>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
        <Router>
            <Header className="header relative " />
              <main className="p1 m-2">
                <Switch>
                      <Route exact path="/" component={MovieList} />
                      {// colon before slug means it is a dynamic value
                      // that makes slug parameter anything
                      // like: /movie/the-lighthouse-2019   or /movie/anything
                      // as long as slug matches with database.
                      }
                      <Route path="/movie/:slug" component={MoviePage} />
                  </Switch>
              </main>
              <div>
                <Footer />
              </div>

        </Router>

);
}
export default App;
