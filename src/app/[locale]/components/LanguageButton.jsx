"use client"
import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";

export default function LanguageButton() {
  return (
    <Select
      className="w-[120px] bg-black "
      size="sm"
      
    >
      <SelectItem
        key="america"
        href="/en"
        startContent={<Avatar alt="America" className="w-6 h-6"  src="https://flagcdn.com/us.svg" />}
      >
        <p className="text-white">EN</p>
      </SelectItem>
      
      <SelectItem
        key="germany"
        href="/de"
        startContent={<Avatar alt="Germany" className="w-6 h-6"  src="https://flagcdn.com/de.svg" />}
      >
        <p className="text-white">DE</p>
      </SelectItem>
    </Select>
  );
}
