import * as React from 'react'
import Button from '../Button';
import { render, fireEvent, cleanup } from 'react-testing-library';


describe('<Button />', () => {
    afterEach(cleanup);

    it('renders default', () => {
        const { getByTestId } = render(<Button></Button>);
        expect(getByTestId('button').getAttribute('type')).toBeNull;
        expect(getByTestId('button').classList).toBeNull;
    })

    it('adds type', () => {
        const { getByTestId } = render(<Button type="submit"></Button>);
        expect(getByTestId('button').getAttribute('type')).toEqual('submit')
    })

    it('adds className', () => {
        const { getByTestId } = render(<Button className="primary"></Button>);
        expect(getByTestId('button').classList.contains('primary')).toBeTruthy;
    })

    it('adds children', () => {
        const { getByTestId } = render(<Button>Submit</Button>);
        expect(getByTestId('button').textContent).toEqual('Submit');
    })
    
    it('emits click event', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Button onClick={onClick}>Submit</Button>);
        fireEvent(getByTestId('button'), new MouseEvent('click', { bubbles: true }));
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})