"use client";

import { ICON_NAME } from "@/const";
import { Button } from "@/ui/Button/Button";

export default function Home() {
  return (
    <>
      <Button
        className="text-indigo-600 rounded-md px-3 py-2 text-sm outline-indigo-600 border py-2.5 px-3.5"
        text="Anuluj"
      />
      <Button
        className="text-indigo-600 rounded-md px-3 py-2 text-sm outline-indigo-600 border py-2.5 px-3.5"
        iconName={ICON_NAME.PLUS_IN_CIRCLE}
        text="Dodaj"
        type="submit"
      />
    </>
  );
}
