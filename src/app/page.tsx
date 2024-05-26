"use client";
import React, { useState } from "react";
import { Button, Tag, Form, Input } from "antd";
import Experiences from "@/app/experiences";
import Merits from "./merits";
import Educations from "./educations";
import { center} from "./styles";
import ProgrammingSkills from "./programmingSkills";
import Navbar from "./navbar";
import Contacts from "./contacts";
import OtherSkills from "./otherSkills";
import LanguageSkills from "./languageSkills";
import Email from "./email";

const { TextArea } = Input;

const Home: React.FC = () => {

  return (
    <div className="App">
      <h1 style={center}>Christoffer Näs</h1>
        <Contacts></Contacts>
        <Experiences></Experiences>
        <Educations></Educations>
        <Merits></Merits>
        <ProgrammingSkills></ProgrammingSkills>
        <OtherSkills></OtherSkills>
        <LanguageSkills></LanguageSkills>
        <Email></Email>
    </div>
  );
};

export default Home;
