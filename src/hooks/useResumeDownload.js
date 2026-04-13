import { useToast } from '../context/ToastContext';

const SUCCESS_MESSAGES = [
  "Thanks for downloading resume check in your file manager! 📁",
  "Resume incoming! Future teammate detected? 🤝",
  "Fresh PDF served! Happy reading. 📚",
  "Quality content captured! My resume is now on your machine. 🚀",
  "Download complete! Ready to start something great? ✨"
];

const ERROR_MESSAGES = [
  "Oh no! A bug in production? I better fix this fast... 🐞",
  "Looks like I didn't test this well enough... Lakshya will fix it! 🔧",
  "404: Resume vanished! Maybe it's playing hide and seek? Try reloading. 🔍",
  "Failed! You found a bug—I promise I'm better at testing your software! 😅",
  "Network timeout? My server is acting like it's Friday at 5 PM. Try again! ⏳",
  "Oh no, seems like I haven't tested my own website! Please reload. 🤦‍♂️"
];

export const useResumeDownload = () => {
  const { addToast } = useToast();

  const handleDownload = async (url, filename = 'Lakshya_Sharma_QA_Resume.pdf') => {
    try {
      // 1. Verify file existence before initiating download
      const response = await fetch(url, { method: 'HEAD' });
      
      if (!response.ok) {
        throw new Error('File not found');
      }

      // 2. Initiate download using a hidden anchor tag
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 3. Show a random success message
      const randomSuccess = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
      addToast(randomSuccess, 'success');

    } catch (error) {
      console.error('Download failed:', error);
      
      // 4. Show a random creative error message
      const randomError = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
      addToast(randomError, 'error', 7000);
    }
  };

  return { handleDownload };
};
