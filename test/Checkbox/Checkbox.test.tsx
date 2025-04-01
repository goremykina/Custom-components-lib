import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import React from "react";

test("checkbox is disabled when disabled prop is true", () => {
    const { getByLabelText } = render(
        <Checkbox
            label="Test Checkbox"
            value="checkbox"
            required={true}
            disabled={true}
            onChange={() => {}}
        />
    );

    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});

test("checkbox changes state on click", () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
        <Checkbox
            label="Test Checkbox"
            value="checkbox"
            required={true}
            onChange={onChangeMock}
        />
    );

    const checkbox = getByLabelText("Test Checkbox");
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
});

test("checkbox has required attribute", () => {
    const { getByLabelText } = render(
        <Checkbox
            label="Test Checkbox"
            value="checkbox"
            required={true}
            onChange={() => {}}
        />
    );

    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox).toBeRequired();
});

test("checkbox has correct size class based on size prop", () => {
    const { getByLabelText } = render(
        <Checkbox
            label="Test Checkbox"
            value="checkbox"
            required={true}
            size="small"
            onChange={() => {}}
        />
    );

    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox.closest('label')).toHaveClass('checkboxSmall');
});

test("checkbox has correct color class based on color prop", () => {
    const { getByLabelText } = render(
        <Checkbox
            label="Test Checkbox"
            value="checkbox"
            required={true}
            color="green"
            onChange={() => {}}
        />
    );

    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox.closest('label')).toHaveClass('checkboxGreen');
});

