"use client";
import { navigateFromCardClick } from "@/app/util";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "./typography/animated-text";

export const ProjectPreview = ({
  header,
  icon,
  description,
  content,
  link,
}: {
  header: string;
  icon: string | React.JSX.Element;
  description: string;
  content?: string;
  link: string;
}) => {
  return (
    <Card
      className="transition ease-in hover:scale-[1.025] hover:cursor-pointer duration-100"
      onClick={() => navigateFromCardClick(link)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>{header}</div>
          <div className=" text-purple-200 transition hover:opacity-75 duration-100 flex">
            <Badge variant="outline" className="flex gap-2">
              {icon}
              <AnimatedText>react</AnimatedText>
            </Badge>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && (
        <CardContent className="">
          <Image src={content} alt="Project Preview" width="500" height="500" />
        </CardContent>
      )}
    </Card>
  );
};
