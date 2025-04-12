# TDD String Calculator

A React TypeScript application implementing the String Calculator kata using Test-Driven Development (TDD) principles.

## Project Overview

This project implements a string calculator that follows the TDD kata requirements. The calculator takes a string of numbers as input and returns their sum.

## Features

- Handle empty strings (returns 0)
- Handle single number strings
- Handle multiple comma-separated numbers

## TDD Implementation Plan

The development follows the three laws of Test-Driven Development:

1. **First Law**: You are not allowed to write any production code unless it is to make a failing unit test pass.
2. **Second Law**: You are not allowed to write any more of a unit test than is sufficient to fail; compilation failures are also considered failures.
3. **Third Law**: You are not allowed to write any more production code than what is sufficient to pass the one failing unit test.

### Implementation Steps

1. **Empty String Test**
   - Test: Empty string should return 0
   - Implementation: Basic StringCalculator class with add method returning 0

2. **Single Number Test**
   - Test: Single number string should return that number
   - Implementation: Parse the input string to an integer

3. **Multiple Numbers Test**
   - Test: Comma-separated numbers should return their sum
   - Implementation: Split string by comma and sum the numbers

## Project Structure

```
src/
├── components/
├── services/
│   ├── StringCalculator.ts  # Core calculator logic
│   └── __tests__/           # Test files
│       └── StringCalculator.test.ts
└── App.tsx                  # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

```
npm start
```

### Running Tests

```
npm test
```

## Technologies Used

- React
- TypeScript
- Jest
- React Testing Library

## TDD Benefits

This project demonstrates the benefits of TDD:

- **Confidence**: Each feature is backed by tests
- **Documentation**: Tests serve as executable documentation
- **Refactoring**: Safe refactoring with test coverage
- **Design**: Tests drive good design decisions
- **Regression Prevention**: Tests catch regressions early

## License

MIT
