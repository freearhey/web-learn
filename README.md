# [Web Learn](https://freearhey.github.io/web-learn/)

Web Learn is an open source service which provides simple access to thousands of video lessons on web developing and programming.

[![Web Learn](https://raw.githubusercontent.com/freearhey/web-learn/master/build/images/weblearn-banner.png)](https://freearhey.github.io/web-learn/)

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

Code copyright 2016 Aleksandr Statciuk. Code released under [the MIT license](https://github.com/freearhey/web-learn/blob/master/LICENSE).