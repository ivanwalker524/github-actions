import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["<rootDir>/tests/**/*.test.ts"],
	// Other Jest configuration options can be added here
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
};

export default config;
