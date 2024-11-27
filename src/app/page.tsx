"use client";

import { Form } from "./Form/Form";
import { NoItemsOnList } from "./NoItemsOnList/NoItemsOnList";

export default function Home() {
  return (
    <>
      <div className="m-2">
        <NoItemsOnList />
      </div>
      <div className="bg-[#fff] rounded-lg border-solid border m-2 p-6">
        <Form />
      </div>
    </>
  );
}
