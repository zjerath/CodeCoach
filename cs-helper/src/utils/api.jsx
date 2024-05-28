import axios from 'axios';

const sendChatRequest = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful CS teaching assistant, skilled in generating example C and C++ code.' },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer my-api-key`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error sending chat request:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export { sendChatRequest };