# [Fundamentals] Automated Testing in JavaScript

![EPAM Logo](https://www.epam.com/etc/designs/epam-core/images/common/logo-print.png)

## Overview

This project focuses on developing automated tests in JavaScript using WDIO (WebdriverIO) and Mocha tools. The main goal is to provide a solid foundation in automated testing to ensure software quality and improve development efficiency.

## Installation

Before getting started, make sure you have Node.js and npm installed on your system. Then, you can follow these steps to set up the development environment:

1. Clone this repository to your local machine:

   ```bash
   git clone --single-branch --branch framework-task https://github.com/sh4rkd/-Fundamentals-Automated-Testing-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd -Fundamentals-Automated-Testing-
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the tests, ensure you have a `.env` file in the root directory with the following content:

```plaintext
GOOGLE_ENV=
```

To run the tests in the production environment, set `GOOGLE_ENV` to `production`:

```plaintext
GOOGLE_ENV=production
```

If `GOOGLE_ENV` is not set, the tests will default to the `test` environment based on the following code:

```javascript
const environment = process.env.GOOGLE_ENV || 'test';
const settings = require(`./test/config/config.${environment}.json`);
```

## Usage

To run the automated tests, you can use the following commands:

### Main Tests

```bash
npm run wdio
```

This command will execute the main automated tests using WDIO (WebdriverIO) and Mocha based on the configuration in `wdio.conf.cjs`.

### Smoke Tests

```bash
npm run smoke
```

This command will execute the smoke tests.

### Sanity Tests

```bash
npm run sanity
```

This command will execute the sanity tests.

## Project Structure

The project follows an organized structure to facilitate development and maintenance of automated tests. Below is the main directory structure:

```
-Fundamentals-Automated-Testing-/
│
├── node_modules/                 # Installed npm packages
├── screenshots/                  # Screenshots 
├── test/                         # Test files and configurations
│   ├── config/                   # Configuration files for environments
│   │   ├── config.production.json  # Production environment configuration
│   │   └── config.test.json        # Test environment configuration
│   │
│   ├── pageobjects/              # Page Object Model (POM) files
│   │   └── cloud.google/         # Page objects for the Cloud Google page
│   │       └── cloudGoogle.page.js  # Page object for interactions specific to Cloud Google
│   │
│   ├── sanity/                   # Sanity test specifications
│   │   └── cloudGoogleSanity.spec.js  # Sanity tests for Cloud Google
│   │
│   ├── smoke/                    # Smoke test specifications
│   │   └── cloudGoogleSmoke.spec.js  # Smoke tests for Cloud Google
│   │
│   └── specs/                    # General test specifications
│       └── cloudGoogle.spec.js   # General tests for Cloud Google
│
├── utils/                        # Utility files
│   └── page.js                   # Page object for generic web page interactions
│
├── .gitignore                    # Git ignore file
├── package-lock.json             # npm package lock file
├── package.json                  # npm configuration file
├── README.md                     # Project README file (you are here)
└── wdio.conf.cjs                 # WDIO (WebdriverIO) configuration file 
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