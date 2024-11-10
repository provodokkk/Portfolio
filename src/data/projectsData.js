const projectData = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    name: "Graphical Editor",
    image: "/graphical_editor_1.png",
    description:
      "A console-based graphic editor supporting circles and rectangles with nested grouping, allowing users to click for shape details and hierarchy.",
    overview: [
      "The Graphical Editor is a C++ console-based application for creating and manipulating basic geometric shapes, such as circles and rectangles, which can be grouped and organized hierarchically.",
      "The program implements the back-end logic and a visual interface using the SFML library, allowing users to interact with and analyze shapes and their groups within a console.",
    ],
    coreFunctionality: [
      {
        headline: "Shape and Group Creation",
        text: "Users can create circles and rectangles of varying sizes and positions. Shapes can exist independently or be grouped into collections that support multi-level nesting.",
      },
      {
        headline: "Selection and Analysis",
        text: "Allows users to select elements by coordinates to receive detailed information in the console, including shape attributes and nesting level, providing a clear structure of element hierarchy.",
      },
      {
        headline: "Element Manipulation",
        text: "Includes features for adding and deleting elements, positioning and repositioning shapes, and moving them between groups or to the main workspace.",
      },
    ],
    objective: [
      "The application was developed to explore design patterns, with a focus on the 'builder' and 'iterator' patterns. By providing functions for creating, grouping, and interacting with shapes, the project demonstrates the practical implementation of design patterns within a structured graphical editor.",
      "The project involved analyzing requirements, selecting suitable design patterns, and successfully implementing them in C++. Through this, it enhanced knowledge in backend logic and structured design within a graphical context.",
    ],
    tools: ["C++", "SFML"],
    links: [
      {
        text: "GitHub",
        href: "https://github.com/provodokkk/GraphicsEditor",
      },
    ],
  },
];

export default projectData;
