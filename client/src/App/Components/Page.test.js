import React from "react";
import { create } from "react-test-renderer";
import Page from "./Page";
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

describe("Page component", () => {
    it("shows a list of comics", async () => {
        const component = create(<Router><Page /></Router>);
        const instance = component.getInstance();
        await instance.componentDidMount();
    });
});

it('Page component render content', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).not.toBeNull();
});
