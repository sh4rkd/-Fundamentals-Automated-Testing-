# [Fundamentals] Automated Testing in JavaScript

![EPAM Logo](https://www.epam.com/etc/designs/epam-core/images/common/logo-print.png)

## Overview

This project focuses on developing automated tests in JavaScript using WDIO (WebdriverIO) and Mocha tools. The main goal is to provide a solid foundation in automated testing to ensure software quality and improve development efficiency.

## Installation

Before getting started, make sure you have Node.js and npm installed on your system. Then, you can follow these steps to set up the development environment:

1. Clone this repository to your local machine:

   ```bash
   git clone --single-branch --branch webdriver-task-2 https://github.com/sh4rkd/js-automated-testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd js-automated-testing
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the automated tests, you can use the following command:

```bash
npm run wdio
```

This command will execute the automated tests using WDIO (WebdriverIO) and Mocha based on the configuration in `wdio.conf.cjs`.

## Project Structure

The project follows an organized structure to facilitate development and maintenance of automated tests. Below is the main directory structure:

```
js-automated-testing/
│
├── node_modules/                 # Installed npm packages
├── screenshots/                  # Screenshots captured during tests
├── test/                         # Test files and configurations
│   ├── pageobjects/              # Page Object Model (POM) files
│   │   │  pasteBin/              # Page objects for the PasteBin page
│   │   │   └── pasteBin.page.js  # Page object for interactions specific to PasteBin
│   │   └── ...                   # Page object files
│   │
│   ├── specs/                    # Test specifications
│   │   │  pasteBin.spec.js       # Automated tests for the PasteBin functionality
│   └── └── ...                   # Test files (specifications)
│
├── utils/                        # Utils files
│   └── page.js                   # Page object for generic web page interactions
│
├── .gitignore             # Git ignore file
├── package-lock.json      # npm package lock file
├── package.json           # npm configuration file
├── README.md              # Project README file (you are here)
└── wdio.conf.cjs          # WDIO (WebdriverIO) configuration file 
```

## Contribution

Contributions to improve this project are welcome. If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## Contact

For any inquiries or suggestions related to this project, feel free to contact:

- Author: Fred Miramontes
- Email: [developer@fredmiramontes.dev](mailto:developer@fredmiramontes.dev)
- Website: [www.epam.com](https://www.epam.com)