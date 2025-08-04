const projectData = [
    {
    id: 1,
    name: "Cary Ally",
    image: "/cary_ally_1.png",
    video: "/cary_ally.mp4",
    description:
      "A voice-based iOS companion app that offers emotionally intelligent conversations to support older adults dealing with loneliness, memory loss, or dementia, using real-time emotion recognition and personalized interaction.",
    overview: [
      "Cary Ally is a voice-based iOS companion app designed to support older adults facing loneliness, memory loss, or early-stage dementia. Developed as part of a social impact initiative, the app offers warm, empathic conversations that help users feel heard, valued, and emotionally connected.",
      "The app was built solo from the ground up using TypeScript and React Native, and it's available for download on the App Store. It continues to grow through ongoing improvements and feature updates.",
    ],
    coreFunctionality: [
      {
        headline: "Emotion Recognition and Adaptive Voice",
        text: "Uses Hume AI to interpret emotional signals from the user's voice and generate emotionally aligned, context-aware responses in real time.",
      },
      {
        headline: "Long-Term Memory via Custom Tools",
        text: "Stores key user details (e.g., names, preferences, life facts) to create continuity across conversations. These memories are surfaced naturally by the AI, enabling a sense of familiarity and trust.",
      },
      {
        headline: "Activity-Based Conversations",
        text: "Offers a menu of guided activities — from Daily News and Gratitude Exercises to Trivia Quizzes and Brain Teasers — to stimulate engagement and emotional connection.",
      },
      {
        headline: "Scheduling and Accessibility",
        text: "Users can schedule future calls through voice or UI, receive reminders, and customize voice settings (speed, style) to improve accessibility.",
      },
      {
        headline: "Chat History and Privacy Control",
        text: "Provides access to past conversations and gives users full control over what information is stored or deleted.",
      },
    ],
    objective: [
      "The goal was to create an AI companion that behaves more like a friend than a voice assistant — emotionally intelligent, deeply personal, and able to sustain meaningful conversations over time. The app supports research in AI empathy and conversational design, contributing to a broader effort to reduce loneliness among older populations.",
      "The project also demonstrates the use of long-term memory emulation and seamless interaction without breaking conversational flow.",
    ],
    tools: ["Next.js", "TypeScript", "React", "HTML", "CSS", "Hume AI API"],
    links: [
      {
        text: "App Store",
        href: "https://apps.apple.com/ch/app/cary-ally-voice-companion-ai/id6743964458?l=en-GB",
      },
      {
        text: "Website",
        href: "https://www.caryally.com/",
      },
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/company/caryally/posts/",
      },
      {
        text: "X (Twitter)",
        href: "https://x.com/cary_ally",
      },
      {
        text: "Facebook",
        href: "https://www.facebook.com/mycaryally/",
      },
    ],
  },
  {
    id: 2,
    name: "Empathic Shopping Assistant",
    image: "/evi_1.png",
    video: "/evi.mp4",
    description:
      "An intelligent, empathic voice assistant helping users find the best products tailored to their needs by dynamically adjusting its behavior based on user emotions.",
    overview: [
      "This project was developed as part of a research initiative at UZH to study the impact of AI-driven empathy on user interactions.",
      "The web application leverages the Hume AI API to recognize user emotions in their voice and generate responses.",
    ],
    coreFunctionality: [
      {
        headline: "Emotion Recognition and Response Generation",
        text: "Utilizes the Hume AI API to detect emotions from user voice input and generate context-aware, empathic responses that adjust based on the user's emotional state.",
      },
      {
        headline: "Dynamic Empathy Levels",
        text: "Prompts adapt empathy levels depending on the product category. For example, the assistant demonstrates lower empathy for straightforward items like batteries and higher empathy for more emotionally charged purchases.",
      },
      {
        headline: "Product Interaction",
        text: "Supports product searches, comparisons, and alternative suggestions. Users can explore detailed product information, open links to products, and receive tailored recommendations.",
      },
    ],
    objective: [
      "The project aimed to build a conversational AI application that enhances user experience through dynamic empathy adjustment, supporting ongoing research in AI's emotional intelligence and its practical applications.",
      "It also served to explore advanced AI interaction tools and frameworks, focusing on building efficient prompts and a responsive, user-friendly web interface.",
    ],
    tools: ["Next.js", "TypeScript", "React", "HTML", "CSS", "Hume AI API"],
    links: [
      {
        text: "GitHub",
        href: "https://github.com/provodokkk/EVI",
      },
      {
        text: "Website",
        href: "https://evi-sage.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    name: "Number Plate Recognition",
    image: "/voiture_1.png",
    video: "/voiture.mp4",
    description:
      "A web app that enables users to recognize vehicles and license plate numbers in uploaded files.",
    overview: [
      "The License Plate Recognition (LPR) Web Application is an advanced web-based platform designed to automatically recognize vehicle license plates from images and videos. This application leverages pre-trained AI models to detect and read license plates, offering an intuitive and user-friendly experience for its users.",
      "The main goal of this project is to provide an easy-to-use tool for processing photos and videos containing vehicles, extracting information about license plate numbers. Whether it's for security purposes, monitoring, or data collection, the LPR system automates the process of recognizing vehicles and their associated license plates.",
    ],
    coreFunctionality: [
      {
        headline: "Vehicle Detection",
        text: "The system uses a YOLOv8 pre-trained AI model to identify vehicles within an image or video. This model is trained to accurately locate and classify different types of vehicles based on their appearance.",
      },
      {
        headline: "License Plate Detection",
        text: "Once a vehicle is detected, another model is employed to locate the license plate. This model scans the detected vehicle and isolates the area where the license plate is situated, even under varying conditions such as different angles or lighting.",
      },
      {
        headline: "License Plate Recognition",
        text: "The final step involves reading the characters on the license plate. The system identifies the text and displays it with a confidence percentage, indicating the accuracy of the recognition process.",
      },
      {
        headline: "Visual Output",
        text: "After the AI processes the data, the user is presented with a results page. This page displays the original file and the processed version, where graphical annotations (rectangles) are added to highlight the detected vehicles and license plates.",
      },
      {
        headline: "Frame Accuracy",
        text: "For video inputs, the application identifies the frames where license plates were detected with the highest accuracy. These frames are displayed on the results page for the user's review, ensuring transparency and confidence in the recognition process.",
      },
      {
        headline: "Exportable Data",
        text: "Users can download the processed results in an Excel format, which is especially useful for handling videos with multiple vehicles. This feature provides a structured, easy-to-manage overview of all detected license plates and their associated details.",
      },
      {
        headline: "File History",
        text: "The platform also allows users to access previously processed files. All past submissions are available on the main page, making it simple to review and manage past results.",
      },
    ],
    objective: [
      "The project was primarily aimed at gaining hands-on experience with Django, integrating pretrained AI models, and building AI pipelines.",
      "Additionally, the project focuses on improving skills in web application development, understanding model deployment, and managing large-scale image and video processing tasks.",
      "By leveraging state-of-the-art models like YOLOv8, the project aims to provide an intuitive user interface for seamless processing of media files.",
    ],
    tools: ["Python", "Django", "JavaScript", "HTML", "CSS", "SQLite"],
    links: [
      {
        text: "GitHub",
        href: "https://github.com/provodokkk/Django-Number-Plate-Recognition",
      },
    ],
  },
];

export default projectData;
