import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {render} from 'enzyme';

configure({adapter: new Adapter()});
import * as reactRedux from 'react-redux'

import Rate from "../src/components/countryPage/Rate";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe("<Rate/> test", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    beforeEach(() => {
        useSelectorMock.mockClear();
    })

    it("Checks for 5 stars icons", () => {

        const activeStars = 3, placeId = '123';

        const rate = render(<Rate placeId={placeId} activeStars={activeStars}/>);
        const stars = rate.find(".fas.fa-star");

        expect(stars.length).toEqual(5);
    })
});
