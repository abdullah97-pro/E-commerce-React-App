import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from "./pages/Home";
// import Product from "./pages/Product";
import React, {Suspense} from 'react';

const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/product/:id" element = {<Product />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
