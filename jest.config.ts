import type {Config} from 'jest'
import {defaults} from 'jest-config';


const config:Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
    transform: {
        '^.+\\.(t|j)sx?$' : ['@swc/jest', {
            jsc: {
                parser: {
                    syntax: 'typescript',
                    jsx: true,
                    decorators: true,
                },
                transform: {
                    react: {
                        runtime: 'automatic'
                    }
                }
            }
        }]
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/'
    ],
}

export default config