function AIBrowserAssistantWriteUp() {
  return (
    <>
      <h3>Overview</h3>
      <p>
        For our final project, we've proposed that we would build an agentic
        Google Chrome extension application. This application's anticipated use
        case was to be able to open the side-panel on a website where the user
        would like a shortened summary of the text provided, and you would be
        given a condensed list of important peices of info relavent to the
        current context. Additionally, users could ask follow-up questions to
        get further information or ask for clarification. The main goal was to
        build an application that acheives the tasks above while also learning
        something new in the process.
        <br />
        ...
      </p>

      <h3>What We Built</h3>
      <p>
        We built an AI-powered Chrome Extension that lives in a side panel and
        assists users while they browse. The extension provides two core
        capabilities: webpage summarization and page-grounded Q&A. When the user
        opens the side panel and clicks “Summarize,” the extension extracts
        readable text from the active tab (prioritizing the main content of the
        page and using highlighted text when available). That content is then
        sent to a generative AI model through the Gemini API, which returns a
        concise overview and key takeaways that are displayed directly in the
        side panel. In Q&A mode, the user can ask a question about the current
        page, and the extension responds using only the extracted page content,
        making answers more relevant to what the user is actually viewing.
        <br />
        <br />
        Technically, the project is built with React + Vite for a fast
        development workflow and a clean, responsive interface, and TypeScript
        to keep the codebase consistent and easier to debug. The extension
        follows the Manifest V3 architecture, separating UI concerns from
        background logic and page interaction. We also use the Chrome Storage
        API to persist settings such as the user’s API key and model preferences
        across sessions. The result is a real, working browser assistant that
        demonstrates modern extension development, API integration, and
        user-focused UI design.
        <br />
        ...
      </p>

      <div className="write-up-container">
        <div className="write-up-card">
          <h4>Garrett M. - What I Learned</h4>
          <p>
            <small>
              My programming experience going into this project was limited to
              C++ basics and data structures/algorithms that we have been
              learning in class, plus the ability to translate most of the same
              ideas into Java. After hearing my partner's proposal for the
              assignment, I knew I would have a lot on my plate, but I also knew
              that my investment into this project would widen my future
              prospects as a software engineer by exposing me to the core
              fundamentals of web development. I began by putting together a
              roadmap that would help facilitate my studying and still allow us
              to create a working product within the allotted time.
              <br />
              <br />
              It was important for me to focus on understanding the basic
              building blocks for HTML and CSS, as JavaScript and TypeScript are
              just the languages that allow us to add functionality to the
              elements provided by HTML (buttons, forms, etc). When it came time
              to introduce React to the pallete, I learned about how it can be
              easier to abstract your application's individual components while
              thinking about how and where their functionality can be reused.
              This reusability mindset helps with code readability while also
              making it easier for CSS styling and adding custom visual
              components. As a well-rounded project to practice all of these
              ideas up until this point, I built my own portfolio website in
              which I intend to host this project as well as others in the
              future on.
              <br />
              <br />
              For our AI-powered Chrome extension, I needed to bridge the gap
              between website and Chrome extension, and doing this was as simple
              as providing my React project with a manifest.json (MV3). This
              file is used to tell your application how and where to execute
              within Chrome's embedded environment.
              <br />
              <br />
              ...
            </small>
          </p>
        </div>
        <div className="write-up-card">
          <h4>Jorel A. - What I Learned</h4>
          <p>
            <small>
              Going into this project, my background was mainly in Python, C++,
              and the algorithmic thinking from class. I had never worked with
              AI models, browser automation, or Chrome extension architecture at
              this level. I knew I would need to learn how LLMs work behind the
              scenes and how to integrate AI into a real, user-facing product,
              so I created a clear plan to build the skills I needed step by
              step.
              <br />
              <br />
              I focused first on understanding how large language models process
              prompts, generate text, and handle context. Once I understood the
              fundamentals, I learned how to structure prompts, manage model
              temperature, control output behavior, and design prompts that
              consistently return useful responses. I also began experimenting
              with model constraints, system instructions, and multi-step
              reasoning chains to get predictable results.
              <br />
              <br />
              A major part of my work was learning how to connect an AI model to
              our extension through API calls. I learned how to format requests,
              send user input to the model, receive structured output, and
              handle errors or token limits. This taught me how to build stable
              interactions between the frontend and the AI system without
              breaking the user experience.
              <br />
              <br />
              When it came time to deploy everything into a Chrome extension, I
              learned how to adapt our logic into Chrome’s environment using a
              manifest.json (MV3). Understanding background scripts,
              permissions, and message passing allowed me to link the AI
              features with the extension interface and make the model respond
              dynamically to user actions.
              <br />
              <br />
              Overall, I learned how to work with LLMs at a practical
              level—prompt engineering, API integration, response handling, and
              connecting AI behavior to real user interactions. The project
              pushed me beyond classroom material and gave me hands-on
              experience building an AI-powered tool from the ground up.
              <br />
              <br />
              ...
            </small>
          </p>
        </div>
        <p></p>
      </div>

      <h3>Conclusion</h3>
      <p>
        <br />
        ...
      </p>
    </>
  );
}

export default AIBrowserAssistantWriteUp;
