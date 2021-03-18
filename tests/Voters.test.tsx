import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {render} from 'enzyme';

configure({adapter: new Adapter()});
import * as reactRedux from 'react-redux'

import Voters from "../src/components/countryPage/Voters";

describe("<Voters/> test", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    })

    it("Checks the state of the button", () => {
        useSelectorMock.mockReturnValue({
            places: {
                close: "test button title"
            }
        });

        const onCloseMock = jest.fn(), imageIndex = 0;

        const voter = render(<Voters placeIndex={imageIndex} onClose={onCloseMock}/>);
        const button = voter.find("Button");

        expect(button.text()).toEqual("test button title");
    })

    it("Checks the click on button event call", () => {
        const onCloseMock = jest.fn(), imageIndex = 0;

        const voter = shallow((<Voters placeIndex={imageIndex} onClose={onCloseMock}/>));
        const button = voter.find('.close-voter-button');
        button.simulate('click');
        expect(onCloseMock.mock.calls.length).toEqual(1);
    })
});
