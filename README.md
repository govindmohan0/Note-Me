# Note Me
NoteMe is a comprehensive web application designed for CSE students to streamline their access to essential study resources. The platform provides a one-stop solution for accessing previous college exam papers, PDF handwritten notes, and other study materials contributed by peers. In addition, NoteMe features an integrated online compiler and is in the process of incorporating AI-driven flashcards for personalized revision.

<img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20211133.png">
<br>

# Features

### 1. **User Authentications**
- **Firebase Authentication**: Secure and seamless login experience for students. Firebase Auth manages user accounts and tracks real-time usage, ensuring a personalized experience.
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20212227.png">

### 2. **Study Resources**
- **Access Previous Papers and Notes**: View and download previous college exam papers and PDF handwritten notes contributed by students, covering all CSE topics.
- **Comprehensive Topic List**: A curated list of all CSE topics is available within the app, making it easy to find and study the required material.
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20211155.png"><br>
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20211241.png"><br>
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20212511.png"><br>
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20220336.png"><br>
  
  

### 3. **Online Compiler**
- **Integrated Online Compiler**: Supports over 20 programming languages, enabling students to write, compile, and execute code directly within the platform.
- **Powered by Judge0 and Monaco Editor**: The online compiler uses Judge0 for code execution and Monaco React Editor for an enhanced coding experience.
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-22%20212148.png">

### 4. **AI-Driven Flashcards**
- **Flashcard Generation**: AI-driven flashcards powered by  Gemini  is being integrated into the platform. Students will be able to input study material to generate personalized flashcards, helping them assess their knowledge effectively.
  <img src="https://github.com/govindmohan0/Note-Me/blob/main/client/Output/Screenshot%202024-08-25%20193145.png">
## Installation

To run Note Me locally, follow these steps:

### Prerequisites
- React.JS
- Email.JS Account (for Email Point)
- Firebase Account (for authentication)
- Judge0 API Key
- Gemini-AI API Key
### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/noteme.git
   cd client
2. **Install Frontend Dependencies**
   - Navigate to the `client` directory and install the frontend dependencies:
     ```bash
     cd client
     npm install
     ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the `client` directory and add your Firebase credentials and MongoDB URI. Example:
     ```
     REACT_APP_RAPID_API_HOST =
     REACT_APP_RAPID_API_KEY = 
     REACT_APP_RAPID_API_URL =
     REACT_APP_API_KEY=

     ```

   - Make sure you replace the placeholders with your actual Firebase details.
     
4. **Run the Frontend Server**

    In the client directory:
   ```
   npm start
   ```
5.**Access the Application**

Open your web browser and navigate to http://localhost:3000 to view the application.

# Contribute
If you would like to contribute to NoteMe, please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
