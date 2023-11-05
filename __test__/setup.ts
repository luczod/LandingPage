import "@testing-library/jest-dom";
import "jest-styled-components";
jest.spyOn(console, "error").mockImplementation(() => {});
jest.spyOn(console, "warn").mockImplementation(() => {});
