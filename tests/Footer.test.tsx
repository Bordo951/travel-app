import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {render} from 'enzyme';

configure({adapter: new Adapter()});
import * as reactRedux from 'react-redux'

import Footer from "../src/parts/Footer";
import Widgets from "../src/components/countryPage/Widgets";

describe("<Footer/> test", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockReturnValue({
            team: {
                members: {
                    vladislav: "Vladislav Horeh",
                    farrukh: "Farrukh Khusanov",
                    irina: "Irina Selivanova",
                    mahti: "Mahti Shavaev"
                },
            },
            copyright: "custom copyright message"
        });
    })

    it("Checks the copyright message", () => {
        const footer = render(<Footer/>);
        const aboutCourse = footer.find(".copyright");

        expect(aboutCourse.html()).toEqual(
            "© 2021Q1 The Rolling Scopes School, custom copyright message"
        );
    })

    it("Checks that Team component exists", () => {
        const footer = shallow(<Footer/>);
        const Team = footer.find("Team");

        expect(Team).toHaveLength(1);
    })
});
