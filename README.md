# [Web Learn](https://freearhey.github.io/web-learn/)

Web Learn is an open source service which provides simple access to thousands of video lessons on web developing and programming.

[![Web Learn](banner.png)](https://freearhey.github.io/web-learn/)

## Installation

To run Web Learn on your computer, you first need to copy the entire repository in any of the ways convenient for you. For example, this can be done using the `git clone` command:

```sh
git clone https://github.com/freearhey/web-learn.git
```

Then you need to go to the project folder and install all the dependencies:

```sh
# change directory
cd web-learn

# install dependencies
npm install
```

The next step is to create the `.env.local` file in the project folder with the YouTube Data API key:

```sh
echo "export const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE'" > .env.local
```

The key can be obtained via Google API Console: https://console.developers.google.com/

And after that you can start the development server:

```sh
npm run dev
```

and open the site in a browser.

## Contributing
If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/freearhey/web-learn/issues) or a [pull request](https://github.com/freearhey/web-learn/pulls).

For example, if you want to add new topic to the site you only need to create a Yaml file inside the [topics](https://github.com/freearhey/web-learn/tree/master/src/topics) folder with its description

#### nodejs.yml
```yml
id: nodejs # topic id
title: Node.js # full title of the topic
score: 149856 # number of questions on http://stackoverflow.com/tags
color: '#539e43' # usually the main color of the logo
site: http://nodejs.org # official site (optional)
```

To add a logo to a topic you need to upload it to the [topics/icons](https://github.com/freearhey/web-learn/tree/master/src/topics/icons) directory with the same filename as topic id.

## Copyright and license

Code copyright 2018 Aleksandr Statciuk. Code released under [the MIT license](https://github.com/freearhey/web-learn/blob/master/LICENSE).
