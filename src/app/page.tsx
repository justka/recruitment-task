"use client";

import { ICON_NAME } from "@/const";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";

export default function Home() {
  return (
    <>
      <Input
        iconName={ICON_NAME.PLUS_IN_CIRCLE}
        labelText="Nazwa"
        placeholder="np. Promocje"
      />
      <Input
        iconName={ICON_NAME.MAGNIFIER}
        labelText="Link"
        placeholder="np. Promocje"
      />
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
