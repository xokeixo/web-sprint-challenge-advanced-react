import React, { useImperativeHandle } from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zipCode = screen.getByLabelText(/zip:/i)
    const submit = screen.getByRole('button')

    userEvent.type(firstName, 'Markeisha')
    userEvent.type(lastName, 'Wallace')
    userEvent.type(address, '2468 Rainbow Rd')
    userEvent.type(city, 'Dallas')
    userEvent.type(state, 'TX')
    userEvent.type(zipCode, '75023')
    userEvent.click(submit)

    const successMessage = screen.getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toBeTruthy()
});
