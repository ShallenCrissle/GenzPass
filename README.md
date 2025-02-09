# GenzPass – Password Strength & Security Analysis
  GenzPass is a web-based application designed to enhance password security by offering multiple features, including efficient password generation, strength estimation based on estimated crack time, and password hashing with salting using the bcrypt algorithm. The project aims to provide users with insights into how passwords can be compromised and the best practices to strengthen their security.
    This application leverages Node.js, HTML, CSS, JavaScript, and REST API to deliver a seamless and interactive experience. Additionally, it incorporates blockchain-oriented principles by offering information on password breaches and related security research.
# Technology Stack
  Frontend: HTML, CSS, JavaScript
  Backend: Node.js, Express.js
  Security: Bcrypt for password hashing and salting
  API Communication: REST API
  Mathematical Model: Exponential complexity calculations for crack time estimation
# Features
   1)Password Strength Estimation
     GenzPass evaluates password strength by estimating the time required to crack a given password. The estimation follows a mathematical approach where:A one-character password has 95 possible combinations (26 uppercase letters, 26 lowercase letters, 10 digits, and 33 symbols).As the length increases, complexity grows exponentially in the form of 95^length.This provides an approximate idea of how long an attacker would take to crack the password using brute-force techniques.
     
   2)Secure Password Hashing and Salting
     Passwords are hashed and salted using the bcrypt algorithm, which is more secure compared to weaker hashing methods like SHA-256. Bcrypt incorporates a built-in salt and an adjustable work factor, making brute-force attacks significantly more difficult.
     The process of bcrypt hashing works as follows:
     A random salt is generated and appended to the password.
     The combined string is passed through multiple rounds of the Blowfish encryption algorithm.
     The final hashed password is stored along with the salt, ensuring unique hashes for identical inputs.
     
  3)Random Password Generation
     The application generates strong passwords by combining uppercase letters, lowercase letters, symbols, and digits in a randomized sequence. This ensures high entropy, making the password resistant to dictionary and brute-force attacks.
     
  4)Blockchain-Oriented Security Insights
    The project integrates security research and references articles that provide insights into how passwords are hacked and breached. This allows users to stay informed about evolving cyber threats and adopt better security practices.

  # Installation
  1) Clone the repository: git clone https://github.com/ShallenCrissle/GenzPass.git
  2) Install Dependency: npm install
  3) Run the application using: node server.js or npm start
  4) Access on the browser: Go to http://localhost:3000/ to use the application.

