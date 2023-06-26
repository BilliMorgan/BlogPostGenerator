import Link from "next/link"
import { Logo } from "../components/Logo"
import HeroImage from "../public/hero.webp"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className=" min-h-screen bg-gradient-to-b from-slate-800 to-cyan-800 flex flex-wrap text-white w-full ">
        <div className="flex flex-col items-center justify-center p-10  h-screen w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold">
            AI-Powered Blog Post Generator for Effortless Content Creation
          </h1>
          <Link className="btn w-40 self-start mt-10" href="/post/new">
            Begin
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center   p-10 ">
          <h1>
            Introducing Blogify: Your Ultimate SEO-Friendly Blog Post Creation
            Tool
          </h1>

          <p>
            Blogify is an innovative web application designed to empower content
            creators with the ability to effortlessly generate SEO-friendly blog
            posts. Leveraging a cutting-edge technology stack including React,
            Next.js, Tailwind CSS, MongoDB/Atlas, Stripe API, Auth0, and the
            ChatGPT API, Blogify streamlines the content creation process while
            ensuring maximum visibility and engagement for your blogs.
          </p>

          <p>
            With Blogify, you can focus on crafting captivating content while
            the AI-powered ChatGPT API assists you in generating
            attention-grabbing titles, incorporating relevant keywords, and
            composing the blog text itself. Say goodbye to writer&apos;s block
            and hello to a seamless writing experience!
          </p>

          <h2>Key Features:</h2>
          <ol>
            <li>
              <strong>AI-Powered Content Generation:</strong> Tap into the
              potential of ChatGPT API to receive creative suggestions, generate
              captivating titles, and effortlessly craft engaging blog content.
            </li>
            <li>
              <strong>SEO Optimization:</strong> Ensure your blog posts rank
              higher in search engine results with the assistance of built-in
              keyword analysis and integration.
            </li>
            <li>
              <strong>User Authentication with Auth0:</strong> Safeguard your
              content and manage user access with a secure and customizable
              authentication solution.
            </li>
            <li>
              <strong>Stripe Integration:</strong> In order to access the full
              range of features and unleash the true potential of Blogify, users
              are required to purchase tokens through the integrated Stripe
              payment system. By leveraging the power and security of
              Stripe&apos;s robust payment gateway, Blogify ensures a smooth and
              hassle-free token purchase process.
            </li>
            <li>
              <strong>MongoDB/Atlas Integration:</strong> Store and manage your
              blog posts securely in a reliable database, allowing for efficient
              retrieval and organization of your content.
            </li>
          </ol>

          <p>
            Please note that styling was not the focus of this prototype
            project. However, Blogify&apos;s functionality serves as a testament
            to the power and capabilities of the React, Next.js, and Tailwind
            CSS stack. It serves as a reliable foundation upon which you can
            build and scale a fully styled and visually appealing blogging
            platform.
          </p>

          <p>
            Take your content creation game to new heights with Blogify. Start
            writing exceptional blog posts today and unlock your potential for
            online success!
          </p>
        </div>
      </div>
    </div>
  )
}
