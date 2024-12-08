import React from "react";
import Header from "../../components/home/header";
import Showcase from "../../components/home/showcase";
import Cardlar from "../../components/home/cardlar";
import Smart from "../../components/home/smart";
import Products from "../../components/home/products";
import Salares from "../../components/home/salares";
import Brandes from "../../components/home/brandes";
import Blogs from "../../components/home/blogs";
import Footer from "../../components/home/footer";

function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Cardlar />
      <Smart />
      <Products />
      <Salares />
      <Brandes />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
