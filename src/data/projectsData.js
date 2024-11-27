const projectData = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    name: "Blog Platform",
    image: "/verve_1.png",
    video: "/verve.mp4",
    description:
      "A web app with blog posts, allowing users to read, comment, and enjoy a responsive design across devices.",
    overview: [
      "The Blog Platform is a responsive, modern web application developed to provide users with an intuitive and interactive experience for reading and engaging with articles. Built with Bootstrap 5 for a fully adaptive design, the platform ensures accessibility across all devices and screen sizes.",
      "This project focuses on user-centric features, such as registration, login, and profile customization, allowing users to read, comment, and manage their information on a highly interactive blog platform.",
    ],
    coreFunctionality: [
      {
        headline: "Responsive Design",
        text: "Designed using Bootstrap 5, the platform is fully adaptive, providing a seamless user experience across devices and screen sizes, from desktops to mobile phones.",
      },
      {
        headline: "User Registration and Authentication",
        text: "The platform enables users to register, log in, and securely manage their session to access content and interact with other features.",
      },
      {
        headline: "Profile Management",
        text: "Users can update their profile information, including full name, nickname, gender, phone number, country, address, email, website, and educational background. This feature adds a layer of personalization to the user experience.",
      },
      {
        headline: "Article Browsing and Commenting",
        text: "Users can read and interact with articles by adding or deleting comments. Comments add interactivity and enable users to engage with the content and other readers.",
      },
    ],
    objective: [
      "The primary objective was to develop a fully responsive blog platform while enhancing skills in frontend and backend web development.",
      "Additional goals included gaining experience with adaptive design principles using Bootstrap 5, implementing core web development features, and building a user-friendly interface with enhanced functionality for user authentication and profile management.",
    ],
    tools: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite",
      "Vue",
      "NodeJS",
    ],
    links: [
      {
        text: "GitHub",
        href: "https://github.com/provodokkk/Blog-Platform",
      },
      {
        text: "Website",
        href: "https://provodokkk.github.io/Blog-Platform/",
      },
    ],
  },
];

export default projectData;
