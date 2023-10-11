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
import { AnimatedText } from "./typography/animated-text";
import { Badge } from "@/components/badge";

export const ProjectPreview = ({
  header,
  icon,
  description,
  content,
  link,
  tags,
}: {
  header: string;
  icon: string | React.JSX.Element;
  description: string;
  content?: string;
  link: string;
  tags: Badge[];
}) => {
  return (
    <Card
      className="transition ease-in hover:scale-[1.025] hover:cursor-pointer duration-100"
      onClick={() => navigateFromCardClick(link)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>{header}</div>
          <div className=" transition duration-100 flex md:flex-col lg:flex-row sm:flex-row">
            {tags &&
              tags.map((tag, index) => (
                <Badge
                  key={`tag-${index}`}
                  type={tag}
                  className="hover:opacity-75"
                ></Badge>
              ))}
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
