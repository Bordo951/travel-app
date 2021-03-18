import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

configure({adapter: new Adapter()});

import Widgets from "../src/components/countryPage/Widgets";

describe("<Widgets/> test", () => {
    it("All widgets are defined", () => {
        const result = shallow(<Widgets/>);
        const WeatherWidget = result.find("WeatherWidget");
        const DateAndTimeWidget = result.find("DateAndTimeWidget");
        const CurrencyWidget = result.find("CurrencyWidget");

        expect(WeatherWidget).toHaveLength(1);
        expect(DateAndTimeWidget).toHaveLength(1);
        expect(CurrencyWidget).toHaveLength(1);
    })

    it("Checks init button icon", () => {
        const result = shallow(<Widgets/>);

        expect(result.find("i").prop("className")).toEqual('fas fa-caret-square-left');
    })
});
