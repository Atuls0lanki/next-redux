import React from "react";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux/Store";

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    ({ preview }) => {
      store.dispatch({
        type: "TICK",
        payload: "was set in other page " + preview,
      });
    }
);

// you can also use `connect()` instead of hooks
const Page = () => {
  const { tick } = useSelector((state) => state);
  return <div>{tick}</div>;
};

export default Page;
