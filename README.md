# Blogify

Deployed version is here [Blogify](https://hammerhead-app-sgxva.ondigitalocean.app).

Application hosted on the Digital Ocean. Due to long inactivity, the app could be halted.

# SEO-Optimized Content Generator

This prototype project is a web application built with React, Next.js, and Tailwind CSS. It leverages the power of the OpenAI API, Stripe API, MongoDB/Atlas, and Auth0 to create an SEO-optimized content for specific topics.

## Features

- **AI-Powered Content Generation**: The application utilizes the OpenAI API to generate high-quality content for a given topic. It suggests attention-grabbing titles, provides short descriptions, by using relevant keywords.

- **SEO Optimization**: The content generator ensures that the generated content is optimized for search engine rankings. It assists in incorporating relevant keywords and follows SEO best practices to improve your content's discoverability.

- **Integration with Stripe API**: To access the full range of features, users are required to purchase tokens through the integrated Stripe payment system. This allows you to monetize the application and provide a seamless payment experience for your users.

- **Secure User Authentication with Auth0**: The application implements Auth0 for secure and customizable user authentication. It protects your content and enables you to manage user access effectively.

- **Storage and Management with MongoDB/Atlas**: The application securely stores and manages the generated content in a reliable MongoDB/Atlas database. This ensures efficient retrieval and organization of your content for future reference.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Set up the required API keys and configurations:

   - OpenAI API: Obtain an API key from OpenAI and update the configuration file.
   - Stripe API: Set up a Stripe account, obtain the required API keys, and update the configuration file.
   - MongoDB/Atlas: Set up a MongoDB/Atlas account, create a database, and update the configuration file with the connection details.
   - Auth0: Create an Auth0 account, set up an application, and configure the required authentication settings.

4. Start the development server: `npm run dev`
5. Open the application in your browser: `http://localhost:3000`

## Usage

1. Sign in to the application using your Auth0 credentials.
2. Enter a topic for which you want to generate SEO-optimized content.
3. Enter keywords separated by coma.
4. Click the "Generate" button to generate the SEO-optimized content.
5. Review the suggested title, short description provided by the application.

## Limitations

- This project is a prototype developed to showcase the capabilities of React, Next.js, Tailwind CSS, and the integrated APIs. It may not have the full range of features and scalability of a production-ready application.

- The accuracy and effectiveness of the AI-generated content may vary depending on the topic and the quality of the training data used by the OpenAI API.

- Styling and visual aesthetics were not the primary focus of this prototype project. However, it serves as a foundation upon which you can build and style a visually appealing blogging platform.
