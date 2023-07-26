"use client";

import { Card, CardContent, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Steven P.",
    avatar: "S",
    title: "Software Engineer",
    description: "This is the best AI tool I have ever used!",
  },
  {
    name: "Emily R.",
    avatar: "E",
    title: "Data Scientist",
    description:
      "The AI website exceeded my expectations. It's incredibly powerful and user-friendly!",
  },
  {
    name: "John J.",
    avatar: "J",
    title: "Machine Learning Researcher",
    description:
      "I'm impressed by the accuracy and speed of this AI platform. It's a game-changer for my research!",
  },
  {
    name: "Sophia E.",
    avatar: "S",
    title: "AI Enthusiast",
    description:
      "As someone passionate about AI, I can confidently say that this website is revolutionary. It's a must-have for anyone in the field!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 gap-4 ">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardTitle className="flex items-center gap-x-2">
              <div className="flex flex-col p-4">
                <p className="text-lg">{item.name}</p>
                <p className="text-zinc-400 text-sm ">{item.title}</p>
              </div>
            </CardTitle>
            <CardContent className="pt-4 px-4 ">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
