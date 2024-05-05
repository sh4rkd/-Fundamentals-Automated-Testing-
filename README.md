# [Fundamentals] Automated Testing in JavaScript

![EPAM Logo](https://www.epam.com/etc/designs/epam-core/images/common/logo-print.png)

## Overview

This project focuses on developing automated tests in JavaScript using WDIO (WebdriverIO) and Mocha tools. The main goal is to provide a solid foundation in automated testing to ensure software quality and improve development efficiency.

## Installation

Before getting started, make sure you have Node.js and npm installed on your system. Then, you can follow these steps to set up the development environment:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sh4rkd/-Fundamentals-Automated-Testing-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd -Fundamentals-Automated-Testing-
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project follows an organized structure to facilitate development and maintenance of automated tests. Below is the main directory structure:

```
-Fundamentals-Automated-Testing-
│
├── app/
│   └── ...               # Application code
│
├── test/
│   ├── numbers-validator/   # Test files for numbers-validator module
│   │   └── ...             # Test specification files
│   │
│   ├── ...                 # Other test files and directories
│   │
│   └── mocharc.json        # Mochawesome configuration
│
├── .c8rc.json              # c8 configuration
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── .mocharc.json           # Mocha configuration
├── eslint.config.js        # ESLint configuration file
├── eslint.config.mjs        # ESLint configuration file (mjs format)
├── package-lock.json       # npm package lock file
└── package.json             # npm configuration file
```

## Usage

To run the automated tests and generate reports, you can use the following commands:

- To run all tests:

  ```bash
  npm test
  ```

- To generate a code coverage report:

  ```bash
  npm run coverage
  ```

## Contribution

We welcome contributions to improve this project. If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## Contact

For any inquiries or suggestions related to this project, feel free to contact us at:

- Email: developer@fredmiramontes.dev
- Website: www.epam.com
