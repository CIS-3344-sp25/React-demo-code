import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

describe('Counter Component', ()=> {
    it("increments the counter", async() => {
        render(<Counter/>);
        const buttonElement = screen.getByRole("button", {name: "Increment"});
        const counteValue = screen.getByTestId("counterValue");
        expect(counteValue.textContent).toEqual("0");

        await userEvent.click(buttonElement)
        expect(counteValue.textContent).toEqual("1");
    })
})