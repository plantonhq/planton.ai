import { SectionsNavigator } from "./sections-navigator";

export const ByRole = () => {
  const sections = [
    {
      title: "Developers: Focus on Innovation",
      description: "Eliminate operational overhead to concentrate on coding.",
      image: "/images/chat-box.png",
    },
    {
      title: "DevOps Engineers: Amplify Automation",
      description:
        "Create and share automation effortlessly with centralized tools.",
      image: "/images/chat-box.png",
    },
    {
      title: "Startup Founders: Accelerate Time to Market",
      description:
        "Reduce the need for specialized DevOps personnel with AI assistance.",
      image: "/images/chat-box.png",
    },
    {
      title: "Engineering Leaders: Drive Team Efficiency",
      description:
        "Centralized management and real-time insights enhance team performance.",
      image: "/images/chat-box.png",
    },
  ];

  return (
    <SectionsNavigator
      title="Empowering Every Role in Software Development"
      sections={sections}
    />
  );
};
