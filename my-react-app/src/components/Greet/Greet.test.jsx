import React from 'react';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Greet Component', () => {
    it("Renders a default greeting", () => {
        render(<Greet />);
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    })

    it("Renders a greeting with name", () => {
        render(<Greet name="Mario"/>);
        expect(screen.getByText("Hello Mario")).toBeInTheDocument();
    })
})