import { SectionsNavigator } from "./sections-navigator";

export const ByUseCase = () => {
  const sections = [
    {
      title: "ChatOps: Revolutionizing Collaboration",
      description:
        "Integrate conversations with operations through AI-driven chat interfaces.",
      image: "/images/chat-box.png",
    },
    {
      title: "Internal Developer Platform",
      description:
        "Provide a self-service layer that abstracts operational complexities.",
      image: "/images/chat-box.png",
    },
    {
      title: "Multi-Cloud: Flexibility Without Complexity",
      description:
        "Manage applications across various cloud providers through a unified interface.",
      image: "/images/chat-box.png",
    },
  ];

  return (
    <SectionsNavigator
      title="Tailored Solutions for Every DevOps Challenge"
      sections={sections}
    />
  );
};
