<<<<<<< HEAD
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
=======
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss
    ],
};
>>>>>>> 3cfefa07cddfea5f78ef24878bdd83219e7fa676
