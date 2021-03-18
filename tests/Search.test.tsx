import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {render} from 'enzyme';

configure({adapter: new Adapter()});
import * as reactRedux from 'react-redux'

import Search from "../src/components/homePage/Main/Search";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe("<Voters/> test", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    beforeEach(() => {
        useSelectorMock.mockReturnValue({
            searchField: {
                placeholder: 'test placeholder'
            },
            searchBtn: {
                text: 'search text'
            }
        });
    })

    it("Checks the search input id prop", () => {
        const voter = render(<Search/>);
        const button = voter.find("input");

        expect(button.prop("id")).toEqual('search');
    })

    it("Checks the search placeholder prop", () => {
        const voter = render(<Search/>);
        const button = voter.find("input");

        expect(button.prop("placeholder")).toEqual('test placeholder');
    })

    it("Checks the search button text", () => {
        const voter = render(<Search/>);
        const button = voter.find("button");

        expect(button.text()).toEqual('search text');
    })
});
