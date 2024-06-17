import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const Home = () => {
  const demoQuestions = [
    {
      _id: "1",
      title: "How to optimize React application performance?",
      tags: [
        { _id: "101", name: "React" },
        { _id: "102", name: "Performance" },
        { _id: "103", name: "JavaScript" },
      ],
      author: {
        _id: "201",
        name: "Alice Smith",
        picture: "https://example.com/pictures/alice.jpg",
        clerkId: "alice_smith_123",
      },
      upvotes: ["301", "302", "303"],
      views: 150,
      answers: [
        {
          _id: "401",
          content:
            "You can optimize React application performance by using techniques like code splitting, lazy loading, and memoizing components.",
          author: {
            _id: "202",
            name: "John Doe",
            picture: "https://example.com/pictures/john.jpg",
            clerkId: "john_doe_456",
          },
          upvotes: ["304", "305"],
          createdAt: new Date("2024-06-10T10:30:00Z"),
        },
      ],
      createdAt: new Date("2024-06-09T10:00:00Z"),
      clerkId: "alice_smith_123",
    },
    {
      _id: "2",
      title: "What are the best practices for using TypeScript with Node.js?",
      tags: [
        { _id: "104", name: "TypeScript" },
        { _id: "105", name: "Node.js" },
        { _id: "106", name: "Best Practices" },
      ],
      author: {
        _id: "203",
        name: "Bob Johnson",
        picture: "https://example.com/pictures/bob.jpg",
        clerkId: "bob_johnson_789",
      },
      upvotes: ["306", "307"],
      views: 200,
      answers: [
        {
          _id: "402",
          content:
            "Ensure type safety by using interfaces and types, use async/await for asynchronous code, and leverage TypeScript's strict mode.",
          author: {
            _id: "204",
            name: "Carol White",
            picture: "https://example.com/pictures/carol.jpg",
            clerkId: "carol_white_321",
          },
          upvotes: ["308", "309", "310"],
          createdAt: new Date("2024-06-11T12:00:00Z"),
        },
      ],
      createdAt: new Date("2024-06-10T09:00:00Z"),
      clerkId: "bob_johnson_789",
    },
    {
      _id: "3",
      title: "How to implement authentication in a Next.js application?",
      tags: [
        { _id: "107", name: "Next.js" },
        { _id: "108", name: "Authentication" },
        { _id: "109", name: "JavaScript" },
      ],
      author: {
        _id: "205",
        name: "David Brown",
        picture: "https://example.com/pictures/david.jpg",
        clerkId: "david_brown_654",
      },
      upvotes: ["311", "312"],
      views: 180,
      answers: [
        {
          _id: "403",
          content:
            "You can implement authentication in Next.js using libraries like NextAuth.js or by integrating with OAuth providers.",
          author: {
            _id: "206",
            name: "Eve Black",
            picture: "https://example.com/pictures/eve.jpg",
            clerkId: "eve_black_987",
          },
          upvotes: ["313", "314", "315"],
          createdAt: new Date("2024-06-12T15:00:00Z"),
        },
      ],
      createdAt: new Date("2024-06-11T14:00:00Z"),
      clerkId: "david_brown_654",
    },
    {
      _id: "4",
      title: "What are the benefits of using GraphQL over REST?",
      tags: [
        { _id: "110", name: "GraphQL" },
        { _id: "111", name: "REST" },
        { _id: "112", name: "APIs" },
      ],
      author: {
        _id: "207",
        name: "Fiona Green",
        picture: "https://example.com/pictures/fiona.jpg",
        clerkId: "fiona_green_432",
      },
      upvotes: ["316", "317"],
      views: 220,
      answers: [
        {
          _id: "404",
          content:
            "GraphQL offers more flexibility in querying data, reduces over-fetching, and allows for better introspection and documentation.",
          author: {
            _id: "208",
            name: "George Blue",
            picture: "https://example.com/pictures/george.jpg",
            clerkId: "george_blue_543",
          },
          upvotes: ["318", "319", "320"],
          createdAt: new Date("2024-06-13T18:00:00Z"),
        },
      ],
      createdAt: new Date("2024-06-12T16:00:00Z"),
      clerkId: "fiona_green_432",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {demoQuestions.length > 0 ? (
          demoQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
