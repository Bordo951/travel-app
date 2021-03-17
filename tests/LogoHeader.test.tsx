import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

configure({adapter: new Adapter()});

import LogoHeader from "../src/components/homePage/Header/LogoHeader";

describe("<LogoHeader/> test", () => {
    it("The path to the header logo must be set", () => {
        const logoHeader = shallow(<LogoHeader/>);
        const img = logoHeader.find("img");

        expect(img.prop("src")).toEqual('./images/logo.png');
    })

    it("LogoHeader is linked", () => {
        const result = shallow(<LogoHeader/>);
        const navLink = result.find("NavLink");

        expect(navLink.prop("to")).toEqual('/');
    });
});
