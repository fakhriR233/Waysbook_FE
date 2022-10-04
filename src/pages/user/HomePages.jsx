import React from "react";
import HomeBookBanner from "../../components/Banner/HomeBookBanner";
import TextBanner from "../../components/Banner/TextBanner";
import ListBook from "../../components/ListBook/ListBook";

const HomePages = () => {
  const title = "Home";
  document.title = "Waysbook | " + title;
  return (
    <div>
      <header className="App-header">
        <div className="mt-32 text-center">
          <TextBanner />
        </div>
        <div className="my-10">
          <HomeBookBanner />
        </div>
        <div className="bg-slate-200 px-10">
          <ListBook />
        </div>
      </header>
    </div>
  );
};

export default HomePages;
