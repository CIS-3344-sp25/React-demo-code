import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NyTimes from './NyTimes';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { mockData } from './mocks';

describe('NYTimes Compoenet', () => {
    beforeEach(()=>{
        global.fetch = vi.fn()
    })
    afterEach(()=> {
        vi.resetAllMocks
    })

    it("fetch articels from NYTimes API", async() => {
        global.fetch.mockResolvedValueOnce({
            ok:true,
            json: async() => mockData
        });

        render(<NyTimes />);
        fireEvent.click(screen.getByRole("button", {name: "Fetch Articles"}));

        const article = await screen.findByText(
            /When the airport shut down travelers were on the hook/i
        );

        expect(article).toBeInTheDocument();
    })
})
