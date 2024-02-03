const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('You', userMessage);
    // Here, you can add logic to process the user message and generate bot response
    const botResponse = generateBotResponse(userMessage);
    setTimeout(() => {
        appendMessage('Bot', botResponse);
    }, 500);

    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}-message`;
    messageElement.innerText = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateBotResponse(userMessage) {
    // Here, you can implement the logic to generate bot responses based on user input
    // For simplicity, let's use a basic example:
    if (userMessage.includes('computer science and business systems')) {
        return "Computer Science is the study of computers and computational systems.";
    } else if (userMessage.includes('let me know about the total intakes in CSBS?')) {
        return "64";
    } else if (userMessage.includes('CSBS semester 1 subjects')) {
        return "Discrete Mathematics,Probability and statistics,Fundamentals of physics, Chemistry,Fundamentals of computer science,Principles of Electrical Engineering.";
    }else if (userMessage.includes('CSBS semester 6 subjects')) {
        return "Computer networks,Information security,Artificia intelligenc,Modern web applicatioms,Data mining and analytics";
    }else if (userMessage.includes('CSBS semester 5 subjects')) {
        return "Design and analsis of algorithms,Compiler design,Business stratergy,Design thinking,Cloud-microservies and applications,Behavioural economics.";
    }else if (userMessage.includes('CSBS semester 2 subjects')) {
        return "Linear algebra,Data structures and algorithms,Principles of Elctroniccs,Fundamentals of Economics,Environmental science";
    }else if (userMessage.includes('CSBS semester 3 subjects')) {
        return "FLAT,Computer Organization and architecture,Objec oriented programming,Computational statistics,Software engineering,Financial management";
    }else if (userMessage.includes('let me know about the total intakes in CSBS?')) {
        return "64";
    }else if (userMessage.includes('CSBS semester 4 subjects')) {
        return "Operating systems,DBMS,Software design with UML,Introduction to innovation-IP management and entrepreneurship,Operating research,Marketing research and Managment";
    } else if (userMessage.includes('faculty of CSBS')) {
        return "Dr. Sasikala, Mrs. Supriya, Mr. Chandru,Mrs. Padmashree,Ms. Yuvalatha,Ms. Shobika,Mr. Vinothkumar,Mr. Sathish,Ms. Madhumitha";
    }else if (userMessage.includes('discrete mathematics')) {
        return "Discrete Mathematics is the study of mathematical structures that are fundamentally discrete rather than continuous. It includes topics like logic, set theory, combinatorics, and graph theory.";
    }else if (userMessage.includes('probability and statistics')) {
        return  "Probability and Statistics is the field that deals with uncertainty and data analysis. It includes concepts of probability, statistical distributions, hypothesis testing, and regression analysis";
    }else if (userMessage.includes('physics')) {
        return  "Fundamentals of Physics covers the basic principles of classical physics, including mechanics, thermodynamics, and electromagnetism.";
    }else if (userMessage.includes('chemistry')) {
        return  " Chemistry studies the composition, structure, properties, and changes of matter. It helps us comprehend the interactions and reactions between elements and compounds, playing a pivotal role in industries ranging from pharmaceuticals to materials science.";
    }else if (userMessage.includes('Fundamentals of Computer Science')) {
        return  "This subject introduces the core concepts of computation, algorithms, data structures, and programming. It's the basis for understanding software development, computational problem-solving, and the digital world's functioning.";
    }else if (userMessage.includes('Principles of Electrical Engineering')) {
        return  "Electrical engineering focuses on principles related to the design, analysis, and application of electrical systems and devices. It covers areas such as circuits, electronics, signals, and power generation, forming the backbone of modern technology and infrastructure.";
    }else if (userMessage.includes('Linear algebra')) {
        return  "Linear algebra deals with vector spaces, linear transformations, and matrices to solve systems of linear equations and study geometric properties, forming a foundation for various fields like computer graphics and machine learning.";
    }else if (userMessage.includes('Data structures')) {
        return  "Data structures involve organizing and managing data, while algorithms are step-by-step procedures to solve problems; together, they are crucial in designing efficient and effective software solutions.";
    }else if (userMessage.includes('Principles of Electronics')) {
        return  "Principles of electronics cover the fundamental concepts of electrical circuits, semiconductor devices, and digital systems, forming the basis for understanding electronic devices and circuit design.";
    }else if (userMessage.includes('Fundamentals of Economics')) {
        return  "Economics studies the allocation of scarce resources to satisfy unlimited human wants, exploring concepts like supply and demand, market structures, and economic policies that influence decision-making at individual and societal levels.";
    }else if (userMessage.includes('Environmental Science')) {
        return  "Environmental science examines the interactions between humans and the environment, addressing issues like pollution, climate change, biodiversity loss, and sustainability to promote a better understanding of ecological systems and responsible resource management.";
    }else if (userMessage.includes('FLAT')) {
        return  "FLAT focuses on formal languages, grammars, and automata theory to analyze the structure and behavior of languages, playing a key role in programming language design and compiler construction.";
    }else if (userMessage.includes('COA')) {
        return  "This subject explores the internal structure and design of computers, including components like CPUs, memory systems, and I/O interfaces, facilitating a deep understanding of how hardware and software interact.";
    }else if (userMessage.includes('OOPS')) {
        return  "Object-oriented programming emphasizes designing software around objects that encapsulate data and methods, enhancing modularity, reusability, and maintainability in software development.";
    }else if (userMessage.includes('Computational Statistics')) {
        return  "Computational statistics involves using computational methods to analyze and interpret data, applying techniques like simulations, numerical optimization, and data-driven modeling to gain insights from complex datasets.";
    }else if (userMessage.includes('Software Engineering')) {
        return  "Software engineering encompasses systematic approaches to software development, including requirements analysis, design, coding, testing, and maintenance, ensuring the creation of high-quality, reliable, and scalable software systems.";
    }else if (userMessage.includes('Financial Management')) {
        return  "Financial management delves into the planning, procurement, and allocation of financial resources within an organization, encompassing areas like budgeting, investment decisions, risk management, and financial reporting";
    }else if (userMessage.includes('Operating Systems')) {
        return  "Operating systems manage computer hardware and software resources, enabling user interaction, process management, memory allocation, and file system organization for efficient and secure computing.";
    }else if (userMessage.includes('DBMS')) {
        return  "DBMS handles the storage, retrieval, and manipulation of data in databases, offering structured methods for data organization, querying, and maintaining data integrity in various applications.";
    }else if (userMessage.includes('UML')) {
        return  "Software design employs Unified Modeling Language (UML) to visually represent system architecture, interactions, and components, aiding in creating clear blueprints for software development and collaboration.";
    }else if (userMessage.includes('Introduction to Innovation - IP')) {
        return  "This subject introduces the concepts of innovation, intellectual property (IP) management, and entrepreneurship, emphasizing the process of turning creative ideas into valuable products and businesses while considering legal and economic aspects.";
    }else if (userMessage.includes('Operations Research')) {
        return  "Operations research uses mathematical and analytical methods to optimize decision-making in complex scenarios, addressing problems like resource allocation, logistics, and system efficiency across various industries.";
    }else if (userMessage.includes('Marketing Research and Management')) {
        return  "Marketing research involves gathering and analyzing data to understand consumer preferences and market trends, aiding businesses in making informed marketing strategies and decisions to effectively promote products and services.";
    }else if (userMessage.includes('Design and Analysis of Algorithms')) {
        return  "This subject involves creating efficient algorithms and analyzing their performance using techniques like time and space complexity analysis, enabling the development of optimized solutions for various computational problems.";
    }else if (userMessage.includes('Compiler design')) {
        return  "Compiler design focuses on creating software that translates high-level programming languages into machine code, encompassing phases like lexical analysis, parsing, semantic analysis, optimization, and code generation";
    }else if (userMessage.includes('Business Strategy')) {
        return  "Business strategy involves planning and decision-making to achieve long-term goals, considering factors like market positioning, competitive advantage, resource allocation, and adapting to dynamic market conditions.";
    }else if (userMessage.includes('Design Thinking')) {
        return  "Design thinking is an iterative problem-solving approach that emphasizes empathy, ideation, prototyping, and testing to create user-centered solutions, fostering innovation and creative problem-solving across various disciplines.";
    }else if (userMessage.includes('Cloud Microservices and Applications')) {
        return  "Cloud microservices involve breaking down complex applications into smaller, loosely coupled services that can be independently developed, deployed, and scaled in cloud environments, enhancing flexibility, maintainability, and scalability.";
    }else if (userMessage.includes('Behavioral Economics')) {
        return  "Behavioral economics studies how psychological, cognitive, and emotional factors influence economic decision-making, challenging traditional assumptions and incorporating insights from psychology to better understand real-world economic behaviors.";
    }
  else {
        return "I'm sorry, I couldn't understand your query. Please ask something else.";
    }
}