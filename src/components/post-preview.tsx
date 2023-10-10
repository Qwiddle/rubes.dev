import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "./typography/animated-text";

export const PostPreview = ({
  title,
  description,
  content,
  tags,
}: {
  title: string;
  description: string;
  content?: string;
  tags?: string[];
}) => {
  return (
    <Card className="transform hover:scale-[1.025] hover:cursor-pointer ease-in duration-100">
      <CardHeader className="flex justify-between">
        <CardTitle className="flex justify-between">
          {title}
          <div className="flex">
            {tags &&
              tags.map((tag, index) => (
                <Badge
                  key={`tag-${index}`}
                  variant="outline"
                  className="flex gap-2"
                >
                  🏆
                  <AnimatedText>{tag}</AnimatedText>
                </Badge>
              ))}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && (
        <CardContent>
          <p>{content}</p>
        </CardContent>
      )}
      {/*<CardFooter className="justify-end text-muted-foreground">
          <BarChart />
          <p className="text-sm">100</p>
        </CardFooter>*/}
    </Card>
  );
};
