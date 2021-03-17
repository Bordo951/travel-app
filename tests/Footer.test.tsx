import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
configure({ adapter: new Adapter()});
import * as reactRedux from 'react-redux'

import Footer from "../src/parts/Footer";
describe("<Footer/> test", () =>{
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    })

    it("Checks the copyright message", () => {
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

        const footer = render(<Footer/>);
        const aboutCourse = footer.find(".copyright");

        expect(aboutCourse.html()).toEqual(
            "© 2021Q1 The Rolling Scopes School, custom copyright message"
        );
    })

    it("Checks that Team component exists", () => {
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

        const footer = shallow(<Footer/>);
        const Team = footer.find("Team");

        expect(Team).toHaveLength(1);
    })
});
