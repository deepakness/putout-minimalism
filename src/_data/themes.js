module.exports = {
  default: {
    body: 'bg-white text-gray-900',
    header: 'bg-gray-100 text-gray-900',
    card: 'bg-gray-50 border border-black border-opacity-10 shadow-sm',
    button: 'bg-gray-200 text-gray-900 hover:bg-gray-300 border border-black border-opacity-10',
    prose: 'prose',
    icons: 'text-gray-600 hover:text-gray-900 transition-colors duration-300'
  },
  glass: {
    body: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white bg-fixed',
    header: 'bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20',
    card: 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg',
    button: 'bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-30',
    prose: 'prose prose-invert',
    icons: 'text-gray-300 hover:text-gray-900 transition-colors duration-300'
  },
  dark: {
    body: 'bg-dark-background text-dark-text',
    header: 'bg-dark-card text-dark-text',
    card: 'bg-dark-card border border-dark-border shadow-md',
    button: 'bg-dark-card text-dark-text border border-dark-border hover:bg-opacity-80',
    prose: 'prose prose-invert',
    icons: 'text-gray-400 hover:text-gray-900 transition-colors duration-300'
  },
};